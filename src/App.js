import React,{useState} from 'react'
import Cart from './components/Cart'
import Filter from './components/Filter'
import Products from './components/Products'
import data from './data.json'
//feture-1 brancch created by me
// all applause for me
function App() {

  const [products,setProducts] =useState(data.products)
  const [size,setSize] =useState("")
  const [sort,setSort] =useState("")
  const [cartItems,setCartItems] = useState([]);

  const orders= (order)=>{
    alert(`${order.name} + ${order.email} + ${order.address}`)
  }

  const removeFromCart=(product)=>{
    setCartItems(cartItems.filter(x=>(x.id !==product.id)))
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
  }
  const addToCart= (product)=>{
    const items = cartItems.slice();
    let alreadyPresent = false;
    items.forEach((item)=>{
      if(item.id===product.id){
        item.count++;
        alreadyPresent=true
      }
    });
    if(!alreadyPresent){
        items.push({...product,count:1})
    }
    setCartItems(items);
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
  }

  const filterProduct=(e)=>{
    if(e.target.value===""){
      setSize(e.target.value)
      setProducts(data.products)
    }
    else{
      setSize(e.target.value)
      setProducts(data.products.filter((product)=>(
        product.sizes.indexOf(e.target.value)>=0
      )))
      console.log(data.products.filter((product)=>(
        product.sizes.indexOf(e.target.value)>=0
      )))    
    }
    
  }
  const sortProduct=(e)=>{
    console.log(e.target.value)
    const sort1 = e.target.value;
    setSort(sort1);
    setProducts(
      products.slice().sort((a,b)=>{
        if(sort==="lowest"){
          if(a.price>b.pricce){return 1}
          else{return -1}
        }
        else{
          if(sort==='highest'){
            if(a.price<b.pricce){return 1}
          else{return -1}
          }
          else{
            if(a.id>b.id){return 1}
          else{return -1}
          }
        }
      })
    )
  };
  return (
    
    <div className="grid-container">
      <header className="App-header">
        <a href="/">Shopping cart</a>
      </header>
      <main>
            <div className="content">
              <div className="main">
                <Filter count={products.length}
                        size={size} sort={sort}
                        sortProduct={sortProduct}
                        filterProduct={filterProduct}></Filter>
                  <Products products1={products} addToCart = {addToCart} ></Products>
              </div>
              <div className="sidebar">
                <Cart orders={orders} cartItems={cartItems} removeFromCart = {removeFromCart}></Cart>
              </div>
            </div>
      </main>
      <footer>
            All rights Reserved by me
      </footer>
    </div>
  );
}

export default App;
