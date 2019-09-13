import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import { Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = () => {
  return (
    <div>
      <Header />
      <div className='app_wrapper'>
        <div><Navbar /></div>
        <div className='app_wrapper_content'>
          <Route exact path='/' component = {Profile} />
          <Route path='/profile' component = {ProfileContainer} />
          <Route path='/dialogs' component = {DialogsContainer} />
          <Route path='/users' component = {UsersContainer} />
        </div>
      </div>
    </div>
  );
}

export default App;
