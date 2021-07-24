import {Link} from 'react-router-dom'

const Home = () => {

  return (
    <div className='home'>
      <div className='homeContainer'>
        <h1>Purchase some of the the most beautiful roses, tulips and Dahlias</h1>
        

        <Link to={`/shop/`} className='text-link'>
          <button className='selectButton'>Browse</button>
        </Link>
      </div>
    </div>
    );
  }
export default Home;