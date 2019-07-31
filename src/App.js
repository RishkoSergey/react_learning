import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <Header />
        <Navbar />
        <div className='app_wrapper_content'>
          <Route path='/messages' component={Dialogs} />
          <Route path='/profile' component={Profile} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
