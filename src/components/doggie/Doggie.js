import React, { Component } from 'react';
import './doggie.css'
import loadingDog from './loadingDog.gif'

export default class Doggie extends Component {
  
  state = {
    loading: true,
  };

  componentDidMount(){
    this.setState({
      loading: false
    })
  }

  render(){
    const {loading} = this.state;
    const {url} = this.props;

    const Spinner = () => {
      return (
        <img src={loadingDog}alt="loading..." />
      )
    }
    
    const DogCard = () => {
      return (
        <div className="card doggie-card p-2 pb-0">
          <img className="doggie-img" src={url} alt="doggie"></img>   
          <div className="card-body">
            <h4 className="card-title text-center">{extractBreedName(url)} </h4> 
          </div>
        </div>
      )
    }

    const Content = () => {
      return (
        loading ? <Spinner/> : <DogCard/>
      )
    } 
    return (
     <Content/>
    )
  }
}

const fixBreed =(breedName)=> {
  if(breedName === 'germanshepherd'){
    return 'German Shepherd';
  }else if(breedName === 'mexicanhairless'){
    return 'Mexican Hairless';
  }else if(breedName === 'stbernard'){
    return 'St. Bernard';
  }else if(breedName === "african"){
    return 'African Wild Dog';
  }else if(breedName === 'bullterrier'){
    return 'Bull Terier';
  }
  return capitalize(breedName);
}

const capitalize = (breedName) => {
  return breedName
    .replace(/-/g,' ')
    .split(" ")
    .map(word => word.charAt(0).toUpperCase()+word.slice(1))
    .join(" ");
}

const extractBreedName = (data)=>{
  let regex = /https:\/\/images\.dog\.ceo\/breeds\/(\w+-?\w+)\/.+/g;
  let match = regex.exec(data);
  
  return fixBreed(match[1])
}

export {capitalize, fixBreed}