import React, {useState} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Header from './components/header.js'
import Home from './components/home.js'
import Shop from './components/shop.js'
import Cart from './components/cart.js'
import ItemPage from './components/itemPage.js'
import {moonArray} from './components/moonList.js'
import './styles/App.scss';

function App() {
  const [cartArray, setCartArray] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)
  
  const changeCartArray = (item,newQuantity) => {
    let index = cartArray.findIndex(x => x.id === item.id)
     
    if (index !== -1){
      const newArray = [...cartArray];
      const newObject = Object.assign({}, cartArray[index]);
      
      newObject.quantity = newObject.quantity + newQuantity
      newArray[index] = newObject
      setCartArray(newArray);
      return setTotalQuantity(totalQuantity + newQuantity)
    }
    index = moonArray.findIndex(x => x.id === item.id)
    item.quantity = newQuantity
    const newArray = cartArray.concat(item)
    setCartArray(newArray)
    return setTotalQuantity(totalQuantity + newQuantity)
}

const removeCartItem = (itemArray) => {
  // RemovecartItems argument is an array so it can remove one or all items
  let newArray = [...cartArray];
  for (let i = 0; i<itemArray.length;i++){
    let index = cartArray.findIndex(x => x.id === itemArray[0].id)
    newArray.splice(index,1)
}
  return setCartArray(newArray)
}

  return (
    <HashRouter basename='/'>
    <div className="App">
      <Header totalQuantity={totalQuantity}/>
      <Switch>

      <Route exact path="/">
        <Home/>
      </Route>

      <Route exact path="/shop">
        <Shop changeCartArray={changeCartArray}/>
      </Route>

      <Route exact path={`/shop/:subId`}>
        <ItemPage changeCartArray={changeCartArray}/>
      </Route>

      <Route exact path="/cart">
        <Cart cartArray={cartArray} 
        changeCartArray={changeCartArray} 
        removeCartItem={removeCartItem} 
        setTotalQuantity={setTotalQuantity} 
        totalQuantity={totalQuantity}/>
        
      </Route>

      </Switch>
    </div>
    </HashRouter>
  );
}
export default App;