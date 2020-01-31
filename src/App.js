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



import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout'
function App() {
  return (
    <div className="App">
      <img src={logo} width="100" height="100" className="App-logo"/>
      <Layout/>
    </div>
  );
}
export default App;




