import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Landing from "./components/Landing"
import { PersistGate } from 'redux-persist/integration/react'

import {store, persistedStore} from './store';

const App = () => {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <div className="App">
        <Landing />
      </div>
    </PersistGate>  
    </Provider>
  );
}

export default App;
