import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
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
  
  const changeCartArray = (item) => {
    let index = cartArray.findIndex(x => x.id === item.id)

    if (index !== -1){
      const newArray = [...cartArray];
      const newObject = Object.assign({}, cartArray[index]);
      newObject.quantity = newObject.quantity + item.quantity
      newArray[index] = newObject
      setCartArray(newArray);
      return setTotalQuantity(totalQuantity + item.quantity)
    }
    index = moonArray.findIndex(x => x.id === item.id)
    const newArray = cartArray.concat(item)
    setCartArray(newArray)
    return setTotalQuantity(totalQuantity + item.quantity)
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
    <Router>
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
    </Router>
  );
}
export default App;