import React from 'react';
import AppContainer from './app-container';
import Nav from './components/nav';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <AppContainer />
      </div>
    </>
  );
}

export default App;
