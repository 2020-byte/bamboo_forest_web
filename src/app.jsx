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
import { useState } from 'react';
import Menubar from './components/menubar/menubar';
import Widgetbar from './components/widgetbar/widgetbar';
import Write from './components/write/write';

function App() {

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
      <div>
        <Routes>
          <Route path="/login" element={<Login login={signIn}/>} />
        </Routes>
      </div>
    )
  } 
  else {
    return (
      <div style={{height: '100vh', width: '100%'}}>
        <Header logout={logout}/>
        <div className="d-flex flex-column justify-content-between h-100">
          <div style={{height: 'max-content'}}>
            <div className={styles.box}>
              <section className={styles.item1}>
                <Menubar />
              </section>
              <section className={styles.item2}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/post" element={<Post />} />
                    <Route path="/write" element={<Write />} />
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
