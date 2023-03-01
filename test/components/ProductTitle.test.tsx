import React from 'react'
import {ProductTitle} from '../../src/components'
import renderer from 'react-test-renderer'


describe('ProductTitile',()=>{
    test('debe mostrar el comoponente correctamente',()=>
    {
      const wrapper = renderer.create(
        <ProductTitle title='costum product'></ProductTitle>
      )

      expect(wrapper.toJSON()).toMatchSnapshot()

    })

    test('debe de mostrar el componente con el nombre del producto',()=>{
      
    })
})