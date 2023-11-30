import React from 'react';
import logo from '../assets/logo-holberton.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from '../utils/utils';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


function App() {
  return (
    <>
      <div className="App">
        <Notifications />
        <Header />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default App;
