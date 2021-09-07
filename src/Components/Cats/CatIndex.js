import React, { Component } from 'react';

class CatIndex extends Component {

 constructor(props){
   super(props);
   this.state = {
    id: this.props.breed.id,
    breed: this.props.breed.name
  }
}
  render(){
    let {id, breed} = this.state
    return (
      <div>
        <li key={id}>{breed}</li>
      </div>
    );
  }
}

export default CatIndex;
