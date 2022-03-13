import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('debe mostrar el componente <GifGrid /> correctamente', () => {
    const category = 'My Hero Academia';
    
    test('debe mostrar <GifGrid /> corractamente', () => { 

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        
        const wrapper = shallow(<GifGrid category={ category }/> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs = [
            {
                id:'ABC',
                url: 'https://localhost/cualquier/cosa.jpg',
                title: 'Cualquier cosa'
            },
            {
                id:'12345',
                url: 'https://localhost/cualquier/cosa.jpg',
                title: 'Cualquier cosa'
            },
    ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category={ category }/> );
        //expect(wrapper).toMatchSnapshot();
        expect(   wrapper.find('p').exists()  ).toBe(false);
        expect(  wrapper.find('GifGridItem').length  ).toBe( gifs.length );
    });
    
});