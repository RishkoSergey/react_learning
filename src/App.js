import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';

const App = props => {
  return (
    <div>
      <Header />
      <div className='app_wrapper'>
        <div><Navbar /></div>
        <div className='app_wrapper_content'>
          <Route exact path='/' render={() => <Profile profilePage={props.state.profilePage}
                                                       dispatch={props.dispatch} />} />
          <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                        dispatch={props.dispatch} />} />
          <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                        messages={props.state.dialogsPage.messages} />} />
        </div>
      </div>
    </div>
  );
}

export default App;
