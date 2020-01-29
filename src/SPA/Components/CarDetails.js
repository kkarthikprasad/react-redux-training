import React, { Component } from 'react';


export  class CarDetails  extends Component {
// params is a built in property of router 
    componentDidMount() {
      //Object Destructring
        const { match: { params } } = this.props;
        alert("details of Car for ID : "+this.props.match.params.carId)
       
               /*
        axios.get(`/api/cars/${params.carId}`)
          .then(({ data: car }) => {
            console.log('car', car);
      
            this.setState({ car});
          });

          componentDidMount() {
  const { match: { params } } = this.props;

  axios.delete(`/api/users/${params.carId}`)
    .then(({ data: car }) => {
      console.log('car', car);

      this.setState({ car});
    });
}
          */
      }
  render() {
    return (
      <div>
       <h1>Display the car Details after making ajax calls </h1>
      </div>
    );
  }
}


