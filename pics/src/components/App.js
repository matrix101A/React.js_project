import React, { Component } from 'react';
import SerachBar from './SearchBar';

class App extends Component{

    state={term:""}

    onFormSubmit=(text)=>
    {               
       
        console.log(text)
    }

    render(){
    return (<div className="ui container" style={{marginTop:'10px'}}>
    <SerachBar
        onSubmit = {this.onFormSubmit}
    />
     </div>);
        
    }
}



export default App