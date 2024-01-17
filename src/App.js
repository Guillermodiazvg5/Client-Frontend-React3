
import { useState } from "react";

import Header from "./components/Header";
import CardGroup from "./components/CardGroup";
import ProductosAPagar from "./components/ProductosAPagar";


import Grip from "./components/Grip";
import Row from "react-bootstrap/esm/Row";

import ArregloDeObejtos from "./components/DatosCarrito";

import "./App.css";
import ShoppingCart from "./components/ShoppingCart";

function App() {

  const [allProducts , setAllProducts] = useState([]);
  const [total , setTotal] = useState(0);
  const [countProducts , setCountProducts] = useState([0]);



  return (
    <div className="App">
      <div className="background-image"></div>
       <div className="container marco-main">
      <Header></Header>

      <div className="container  ">

        <div className="row">

          <div className=" col-8   ">

           
              <h1 className="text-start">Frutos Secos</h1>
              <CardGroup
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setAllProducts}

              
              ></CardGroup>
              <h1 className="text-start">Semillas</h1>

              <CardGroup 

                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setAllProducts}
              
              
              
              
              ></CardGroup>

            

          </div>


          <div className="col-4  ">
            <div className="sticky mt-5  ">
            <h1 className="">Carrito</h1>
              <ShoppingCart

               allProducts={allProducts}
               setAllProducts={setAllProducts}
               total={total}
               setTotal={setTotal}
               countProducts={countProducts}
               setCountProducts={setAllProducts}
              
              
              
              
              ></ShoppingCart>
            </div>
          </div>


        </div>

      </div>

      <ProductosAPagar
      allProducts={allProducts}



      ></ProductosAPagar>
      
      </div>

     


    </div>
  );
}

export default App;
