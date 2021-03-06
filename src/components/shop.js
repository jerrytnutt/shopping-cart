import {moonArray} from './flowerList.js'
import {Link} from 'react-router-dom'

const Shop = (props) => {

  const addItemToCart = (item) => {
    item = JSON.parse(item.target.value)
    return props.changeCartArray(item,1)
  }
  return (
    <div className='shopContainer'>
      {moonArray.map((item) => 
        <div className='product' key={item.id}>
          <h3>{item.name}</h3>
        
          <Link to={`/shop/${item.id}`} >
           <img src={item.img} alt='new'></img>
           </Link>

           <p>${item.price} - One Dozen</p>
           <button className='productButton' value={JSON.stringify(item)} onClick={addItemToCart}>Add to Cart</button>
        </div>
      ) 
      }
    </div> 
      );
  }
export default Shop;