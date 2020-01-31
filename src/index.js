// import {combineReducers,applyMiddleware,createStore} from 'redux'
// import logger from "redux-logger"

// // Create reducers to update store
// const reducer=function(state,action){
//     if(action.type==='INC'){
//         return state+action.payload;
//     }    
//     if(action.type==='DEC'){
//         return state-action.payload;
//     }
//     return state;
// }

// // can add multiple middleware at a time applyMiddleware(logger,thunk,saga)
// const middleware=applyMiddleware(logger);
// // Creating store and attaching to reducer with initial state
// const store=createStore(reducer,1,middleware);

// // Subscribe to store to get new state
// store.subscribe(()=>{
//     console.log("Store Changed :"+store.getState())
// });

// // Dispatch action to invoke reducer 
// store.dispatch({type:"INC",payload:1});
// store.dispatch({type:"INC",payload:3});
// store.dispatch({type:"DEC",payload:20});


// import {combineReducers,applyMiddleware,createStore} from 'redux';
// import logger from "redux-logger";

// //npm install  redux-devtools-extension --save-dev

// import { composeWithDevTools } from "redux-devtools-extension"; 
// // Goto Chrome, search for "redux dev tools"and add extension

// const userReducer=(state={},action)=>{   
//     switch(action.type){
//         case "CHANGE_NAME":{
//            // olddata=...state
//          return state={...state,name:action.payload};            
//         }
//         case "CHANGE_AGE":{
//          return  state={...state,age:action.payload};           
//         }       
//     }
//    return state;
// }
// const tweetReducer=(state=[],action)=>{      
//    return state;
// }

// const reducers=combineReducers({
//     user:userReducer,
//     tweets:tweetReducer
// });

// const store=createStore(reducers,
//     composeWithDevTools(applyMiddleware(logger)));

//     store.subscribe(()=>{
//     console.log("store Changed:",store.getState());
// })
// store.dispatch({type:'CHANGE_NAME',payload:"Murthy"});
// store.dispatch({type:'CHANGE_AGE',payload:35});
// store.dispatch({type:'CHANGE_NAME',payload:"Raju"});


// import {applyMiddleware,createStore} from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk'; // npm install redux-thunk --save
// import { composeWithDevTools } from "redux-devtools-extension";
// //npm install  axios --save
// import axios from 'axios';

// // state tree
// const initialState={
//     fetching:false,
//     fetched:false,
//     user:[],
//     error:null
// }

// const reducer=(state=initialState,action)=>{
//     switch (action.type){
//         case "FETCH_USERS_START":{
//             return {...state,fetching:true}      
//         }
//         case "FETCH_USERS_ERROR":{
//             return {...state,fetching:false,error:action.payload}            
//         }
//         case "RECEIVE_USERS":{
//             return {...state,
//                        fetching:false,
//                        fetched:true,
//                        users:action.payload,
//                     }         
//         }
//     }
//     return state;
// }

// const store=createStore(reducer,
//     composeWithDevTools (applyMiddleware(thunk,logger)));

// store.subscribe(()=>console.log(store.getState()))
// //thunk middleware expects only one dipatch

// store.dispatch((dispatch)=>{
//     //multiple actions occur with single action     
//     dispatch({type:"FETCH_USERS_START"})

//     axios.get("https://jsonplaceholder.typicode.com/users")
//     .then ( (response) =>{
//        dispatch({type:"RECEIVE_USERS",payload:response.data})
//     })
//     .catch((error) =>{
//       dispatch({type:"FETCH_USERS_ERROR",payload:error})
//     })
// })// end of code












// //React with Redux
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
// // npm install react-redux --save

// import {applyMiddleware,createStore} from 'redux';
// import allReducers from './reducers';
// import App from './components/App'

// import logger from 'redux-logger';
// import { composeWithDevTools } from 
//            "redux-devtools-extension"; 

// const store=createStore(allReducers,composeWithDevTools(
//     applyMiddleware(logger)));

// //connect store with provider  with app
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,    
//     document.getElementById('root')
// )








import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {store} from './store'
import App from './App'

const app = document.getElementById('root')
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	, app);



