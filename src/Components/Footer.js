import React from 'react'
import "./Footer.css"
import logs from "../Assets/footer-pics.png"
import social from "../Assets/social-icons.png"

const Footer = () => {
  return (
    <div className='Footer-container'>
        <div className='main-box'>
        <div className='main-box-footer'>
            <h2 className='mbf-h2'>What is Techne?</h2>
            <p className='mbf-p'>At Techne, we understand the transformative power of remote outsourcing. As a premier platform connecting businesses with top-tier talent from around the globe, we specialize in providing tailored solutions to meet your project needs.</p>
            <img className='foter-pic' src={logs} alt='ytpk'></img>
        </div>
        <div className='footer-products'>
            <h2 className='fp-h2'>Products</h2>
            <ul >
                <li className='f-li'>Features</li>
                <li className='f-li'>Solutions</li>
                <li className='f-li'>Pricing</li>
                <li className='f-li'>Token</li>
                <li className='f-li'>Security</li>
                <li className='f-li'>Comparison</li>
            </ul>
        </div>
        <div className='footer-resources'>
            <h2 className='fp-h2'>Resource</h2>
            <ul >
                <li className='f-li'>Whitepaper</li>
                <li className='f-li'>Developer</li>
                <li className='f-li'>Brand Kits</li>
                <li className='f-li'>Compliance</li>
                <li className='f-li'>Privacy Policy</li>
                <li className='f-li'>Terms of Service</li>
            </ul>
        </div>
        <div className='footer-community'>
            <h2 className='fp-h2'>Community</h2>
            <ul >
                <li className='f-li'>Guide</li>
                <li className='f-li'>Blog</li>
                <li className='f-li'>FAQs</li>
                <li className='f-li'>Forum</li>
                <li className='f-li'>Help Desk</li>
                <li className='f-li'>Support Desk</li>
            </ul>
        </div>
        </div>
        <div className='last-footer-div'>
            <p className='lfd-p'>{'\u00A9'} 2024 Techne</p>
            <img className='lfd-img' src={social} alt='qwsx'></img>
        </div>
    </div>
  )
}

export default Footer
