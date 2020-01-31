// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// import BenzButton from './features/common/BenzButton';

// function App() {
//   return (
//     <div className="App">
      
//       <h1>Murthy's Storybook Demo</h1>
//         <BenzButton label="Click me" active="true" fill="true" />
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Layout from './components/Layout'
// function App() {
//   return (
//     <div className="App">
//       <img src={logo} width="100" height="100" className="App-logo"/>
//       <Layout/>
//     </div>
//   );
// }
// export default App;





import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

