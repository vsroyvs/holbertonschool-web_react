import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";


function App({ isLoggedIn }) {
  return (
    <>
      <Notifications displayDrawer />
      <Header />
      {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
