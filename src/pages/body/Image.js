import React from 'react'
import './Image.css';



function Image({image, title,button}) {
    return (
        <div className="Image">
            <img src={image}
            alt=""/>
           <h2>{title}</h2>
          <button className="button">{button}Buy</button> 
        </div>
    )
}

export default Image
