import React from 'react';
import './App.css';
import {NewForm} from './NewForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewForm defaultValue={'My new form'} />
      </header>
    </div>
  );
}

export default App;
