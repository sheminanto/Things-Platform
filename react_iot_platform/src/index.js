import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './store/reducers/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {reduxFirestore,getFirestore} from 'redux-firestore'
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase'
import axios from 'axios'
import store from './store/store'

// axios.defaults.headers.common['Authorization'] = 'Token ' + localStorage.getItem('token');
// function saveToLocalStorage(params) {
  
// }
// const store = createStore(rootReducer,
//   // compose(
//   applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
//   // reduxFirestore(fbConfig),
//   // reactReduxFirebase(fbConfig)
//   // )
//   );

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}><App /></Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
