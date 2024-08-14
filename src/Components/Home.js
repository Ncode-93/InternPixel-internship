import React from 'react'
import Navbar from './Navbar';
import Imageone from "C:/Users/hp/OneDrive/Desktop/internpixelhomepage/src/Assets/1st Home-container.png"
// import lightweight from "C:/Users/hp/OneDrive/Desktop/internpixelhomepage/src/Assets/lightweight.png"
import "./Home.css";
const Home = () => {
    return (
        <div className='home-container'>
          <Navbar />
          <div className='hero-section'>
            <div className='bold-text'>
                <span className='techne-purple'>Techne:</span> <span> Your portal to remote excellence, will empower your initiatives with top-tier talent from all around the world.</span>
            </div>
            <div className='grey-text'>
                <span>At Techne, we understand the transformative power of remote outsourcing. As a premier platform connecting businesses with top-tier talent from around the globe, we specialize in providing tailored solutions to meet your project needs.</span>
            </div>
            <div className='button-pair'>
            <button className='get-started-button'>Get Started</button>
            <button className='pricing-button'>Pricing</button>
            </div>
            <div className='image-one'>
                <img className='imgur' src={Imageone} alt='yoe'></img>
            </div>
          </div>

          <div className='three-cards-area'>
            <div className='three-cards-bold-line'>
              <span>Lightning fast. Better privacy. Fairer cost.</span>
            </div>
            <div className='three-cards-grey-line'>
              <span>You can choose continue to use centralized cloud storage but we have some better reasons for you to start moving to decentralized storage because it is simply the future of the internet.</span>
            </div>
          </div>
        </div>
      );
    }

export default Home
