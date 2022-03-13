import React from 'react';
import { shallow } from 'enzyme';
import GitExpertApp from '../GifExpertApp';

describe('debe mostrar el componente <GitExpertApp /> correctamente', () => { 
    
    let wrapper = shallow( <GitExpertApp />);

    beforeEach( ()=>{
        wrapper = shallow( <GitExpertApp />);
    });

    test('debe mostrar <GitExpertApp /> corractamente', () => { 
        expect( wrapper ).toMatchSnapshot();
     });


     test('debe de mostrar una lista de categorias', () => { 
         const categories = ['One Punch', 'Dragon Ball'];
         const wrapper = shallow(<GitExpertApp defaultCategories={ categories } />);


         expect( wrapper ).toMatchSnapshot();
         expect( wrapper.find('GifGrid').length  ).toBe( categories.length );
      });
});