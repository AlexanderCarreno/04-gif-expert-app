import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category} ) => {
  

  const [images, setImages] = useState([]);


  useEffect( () => {
    getGifs();
  }, []);


  const getGifs = async() => {
    const url = 'https://api.giphy.com/v1/gifs/search?q=My Hero Academia&limit=10&api_key=VZ9fX9swY5PguRHtBhfSdBuHVdc551EF';
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      }
    })

    console.log(gifs);
    setImages( gifs );
    
  }

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
      <h3>{ category }</h3>
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
    </>
  )
}
