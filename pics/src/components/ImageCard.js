import React from 'react'

class ImageCard extends React.Component{

    constructor(){
        super();
        this.imageRef=React.createRef();
        this.state= { spans: 0 };
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans)
    }

    setSpans=()=>{
        const height=this.imageRef.current.clientHeight
        const spans = Math.ceil(height/10)+1
        this.setState({spans});
        console.log(`span ${this.state.spans}`)
    }

    render(){
        return(<div style={{gridRowEnd:`span ${this.state.spans}`}}>
            <img  alt={this.props.image.description}
            src={this.props.image.urls.regular}
             ref={this.imageRef}
            />
            </div>)
    }
}

export default ImageCard