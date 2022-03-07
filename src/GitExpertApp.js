//rafc
import React, { useState } from 'react';

const GitExpertApp = ({}) => {
    //const  categories = ['One Punch', 'Guerra de magos', 'Demon Slayer'];

    const [categories, setCategories] = useState(['One Punch', 'Guerra de magos', 'Demon Slayer']);

    const handleAdd = () => {
        //const newElement = ['My Hero Academia'];
        //setCategories([...categories, ...newElement]);

        //setCategories([...categories, 'My Hero Academia']);

        setCategories( cats => [...cats, 'My Hero Academia'])
    }


    return(
        <>
            <h2>GitExpertApp</h2>
            <hr/>

            <button onClick={ handleAdd }>Agregar</button>

            <ol>
                { 
                    categories.map( category =>{
                        return <li key={ category } >{category}</li>
                    })
                }
            </ol>
        </>
    )
}

export default GitExpertApp;