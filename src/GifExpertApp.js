import React, { Fragment, useState } from 'react';
import { AddCategories } from './components/AddCategories';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ( titulo = 'GifExpoertApp ...' )=>{

    const [categories, setCategories] = useState(['One Punch']);

/*    const handleAdd = () =>{
        //setCategories( [...cat, 'Otro nombre'] );
        setCategories( cat => [...cat, 'Otro nombre'] );
    } */


    return(
        <Fragment>
            <h1> GifExpertApp </h1>
            <AddCategories  setCategories ={ setCategories } />
            <hr />
            <ol>
                {
                    //la funcion flecha como devuleve un solo renglon no es necesario el return
                    categories.map( categoria => 
                        (
                            <GifGrid 
                                key = {categoria}
                                categoria={categoria} 
                            />
                        )
                        //   <li key = {categoria}> {categoria} </li>
                    )
                    /*la forma tradicional
                    categories.map( categoria =>{return <li key = {categoria}> {categoria} </li>})*/

                }
            </ol>


        </Fragment>
    );

}
