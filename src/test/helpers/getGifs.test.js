import { getGifs } from '../../helpers/getGifs';

describe('Prueba con getGifs Fetch', () => {

    test('debe de traer  10 registros', async() => { 
        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBe( 10 );
     });

     test('debe de traer 0 elementos', async() => { 
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );
      });

});