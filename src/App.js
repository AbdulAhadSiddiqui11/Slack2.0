import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <h1> Hello World! </h1>

      <Header />
      <div className="app__body">
        <Sidebar />

      </div>
    </div>
  );
}

export default App;
