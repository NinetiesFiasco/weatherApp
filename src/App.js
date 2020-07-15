import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Tst from './components/Tst/TstContainer';
import Main from './components/Main/Main';
import {Route} from 'react-router-dom';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <nav>
        <Menu />
      </nav>
      <main>
        <Route render={()=><Tst/>} path="/tst"/>
        <Route render={()=><Main/>} path="/main"/>
      </main>
    </div>
  );
}

export default App;
