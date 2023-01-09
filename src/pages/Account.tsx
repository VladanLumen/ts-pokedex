import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart, } from 'react-use-cart'

const Account = () => {
    
const {
    isEmpty,
    totalUniqueItems,
    items,
    removeItem,
} = useCart()
      
      if (isEmpty) return (
        <div>
            <p>You don't have any pokemon</p>
            <Link to='/'>Back to Home</Link>
        </div>
      );

  return (
    <>
      <h1>Total favorites pokemon ({totalUniqueItems})</h1>
      <ul>
        {items.map((item) => (
            
            
          <li key={item.id}>
            <img src={item.sprites.front_default} />
            
            <Button variant='danger' onClick={() => removeItem(item.id)}>&times;</Button>
          </li>
        ))}
      </ul>
      <Link to='/'>Back to Home</Link>
    </>
  )
}

export default Account