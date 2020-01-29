import React, { Component } from 'react';
import {Layout} from './Components/Layout'

//const payment= React.lazy('payment.js')
class App extends Component {
  render() {
    return (
      <div>        
         <h1 >SPA project in React by Murthy</h1>
          <div>
              <Layout />
          </div>
          <h3 className="footer">Copyright Reserved to Murthy</h3>
      </div>
    );
  }
}

export default App;