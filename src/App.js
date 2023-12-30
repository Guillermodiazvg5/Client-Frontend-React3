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

      <div className="container background-nuts ">

        <div className="row">

          <div className=" col-8 d-flex ">

           

              <CardGroup></CardGroup>

            

          </div>


          <div className="col-4  ">
            <div className="sticky mt-5  ">
              <ShoppingCart></ShoppingCart>
            </div>
          </div>


        </div>

      </div>
    </div>
  );
}

export default App;
