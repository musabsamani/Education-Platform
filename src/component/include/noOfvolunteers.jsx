import React, { Component } from 'react';
class No_of_Volunteers extends Component {
  state = {

    montheName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ogt', 'Sep', 'Oct', 'Nov', 'Dec'],
  } 
  
  render() { 
    return (
      <>
        {console.log(this.props.Vtime)}
      </>
    );
  }
}
 
export default No_of_Volunteers;