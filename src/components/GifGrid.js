import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ( {category} ) => {
  

  //const [images, setImages] = useState([]);
  //useEffect( () => {
  //  getGifs( category )
  //    .then( imgs => {
  //      //setImages( imgs );
  //      setImages
  //    });
  //}, [ category ]);



  const { data:images, loading } = useFetchGifs( category );


/*
  return (
    <>
      <h3>GifGrid</h3>
      <ol>
        {
          images.map( img => ( 
            <li key={ img.id }>{ img.title }</li>
          ))
        }
      </ol>
    </>
  )
  */

  return (
    <>
      <h3 className='animate__animated animate__fadeIn animate__delay-1s'>{ category }</h3>
      { /*loading ? <p>Loading</p> : null*/ }
      { loading && <p className='animate__animated animate__flash'>Loading</p> }

      <div className='card-grid'>
        {
          images.map( img => ( 
            <GifGridItem 
              key={ img.id }
              { ...img }
            />
          ))
        }
      </div>
    
      {/*

      <div className='card-grid'>
        <ol>
          {
            images.map( img => ( 
              <GifGridItem 
                key={ img.id }
                { ...img }
              />
            ))
          }
        </ol>
      </div>*/
      }
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}