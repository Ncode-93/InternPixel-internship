import React from 'react'
import "./SimpleFairpricing1.css"
import tick from "C:/Users/hp/OneDrive/Desktop/internpixelhomepage/src/Assets/tick.png"
const SimpleFairpricing = () => {
  return (
    <div className="SFP">
      <div className="upper-background">
        <div className="pricing-container">
          <h1 className='sfp-h1'>Simple. <span className="highlight">Fair pricing</span>.</h1>
          <p className='sfp-para'>Pay for what you use. There is no minimum charge. Always know what you'll pay.</p>
          
          <div className="pricing-boxes">
            <div className="pricing-box storage">
              <h2>Storage</h2>
              <div className='dotted-greyline'></div>
              <p className='storage-p'>Access a complete decentralized storage with simple, pay-as-you-go pricing</p>
              <p className="price">$0.008 </p>
              <span>per GB/month</span><br></br>
              <button className="btn">Get started in minutes</button>
              <ul className='pointers-ul'>
                <li className='pointers'><img className='tick-class' src={tick} alt='yop'></img>Everything you need to storage & share files</li>
                <li className='pointers'><img className='tick-class' src={tick} alt='yop'></img>No fees for API requests or data retrievals</li>
                <li className='pointers'><img className='tick-class' src={tick} alt='yop'></img>No setup fees, monthly fees, or hidden fees</li>
              </ul>
            </div>
            
            <div className="pricing-box transfer">
              <h2 className='transfer-h2'>Transfer</h2>
              <div className='dotted-whiteline'></div>
              <p className='transfer-p'>Pay only for what you use. There is no minimum charge. You pay for all bandwidth into and out of Techne</p><br></br>
              <div className="price-detail">
                <p><button className='transfer-bounds'>Inbound</button> <br></br><p className='transfer-bounds-p'>$0.006GBmonth</p></p><br></br>
                <p><button className='transfer-bounds'>Outbound</button><br></br> <p className='transfer-bounds-p'>$0.006GBmonth</p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="lower-background">
        <div className="pricing-container">
          <p className="footer-text">
            Never pay for unused storage again. Never pay expensive seats for team member again.<br />
            Only pay for what you use. Don’t get stalled by contracts, capacity planning, or price modeling.
          </p>
          <div className="buttons-ones">
            <button className="btns-pricing">Pricing</button>
            <button className="btns-comparison">Comparison</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimpleFairpricing
