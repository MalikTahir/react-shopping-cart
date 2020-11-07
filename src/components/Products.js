import React, { useState } from 'react'

function Products({products1,addToCart}) {
    const [products,setProducts] = useState(products1)
    return (
        <div>
            <ul className="products">
                {products1 && products1.map((product)=>{
                    return(
                        <li key={product.id}>
                        <div className="product">
                            <a href={"#"+product.id}>
                                <img  src={product.image}></img>
                                <p>{product.title}</p>
                            </a>
                        </div>
                        <div className="product-price">
                            <div>{product.price}</div>
                            <button onClick={()=>addToCart(product)} className="button primary ">Add To Cart</button>
                        </div>
                    </li>
                    )
                    
                })}
            </ul>
        </div>
    )
}

export default Products
