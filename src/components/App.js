import React from 'react';
import TrainerList from '../containers/trainer-list';
import TrainerDetails from '../containers/trainer-details'
const App = () => (
    <div>
          <h1>React Redux Demo by Murthy</h1>
            <TrainerList/>
            <hr />
            <h2>Trainer Details</h2>
            <TrainerDetails/>
          <h3>Copyright reserver to Benz</h3>
     </div>
);
export default App;