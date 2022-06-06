import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import './App.css';
import { HomePage } from './HomePage';
import { MyPage } from './MyPage';
import {ContactPage} from './ContactPage'
import { routesPaths } from './routes';
import { Navigation } from './navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className='App-header'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<div>Page not found - 404</div>} />
          <Route path={`/${routesPaths.about}`} element={<AboutPage />} />
          <Route path={`/${routesPaths.contact}`} element={<ContactPage />} />
          <Route path={`/${routesPaths.mypage}`} element={<MyPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
