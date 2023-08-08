import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//&
import styles from './App.module.scss';

//?
import ImgUpload from './components/ImgUpload';
import Feed from './components/Feed';
import Header from './components/Header';
import Loading from './components/Helper/Loading';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Header />
        {/* <Loading /> */}
        <Routes>
          <Route path="/" end element={<Feed />} />
          <Route path="/postar" element={<ImgUpload />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
