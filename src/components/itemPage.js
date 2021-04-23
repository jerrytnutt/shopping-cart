import {useParams} from 'react-router-dom'
import {moonArray} from './moonList.js'
import React, {useState} from 'react';

const ItemPage = (props) => {
    const [purchaseQuantity, setPurchaseQuantity] = useState(1)
    const {subId} = useParams()

    let currentMoon = moonArray[subId - 1]
    
    const addMoonToCart = () => {
      currentMoon.quantity = purchaseQuantity
      return props.changeCartArray(currentMoon)
    }

    const decreasePurchaseQuantity = () => {
      if (purchaseQuantity === 1){
          return purchaseQuantity
      }
      return setPurchaseQuantity(purchaseQuantity - 1)
    }

    const handleChange = (e) => {
      if (isNaN(parseInt(e.target.value))){
        return setPurchaseQuantity('')
      }
      return setPurchaseQuantity(parseInt(e.target.value))
}
    return (
      <div className='itemContainer'>
        <div className='leftContainer'>
          <img src={currentMoon.img} alt='new' ></img> 
        </div>
        <div className='description'>
          <h1>{currentMoon.name}</h1>
          <p>{currentMoon.description}</p>
          <h4>Satellite of: {currentMoon.planet}</h4>
          <h4>Surface Area: {currentMoon.sqMiles}mi²</h4>
          <div className='inputArea'>
            <button onClick={decreasePurchaseQuantity}>-</button>
            <input type='text' onChange={handleChange} value={purchaseQuantity}></input>
            <button onClick={() => setPurchaseQuantity(purchaseQuantity + 1)}>+</button>
          </div>
            <button className='addButton' onClick={addMoonToCart}>Add to cart</button>
        </div>
        </div>
);
  }
  export default ItemPage; 