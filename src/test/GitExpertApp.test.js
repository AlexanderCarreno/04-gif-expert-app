import React from 'react';
import { shallow } from 'enzyme';
import GitExpertApp from '../GitExpertApp';

describe('debe mostrar el componente correctamente', () => { 
    
    let wrapper = shallow( <GitExpertApp />);

    beforeEach( ()=>{
        wrapper = shallow( <GitExpertApp />);
    });

    test('debe mostrar <GitExpertApp /> corractamente', () => { 
        expect( wrapper ).toMatchSnapshot();
     })
});