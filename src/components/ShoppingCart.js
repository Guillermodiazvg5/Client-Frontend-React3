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
          <td>  <Button variant="outline-danger">X</Button>{' '} </td>

        </tr>
        <tr>
          
          <td>1</td>
          <td>Nueces</td>
          <td>10000</td>
          <td>  <Button variant="outline-danger">X</Button>{' '} </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Cacahuetes</td>
          <td>10000</td>
          <td>  <Button variant="outline-danger">X</Button>{' '} </td>
          
        </tr>

        <tr>
          
          <td colSpan={4}>  Total : $ 40000     </td>

        </tr>


        <tr>
         
        <td colSpan={3}> <div className="d-grid gap-2">  <Button className='mt-2' variant="primary"  size="lg">Pagar</Button>{' '} </div></td>
        <td>  <Button variant="outline-danger">Vaciar Carrito</Button>{' '} </td>
          
        </tr>

       


      </tbody>
    </Table>
      
    
  )
}
