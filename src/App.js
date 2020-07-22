import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {Route} from 'react-router-dom';
import Main from './components/Pages/Main/Main';
import Time from './components/Pages/Time/TimeContainer';
import Sort from './components/Pages/Sort/SortContainer';
import Weather from './components/Pages/Weather/WeatherContainer';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>      
      <main className="container-lg">
        <Route render={()=><Main/>} path="/main"/>
        <Route render={()=><Time/>} path="/time"/>
        <Route render={()=><Sort/>} path="/sort"/>
        <Route render={()=><Weather/>} path="/weather"/>
      </main>
    </div>
  );
}

export default App;
