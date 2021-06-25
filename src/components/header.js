import {Link} from 'react-router-dom'
import { AiOutlineShoppingCart,AiOutlineHome } from "react-icons/ai";
import {GiPlanetConquest} from "react-icons/gi";

const Header = (props) => {
  let zeroQuantity = ''
  if (props.totalQuantity > 0){
    zeroQuantity = `(${props.totalQuantity})`
  }
  
  return (
    <div className='header'>
      <div className='title'>Natural Satellite Retail</div>
      <div className='links'>
        <Link to='/' className='text-link'>Home<AiOutlineHome className='cartIcon'/> </Link>
        <Link to="/shop" className='text-link'>Shop<GiPlanetConquest className='cartIcon'/></Link>
        <Link to="/cart" className='text-link'>Cart<AiOutlineShoppingCart className='shopIcon'/>{zeroQuantity} </Link>
         
      </div>
    </div>
    );
  }
  export default Header;