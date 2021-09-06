import React, { Component } from 'react';
import NavItem from 'reactstrap/lib/NavItem';
import CatIndex from './CatIndex';


class CatList extends Component {
  constructor(props){
    super(props)
    this.state ={
      loaded: false,
      breedList: [
        {name:'persian'}, 
        {name:'siamese'}, 
        {name:'maine coon'},
        {name:'ragdoll'}, 
        {name:'scottish fold'}, 
        {name:'sphynx'}, 
        {name:'british shorthair'}, 
        {name:'bengal'}, 
        {name:'american shorthair'}],
    }
  }

  async componentDidMount(){
    this.setState({
      loaded: true,
    })
  }
  
  render(){
    return (
      <div>      
        {!this.state.loaded ? "loading" : this.state.breedList.map(breed => <CatIndex breed={breed}/>)
        }
      </div>
    );
  }
}
 
export default CatList;
