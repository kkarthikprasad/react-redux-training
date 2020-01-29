import React from 'react'

export default class ChildParentInvoke extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data: 'Initial data...'
        }
    };

    updateState(event)
    {
        this.setState({data:event.target.value})
        console.log(event.target.value)
    }

    render(){
        return(
            <div>
                <h1 className='text-success'>Parent Component</h1>
                <h2 className='text-danger bg-success'> {this.state.data}</h2>
                <br/>

                <h2>Child Component</h2> <br/>
                <Content myDataProp = {this.state.data} updateStateProp={(event) =>this.updateState(event)}></Content>
                <ContentSibling data={this.state.data}></ContentSibling>

            </div>
        );
    }
}

const Content=(props)=>{
    return(
        <div>
            <input type="text" value={props.myDataProp} onChange={props.updateStateProp}></input>
        </div>
    );
}

const ContentSibling=(props)=>{
    return (
        <div>
            <h4>{props.data}</h4>
        </div>
    );
}