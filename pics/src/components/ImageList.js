import React from 'react'

const ImageList=(props)=>{

    const images=props.images.map((image)=>{

       return <img alt={image.description} className="row" key={image.id} src={image.urls.full} height="700px" width="900px"/>
    })

    return(<div>{images}</div>)
}

export default ImageList