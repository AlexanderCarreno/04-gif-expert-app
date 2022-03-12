import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('debe mostrar el componente correctamente', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

    test('debe mostrar <GitExpertApp /> corractamente', () => { 
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de tener un parrafo con el titulo', () => { 
         const p = wrapper.find('p');
         expect( p.text().trim() ).toBe( title );
    });

    test('debe de tener la imagen igual al url y alt de los props', ()=>{
        const img = wrapper.find('img');
        //console.log(img.html());
        //console.log(img.prop('src'));
        expect( img.prop('src')).toBe(url);
        expect( img.prop('alt')).toBe(title);
    });

    test('debe tener la clase animate__fadeIn', () => { 
        const div = wrapper.find('div');
        //console.log(div.prop('className'));
        const className = div.prop('className');

        expect( className.includes('animate__fadeIn')).toBe(true);
        //expect( className.includes('animate__fadeIn')).not.toBe(true);
     })
});