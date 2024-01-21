
import { useState } from "react";
import { BrowserRouter  , Routes , Route  } from "react-router-dom";

import Header from "./components/Header";
import CardGroup from "./components/CardGroup";
import ProductosAPagar from "./components/ProductosAPagar";
import Footer from "./components/Footer";
import About from "./components/About";
import Products from "./components/Products";
import Contacts from "./components/Contacts";
import Blog from "./components/Blog"
import Icons_Carrito from "./assets/Icons_Carrito";


import "./App.css";
import ShoppingCart from "./components/ShoppingCart";
import ShoppingCartW from "./components/ShoppingCartW";



function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState([0]);
  const [totaldeproductos, setTotaldeproductos] = useState(0) ; 
  

  


  return (




    <BrowserRouter>




      <div className="App">
        <div className="background-image"></div>
        <div className="container marco-main">
          <Header 
          allProducts={allProducts}
          countProducts={countProducts}
          totaldeproductos={totaldeproductos}
          setTotaldeproductos={setTotaldeproductos}
          />

          <Routes>
            <Route path="/" element={
              <div className="container">
                <div className="row">
                  <div className="col-8">
                    <h1 className="text-start">Frutos Secos</h1>
                    <CardGroup
                      allProducts={allProducts}
                      setAllProducts={setAllProducts}
                      total={total}
                      setTotal={setTotal}
                      countProducts={countProducts}
                      setCountProducts={setAllProducts}
                    />
                    <h1 className="text-start">Semillas</h1>
                    <CardGroup
                      allProducts={allProducts}
                      setAllProducts={setAllProducts}
                      total={total}
                      setTotal={setTotal}
                      countProducts={countProducts}
                      setCountProducts={setAllProducts}
                    />
                  </div>
                  <div className="col-4">
                    <div className="sticky mt-5">
                      <h1 className="">Carrito</h1>
                      <ShoppingCart
                        allProducts={allProducts}
                        setAllProducts={setAllProducts}
                        total={total}
                        setTotal={setTotal}
                        countProducts={countProducts}
                        setCountProducts={setAllProducts}
                      />
                    </div>
                  </div>
                </div>
              </div>
            } />
            <Route path="/about" element={ <div> <About /> </div> } />
            <Route path="/products" element={ <div className="container justify-content-center "> <Products /> </div>  } />
            <Route path="/contacts" element={ <div className="container justify-content-center "> <Contacts /> </div> } />
            <Route path="/blog" element={  <div className="container justify-content-center "> <Blog />  </div> } />
            <Route path="/ShoppingCartW" element={  <div className="container justify-content-center ">  <ShoppingCartW 
                        allProducts={allProducts}
                        setAllProducts={setAllProducts}
                        total={total}
                        setTotal={setTotal}
                        countProducts={countProducts}
                        setCountProducts={setAllProducts}
                        totaldeproductos={totaldeproductos}
                        
                        />  </div> }/>
          </Routes>

          <ProductosAPagar allProducts={allProducts}  ></ProductosAPagar>
      

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
