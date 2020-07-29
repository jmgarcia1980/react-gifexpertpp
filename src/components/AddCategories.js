import PropTypes from 'prop-types';
import React, { useState } from 'react'

export const AddCategories = ( {setCategories} ) => {

    const [imputValue, setImputValue] = useState('');

    const handleImputChange = (e)=>{
        //console.log(e.target.value);
        setImputValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(e);
        if(imputValue.trim().length >1 ){
            setCategories( cat => [imputValue, ...cat ] );
            setImputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={imputValue}
                onChange={ handleImputChange }
            />
        </form>
    )
}


AddCategories.propTypes = {
    setCategories: PropTypes.func.isRequired 
}