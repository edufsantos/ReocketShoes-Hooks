import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import './config/reactotronConfigure'
import Header from './components/Header';

import Routes from './routes';
import store from './store'
import GlobalStyles from './styles/global'
function App() {
  return (
    <Provider store={store}>
       <BrowserRouter>
        <Header/> 
        <Routes/>
        <GlobalStyles/>
      </BrowserRouter>
    </Provider>
   
  );
}

export default App;
