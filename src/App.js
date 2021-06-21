import React, {useState} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import './styles/App.scss';
import Header from './components/header.js'
import Home from './components/home.js'
import Shop from './components/shop.js'
import Cart from './components/cart.js'
import ItemPage from './components/itemPage.js'
import {moonArray} from './components/moonList.js'

function App() {
  const [cartArray, setCartArray] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)
  
  const changeCartArray = (item,pq) => {
    let index = cartArray.findIndex(x => x.id === item.id)
     console.log(pq)
    if (index !== -1){
      const newArray = [...cartArray];
      console.log(newArray[index].quantity)
      const newObject = Object.assign({}, cartArray[index]);
      
      newObject.quantity = newObject.quantity + pq
      console.log(newObject.quantity + 5)
      newArray[index] = newObject
      setCartArray(newArray);
      return setTotalQuantity(totalQuantity + pq)
    }
    index = moonArray.findIndex(x => x.id === item.id)
    item.quantity = pq
    const newArray = cartArray.concat(item)
    setCartArray(newArray)
    return setTotalQuantity(totalQuantity + pq)
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