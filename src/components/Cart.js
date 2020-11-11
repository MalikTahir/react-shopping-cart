import React, { useState } from 'react'

function Cart({cartItems,removeFromCart,orders}) {
    const [showCheckout,setCheckout] = useState(false);
    const [bName,setName] = useState("b name")
    const [order,setOrder] = useState(
        {
            name:bName,
            email:"",
            address:""
        }
    )
    const handleInputName=(e)=>{
        setName(e && e.target.value)
      }

    const handleInput=(e)=>{
      
    }

    const createOrder=(e)=>{
       e && e.preventDefault();
        orders(order)
    }

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
                        <button onClick={()=>setCheckout(true)} className="button primary">Proceed</button>
                    </div>
                </div>
                }
                {showCheckout && (
                    <div className="cart">
                        <form onSubmit={()=>createOrder()}>
                            <ul className="form-container">
                                <li>
                                    <label >Email</label>
                                    <input name="email" type="email" required onChange={e=>setOrder({...order,[e.target.name]:e.target.value})}/>
                                </li>
                                <li>
                                    <label >Name</label>
                                    <input name="name" type="text" required onChange={e=>e=>setOrder({...order,[e.target.name]:e.target.value})}/>
                                </li>
                                <li>
                                    <label >Address</label>
                                    <input name="address" type="text" required onChange={e=>setOrder({...order,[e.target.name]:e.target.value})}/>
                                </li>
                                <li>
                                    <button type="submit" className="button primary">CheckOut</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                )}
                    
                    </div>
            </div>
        </div>
    )
}

export default Cart
