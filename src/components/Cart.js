import React from 'react'

function Cart({cartItems,removeFromCart}) {
    return (
        <div>
            {cartItems.length===0 ? <div className="cart cart-header">Cart is empty</div>:
            <div className="cart cart-header">You have {cartItems.length} items in your cart</div>}
            <div className="cart">
                <div>
                <ul className="cart-items">
                    {cartItems.map((item)=>{
                        return(
                            <li key = {item.id}>
                                <div>
                                    <img src={item.image} alt=""/>
                                </div>
                                <div>
                                    <div>
                                        {item.title}
                                    </div>
                                    <div className="right">
                                        {`$ ${item.price} X ${item.count} `}
                                        <button onClick={()=>removeFromCart(item)} className='button'>Remove</button>
                                    </div>
                                </div>
                                
                                
                            </li>
                        )
                    })}
                </ul>

                {cartItems.length !==0 &&
                
                <div className="cart">
                    <div className="total">
                        <div>
                            Total {`$ ${cartItems.reduce((a,c)=> a+c.price*c.count,0)}`}
                        </div>
                        <button className="button primary">Proceed</button>
                    </div>
                </div>
                }
                    
                    </div>
            </div>
        </div>
    )
}

export default Cart
