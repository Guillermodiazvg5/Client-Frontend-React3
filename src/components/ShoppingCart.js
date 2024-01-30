import React from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import "./ShoppingCart.css";

export default function ShoppingCart({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) {
  const onDeleteProduct = (producto) => {
    const results = allProducts.filter((item) => item.id !== producto.id);

    setTotal(total - producto.precio_pesos * producto.cantidad_carrito);

    setCountProducts(countProducts - producto.cantidad_carrito);

    setAllProducts(results);
  };

  const onclearAllCart = () => {
    setAllProducts([]);
    setTotal(0);
  };

  const PagarProductos = async (productos) => {
    if (allProducts.length > 0) {
      const response = await axios.post(
        "https://render-nodejs-react-healthfoods.onrender.com/create-order",
        productos
      );

      window.location.href = response.data;
    } else {
      alert("Carrito Vacío, agrega productos para pagar");
    }
  };

  return (
    <div className="">
      <Table striped bordered hover className="mx-auto   container  ">
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Producto</th>
            <th>Precio</th>
          </tr>
        </thead>

        <tbody>
          {allProducts.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.cantidad_carrito}</td>
              <td>{producto.producto}</td>
              <td>{producto.precio_pesos}</td>
              <td>
                {" "}
                <Button
                  onClick={() => onDeleteProduct(producto)}
                  variant="outline-danger"
                >
                  X
                </Button>{" "}
              </td>
            </tr>
          ))}

          <tr>
            <td colSpan={4}> TOTAL : $ {total} </td>
          </tr>

          <tr>
            <td colSpan={3}>
              {" "}
              <div className="d-grid gap-2">
                {" "}
                <Button
                  onClick={() => PagarProductos()}
                  className="mt-2 btn-pagar"
                  variant="success"
                  size="lg"
                >
                  Pagar
                </Button>{" "}
              </div>
            </td>
            <td>
              {" "}
              <Button onClick={onclearAllCart} variant="outline-danger">
                Vaciar Carrito
              </Button>{" "}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
  //console.log(allProducts);
}
