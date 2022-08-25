import { Route, Routes, useNavigate } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Login from './components/login/login';
import Home from './components/home/home';
import Notification from './components/notification/notification';
import History from './components/history/history';
import Bookmark from './components/bookmark/bookmark';
import Post from './components/post/post';
import styles from './app.module.css';
import { useEffect, useState } from 'react';
import Menubar from './components/menubar/menubar';
import Widgetbar from './components/widgetbar/widgetbar';
import Write from './components/write/write';
import SignUp from './components/sign_up/sign_up';
import Report from './components/reprot/report';
import PostViewSettings from './components/post_view_settings/post_view_settings';
import EditMyInformation from './components/edit_my_information/edit_my_information';
import P from './components/p/p';
import Default from './components/default/default';
import { AuthErrorEventBus } from './context/AuthContext';

function App({postService, authService, authErrorEventBus, tokenStorage}) {

  const toggleMenu = window.innerWidth < 992; //여기는 값 저장하고 쓸 수 있는 게 새로고침이나 주소 바뀔 때 컴포넌트 바뀌면서 그 때 저장된 값을 실시간으로 바로 쓰니까.
  const [toggle, setToggle] = useState(toggleMenu ? true: false);
  const onToggle = () => {
    (toggleMenu) && setToggle(!toggle);
  };


  const handleResize = () => {
    if(window.innerWidth >= 992) {
      setToggle(false);
    }else {
      setToggle(true);
    }

    // if(toggleMenu) { //여기서 이렇게 하면 안디고 windo.innerWidth < 992 직접해야지 정확히 화면바뀐 그 때 값을 얻지. 컴포넌트가 바뀌는게 아니고 css가 바뀌니 렌더링새로 안하니까 실시간 값을 가져오지 않고 처음에 렌더할 때 값을 가져오지.
    //   setToggle(true);
    // }else {
    //   setToggle(false);
    // }
  }

  
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => { // cleanup 
      window.removeEventListener('resize', handleResize);
    }
  }, []);



  const navigate = useNavigate();
  const [user, setUser] = useState(undefined);

  //authService 함수에서 로컬스토리지에 토큰을 저장하고 지움. 
  //(처음에 로그인 하거나 회원가입할 때는 jwt로 토큰을 가져와서 로컬스토리지에 저장.
  // 로컬스토리지에 토큰있으면 authService.me함수를 통해서 그 토큰을 서버에 전달한 후 서버에서 user을 불러와서 setUser(user)로 user 계속 값을 줘서 UI를 유지시킴 )
  //CRUD 요청할 때는 postService 함수에서 토큰을 로컬스토리지에서 가져와서 서버에 전달한 후 결과값들을 불러옴.
  const signUp = async (username, email, password) => {
    console.log("app.jsx"+username);
    await authService
        .signup(username, email, password)
        .then((user) => setUser(user))
    navigate('/home')
    console.log("Sign Up");
  };
      

  const signIn = async (email, password) => {
    await authService
      .login(email, password)
      .then((user) => setUser(user))
    navigate('/home')
    console.log("Log in!");
  };

  useEffect(() => 
    async () => 
      await authService
        .me()
        .then((user) => setUser(user))
    
  , []);
  
  

  const logout = async () => {
    authService.logout().then(() => setUser(undefined));
    console.log("Log out!");
  }

  useEffect(() => {
    authErrorEventBus.listen((err) => {
      console.log(err);
      setUser(undefined);
    })
  }, [AuthErrorEventBus]);

  


  if(!user) {
    return (
      <div className={styles.logout}>
        <Routes>
          <Route path="/*" element={<Login login={signIn}/>} />
          <Route path="/login" element={<Login login={signIn}/>} />
          <Route path="/sign_up" element={<SignUp signUp={signUp}/>} />
        </Routes>
      </div>
    )
  } 
  else {

    return (
      <div style={{height: '100vh', width: '100%'}}>
        <Header logout={logout} onToggle={onToggle} closeMenubar={onToggle}/>
        <div className="d-flex flex-column justify-content-between h-100" style={{backgroundColor: 'rgb(228, 236, 227)'}}>
          <div style={{height: 'max-content', backgroundColor: 'rgb(228, 236, 227)'}}>
            <div className={styles.box}>
              <section className={styles.item1}>
                <Menubar toggle={toggle} closeMenubar={onToggle}/>
              </section>
              <section className={styles.item2}>
                <Routes> 
                    <Route path="" element={<Default />} >
                      <Route path="home" element={<Home />} />
                      <Route path="write/:id" element={<Write postService={postService} />} />
                      <Route path="write/" element={<Write  postService={postService}/>} />
                      <Route path="report" element={<Report />} />
                      <Route path="post_view_settings" element={<PostViewSettings />} />
                      <Route path="edit_my_information" element={<EditMyInformation />} />
                    </Route>
                    
                    <Route path="posts" element={<Post postService={postService}/>} >
                      <Route path=":id" element={<P userId={user.id}/>}/>
                    </Route>
                </Routes>
              </section>
              <section className={styles.item3}>
                <Widgetbar />
              </section>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
