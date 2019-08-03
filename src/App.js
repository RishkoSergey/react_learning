import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

const App = props => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <Header />
        <Navbar />
        <div className='app_wrapper_content'>
          <Route exact path='/' render={() => <Profile posts={props.state.profilePage.posts} />} />
          <Route path='/profile' render={() => <Profile posts={props.state.profilePage.posts} />} />
          <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs} 
                                                        messages={props.state.dialogsPage.messages} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
