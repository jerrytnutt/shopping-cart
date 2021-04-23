import {Link} from 'react-router-dom'

const Home = () => {

  return (
    <div className='home'>
      <div className='homeContainer'>
        <h1>We offer The best non-planetary property offers in the galaxy!</h1>
        <p>Purchases start at 1 Square Mile.</p>

        <Link to={`/shop/`} className='text-link'>
        <button className='selectButton'>Browse</button>
        </Link>
      </div>
    </div>
    );
  }
export default Home;