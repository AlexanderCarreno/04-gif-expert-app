import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({
  setCategories
}) => {

const [inputValue, setInputValue] = useState('');

const handleInputChange = (e)=> {
    //console.log(e.target.value);
    setInputValue( e.target.value );

    //console.log('handleInputChanges llamado');
}

const handleSubtim = (e) => {
    e.preventDefault();
    //console.log('handleSubmit', inputValue);

    if( inputValue.trim().length > 2 ){
      setCategories( cats => [inputValue, ...cats]);
      setInputValue('');
      //console.log('Submit hecho');
    }
}

  return (
    <>
    <h1>{inputValue}</h1>
    <form onSubmit={ handleSubtim }>
      <p>{ inputValue }</p>
        <input
            type="text"
            value= { inputValue }
            onChange={ handleInputChange }
        />
    </form>
    </>
  )
}


AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}