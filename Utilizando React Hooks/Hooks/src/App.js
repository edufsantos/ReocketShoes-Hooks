import React from 'react';
import {BrowserRouter, Router} from 'react-router-dom';
import {Provider} from 'react-redux'
import './config/reactotronConfigure'
import Header from './components/Header';
import {ToastContainer } from 'react-toastify'
import history from './services/history';
import Routes from './routes';
import store from './store'
import GlobalStyles from './styles/global'
function App() {
  return (
    <Provider store={store}>
       <Router history={history}>
        <ToastContainer autoClose={3000}/>
        <Header/> 
        <Routes/>
        <GlobalStyles/>
      </Router>
    </Provider>
   
  );
}

export default App;
