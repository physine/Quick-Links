import React from 'react';

import NavBar from './components/navBar/NavBar'
import ItemWindow from './components/itemWindow/ItemWindow'

import '../src/App.css'

function App() {
  return (
    <div className="App">
      <div className='con'>
        <NavBar></NavBar>
        <ItemWindow></ItemWindow>
      </div>
    </div>
  );
}

export default App;
