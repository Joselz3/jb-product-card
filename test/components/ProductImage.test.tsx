import React from 'react'
import ProductCard, {ProductImage} from '../../src/components'
import renderer from 'react-test-renderer'
import {product2} from '../data/products'

describe('ProductImage',()=>{
    test('debe mostrar el comoponente correctamente con la imagen personalizada',()=>
    {
      const wrapper = renderer.create(
        <ProductImage img={'https://hola.jpg'} ></ProductImage>
      )

      expect(wrapper.toJSON()).toMatchSnapshot()

    })

    test('debe de mostrar el componente con la imagen del producto',()=>
    {
      const wrapper = renderer.create(
        <ProductCard product={product2}>
          {
            ()=>(
              <ProductImage ></ProductImage>
            )
          }
        </ProductCard>
      )
      expect(wrapper.toJSON()).toMatchSnapshot()
    })
})