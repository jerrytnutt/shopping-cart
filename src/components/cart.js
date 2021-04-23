import React, {useState,useEffect} from 'react';

const Cart = (props) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [checkout, setCheckout] = useState(false)
  
  useEffect(() => {
    return changeTotalPrice()
  },);

  const changeQuantity = (item,incrementer) => {
    item = JSON.parse(item.target.value)

    if (item.quantity === 1 && incrementer === -1){
      props.removeCartItem([item])
      props.setTotalQuantity(props.totalQuantity - 1)
      
    return changeTotalPrice()
  } 
    let newObject = Object.assign({}, item);
    newObject.quantity = incrementer
    props.changeCartArray(newObject)
    return changeTotalPrice()
  }

const changeTotalPrice = () => {
  let newTotal = props.cartArray.reduce( 
    ( accumulator, currentValue ) => 
    accumulator + (parseInt(currentValue.price) * currentValue.quantity), 0 )
    return setTotalPrice(newTotal)
} 

const resetShop = () => {
  setTotalPrice(0)
  props.setTotalQuantity(0)
  props.removeCartItem(props.cartArray)
  return setCheckout(true)
}
  return (
    <div className='cartContainer'>
      {props.cartArray.length > 0 ? <div className='checkout'><h1>Total Price: ${totalPrice}</h1><button onClick={resetShop}>Checkout</button></div> : <h1>No items added to cart</h1>}
      {checkout === true ? <div className='checkoutContainer'>Thank you for shopping with us! <button className='selectButton' onClick={() => setCheckout(!checkout)}>Close</button></div> : '' }
      
      {props.cartArray.map((card) => 
        <div className='row' key={card.id}> 
         <div className='imageContainer'>
         <img src={card.img} alt='new' id={card.id}></img> 
         </div>
         <div className='cartDescription'>
           <p className='cardText'>{card.name}</p>
           <p className='cardText'>Qantity:  {card.quantity}mi² -- Price: ${card.price * card.quantity}</p>
           <div className='inputArea'>

             <button value={JSON.stringify(card)} onClick={(e) => changeQuantity (e,-1)}>-</button>
            <div className='quantityText'>{card.quantity}</div>
             <button value={JSON.stringify(card)} onClick={(e) => changeQuantity (e,1)}>+</button>
           </div>
        </div>
    
        </div>
      ) 
      }
      
    </div>
          
         
     
    );
  }
  export default Cart;
  