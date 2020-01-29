import React, {Component} from 'react'
import TextDisplay from './TextDisplay'

export default class TextInput extends Component{
	constructor(props){
		super(props)
		this.state={inputText:'Murthy'}		

		//old pratice 	
		//this.handleChange=this.handleChange.bind(this)	
	}

	// Event Handler
	handleChange(event){
	 this.setState({
			inputText:event.target.value
		})
	}				
	
	render(){
	return	(
		<div>
		Company : <input type="text" id="txt" />
		<input type="text" value="uncontrolled"/>           
			<div>Enter Name</div>
			<input type="text" 
			          value={this.state.inputText}
					  onChange={(event)=>this.handleChange(event)}/>
					  
			{this.state.inputText ? console.log("valid"):console.log("No data")}
	   
			{this.state.inputText 
				 ?<TextDisplay text={this.state.inputText}/>
				 :<TextDisplay text="Enter name please"/>
			}							
		</div>
		)	
	}
}//end
