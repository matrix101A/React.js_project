import React, { Component } from 'react';
import SerachBar from './SearchBar';
import unsplash from '../api/unsplash'


class App extends Component{
    state={images:[]}
 onFormSubmit=async(text)=>
    {               
        const response= await unsplash
        .get('/search/photos',{
            params:{
                query:text
            },
           
          })

          this.setState({images:response.data.results});
    }

    render(){
    return (<div className="ui container" style={{marginTop:'10px'}}>
    <SerachBar
        onSubmit = {this.onFormSubmit}
    />
    Found: {this.state.images.length} Images
     </div>);
        
    }
}



export default App