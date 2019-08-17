import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route } from 'react-router-dom';

const App = props => {
  return (
    <div>
      <Header />
      <div className='app_wrapper'>
        <div><Navbar /></div>
        <div className='app_wrapper_content'>
          <Route exact path='/' render={() => <Profile store = {props.store} />} />
          <Route path='/profile' render={() => <Profile store = {props.store} />} />
          <Route path='/dialogs' render={() => <DialogsContainer store = {props.store} />} />
        </div>
      </div>
    </div>
  );
}

export default App;
