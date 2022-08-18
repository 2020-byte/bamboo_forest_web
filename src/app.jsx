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

function App() {
  const login = true;

  if( login === false) {
    return (
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    )
  } 
  else {
    return (
      <div style={{height: '100vh'}}>
        <Header />
        <div className="d-flex flex-column justify-content-between h-100">
          <div className="h-100">
            <div className={styles.box}>
              <section className={styles.item1}>Left</section>
              <section className={styles.item2}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/notification" element={<Notification />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/bookmark" element={<Bookmark />} />
                    <Route path="/post" element={<Post />} />
                </Routes>
              </section>
              <section className={styles.item3}>Right</section>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
