import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";


describe('Pruebas en <AddCategory />', () => { 
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    
    beforeEach( ()=>{
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    });
    

    test('debe de mostrar <AddCategory /> correactamente', () => { 
        expect( wrapper ).toMatchSnapshot();
     });

     
    test('debe de cambiar la caja de texto', () => { 
        const input = wrapper.find('input');
        const value = 'Hola';

        input.simulate('change', { target: { value: value } });

        expect( wrapper.find('p').text().trim() ).toBe( value );
        
     });

    test('No debe de postear la informacion de onsubmit', () => { 
         wrapper.find('form').simulate('submit', { preventDefault: () => {} });
         expect( setCategories ).not.toHaveBeenCalled();
    });

    test('deben de llamar el setCategories y limpiar la caja de texto', () => { 
        const value = 'One Punch';

        const input = wrapper.find('input');
        input.simulate('change', {target: { value: value }});

        wrapper.find('form').simulate('submit', { preventDefault: () => {}});

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        expect( wrapper.find('input').prop('value') ).toBe('');
    });


 });