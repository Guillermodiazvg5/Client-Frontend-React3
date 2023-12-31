import Header from "./components/Header";
import CardGroup from "./components/CardGroup";
import Grip from "./components/Grip";
import Row from "react-bootstrap/esm/Row";

import "./App.css";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="App">
      <div className="background-image"></div>

      <Header></Header>

      <div className="container  ">

        <div className="row">

          <div className=" col-8   ">

           
              <h1 className="text-start">Frutos Secos</h1>
              <CardGroup></CardGroup>
              <h1 className="text-start">Semillas</h1>
              <CardGroup ></CardGroup>

            

          </div>


          <div className="col-4  ">
            <div className="sticky mt-5  ">
            <h1 className="">Carrito</h1>
              <ShoppingCart></ShoppingCart>
            </div>
          </div>


        </div>

      </div>
    </div>
  );
}

export default App;
