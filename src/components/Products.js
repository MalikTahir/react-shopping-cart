import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import Modal from 'react-modal'
import Zoom from 'react-reveal/Zoom'
function Products({products1,addToCart}) {
    const [products,setProducts] = useState(products1);
    const [product,setProduct] = useState(null);

    const openModal=(product)=>{
        setProduct(product)
    }
    const closeModal=()=>{
        setProduct(null)
    }
    return (
        <div>
            <Fade bottom cascade="true" >
            <ul className="products">
                {products1 && products1.map((product)=>{
                    return(
                        <li key={product.id}>
                        <div className="product">
                            <a href={"#"+product.id} onClick={()=>openModal(product)}>
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
            </Fade>
            {
                product && (
                    <Modal isOpen="true">
                        <Zoom>
                        <button className="close-modal" onClick={()=>closeModal()} >X</button>
                            <div className="product-details">
                                <img src={product.image} alt=""/>
                                <div className="product-details-description">
                                    <p>
                                        <strong>{product.title}</strong>
                                    </p>
                                    <p>
                                        {product.description}
                                    </p>
                                    <p>
                                        Available Sizes
                                        {product.sizes.map(x=>{
                                            return(
                                                <span>
                                                    {" "}
                                                    <button className="button">{x}</button>
                                                </span>
                                            )
                                        })}
                                    </p>
                                    <div className="product-price">
                                        <div>
                                            {`$ ${product.price}`}
                                        </div>
                                        <button className="button primary" onClick={()=>{addToCart(product);closeModal()}}>
                                                Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </Modal>
                )
            }
        </div>
    )
}

export default Products
