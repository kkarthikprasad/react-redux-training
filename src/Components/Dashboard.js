import React, { Component } from 'react';
import StatefulApp from './propsStates/StatefullApp';
import TextInput from './propsStates/TextInput';
import ChildParentInvoke from './parentChild/ChildParentInvoke';
import UsingRefs from './parentChild/UsingRefs';
import Context from './contextApi/Context';
import WeatherComponent from './comp-life-cycle/WeatherComponent';
//Stateful class Component - Container


class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state={'name':'Murthy'}
  }
  render() {
    return (
      <div>
            <h1>Name : {this.state.name}</h1>  
            <StatefulApp/>    
            <TextInput/>
            <ChildParentInvoke/>
            <UsingRefs/>
            <Context/>
           
      </div>
    );
  }
}
export default Dashboard;
