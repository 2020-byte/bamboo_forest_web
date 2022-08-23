import { Route, Routes } from 'react-router-dom';
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

function App({postService}) {

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

  const [login, setLogin] = useState(true);
  const logout = () => {
    console.log("Log out!");
    setLogin(false);
  }

  const signIn= () => {
    console.log("Log in!");
    setLogin(true);
  }
  

  //페이지가 새로고침 될 때 서버로부터 로그인 상태 데이터를 받아와서 login상태를 false, true로 바꿔줘야 함.
  //안 그러면 당연히 새로고침할 때 login ture로 set됨.

  if( login === false) {
    return (
      <div className={styles.logout}>
        <Routes>
          <Route path="/login" element={<Login login={signIn}/>} />
          <Route path="/sign_up" element={<SignUp login={signIn}/>} />
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
                      <Route path=":id" element={<P />}/>
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
