import React, { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GridGifItem } from './GridGifItem';

export const GifGrid = ( {categoria} ) => {

    //const [count, setCount] = useState(0);
    //const [images, setImages] = useState([]);

    const { data, loading } = useFetchGifs( categoria );
    console.log(data);
    console.log(loading);

    return (
        <Fragment> 
            <h3> { categoria } </h3>
            
            { loading && <p className="animate__animated animate__flash">Loading...</p> }

            <div className="card-grid">
                    {
                        data.map( img => (
                            <GridGifItem 
                                key= {img.id}
                                { ...img }
                            />
                            //en lugar de mandar el img puedoo usar el spred del array img ... img={ img }
                        ))
                    }
            </div>
        </Fragment>
    )
}



