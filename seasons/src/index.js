import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
  //Constructr to initialize state
  constructor(props){
    super(props);
    this.state={lat:null ,errorMessage:''};
    window.navigator.geolocation.getCurrentPosition(
      position=>{
        //we called setState
        this.setState({lat:position.coords.latitude});
      },
      err=>{
        this.setState({errorMessage:err.message})
        console.log(err.message)
        console.log('HE')
      }
    );
  }
  //requirement of react
  render(){
      if( this.state.errorMessage && !this.state.lat){
      return <div>Error :{this.state.errorMessage}</div>;
      }
      if(!this.state.errorMessage && this.state.lat){
        return <div>Latitude : {this.state.lat}</div>;
      }
      return <div>LOADING</div>

  };
}
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
