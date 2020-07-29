import React from 'react'

export const GridGifItem = ( {id, title, url} ) => {
    
    //img son los props recibidos por parametro....
    //console.log(img);
    //console.log(url);
    
    return (
        <div className="card animate__animated animate__bounce">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}




