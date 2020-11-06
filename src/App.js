import React,{useState} from 'react'
import Products from './components/Products'
import data from './data.json'
//feture-1 brancch created by me
// all applause for me
function App() {

  const [products,setProducts] =useState(data.products)
console.log("#########")
console.log(data.products)
  return (
    
    <div className="grid-container">
      <header className="App-header">
        <a href="/">Shopping cart</a>
      </header>
      <main>
            <div className="content">
              <div className="main">
                  <Products products1={products}></Products>
              </div>
              <div className="sidebar">
                Cart Items
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
