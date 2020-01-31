import React from 'react';
import logo from './logo.svg';
import './App.css';

import BenzButton from './features/common/BenzButton';

function App() {
  return (
    <div className="App">
      
      <h1>Murthy's Storybook Demo</h1>
        <BenzButton label="Click me" active="true" fill="true" />
    </div>
  );
}

export default App;
