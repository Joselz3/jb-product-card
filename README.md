# JB-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Jose Benitez

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'jb-product-card';
```

```
  <ProductCard 
        product={product}
        initialValues={{
        count:4,
        maxCount:10
    }}
    >
        {
            ({
                reset,
                increaseBy,
                count
            })=>(
                <>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </>
            )
        }
    
</ProductCard>
```