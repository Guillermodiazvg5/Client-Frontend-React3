import React from 'react'

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


export default function ShoppingCart() {
  return (
    
    
  <Table striped bordered hover className="mx-auto w-75   ">
      <thead>
        <tr>
          
          <th>Cantidad</th>
          <th>Producto</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
         
          <td>2</td>
          <td>Almendras</td>
          <td>20000</td>
          <td>  <Button variant="danger">X</Button>{' '} </td>

        </tr>
        <tr>
          
          <td>1</td>
          <td>Nueces</td>
          <td>10000</td>
          <td>  <Button variant="danger">X</Button>{' '} </td>
        </tr>
        <tr>
        <td>1</td>
          <td>Cacahuetes</td>
          <td>10000</td>
          <td>  <Button variant="danger">X</Button>{' '} </td>
          
        </tr>
      </tbody>
    </Table>
      
    
  )
}
