import React from 'react';
import './App.css';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import Dashboard from './Components/Dashboard';
import ErrorBoundary from './Components/comp-life-cycle/ErrorBoundary';
import Lifecycle from './Components/comp-life-cycle/LifeCycle';
import WeatherComponent from './Components/comp-life-cycle/WeatherComponent';

/*stateless functional component*/

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Dashboard/> */}
      <ErrorBoundary>
        <Lifecycle />
        <WeatherComponent/>
      </ErrorBoundary>
      <Footer/>
    </div>
  );
}

export default App;
