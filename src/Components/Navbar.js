import React from 'react'
import './Navbar.css';
import Logo from "../Assets/techne.png"
const Navbar = () => {
  
    const navoptions = [
        { text: "Features", id: 1 },
        { text: "Solutions", id: 2 },
        { text: "Templates", id: 3 },
        { text: "Pricing", id: 4 },
        { text: "Developers", id: 5 },
        { text: "Resource", id: 6 },
        { text: "App", id: 7 },
        { text: "English", id: 8 }
    ];

    return (
        <nav className='og-nav'>
          <div className='nav-logo'>
            <img src={Logo} alt='yo' />
          </div>
          <div className='navbar-link'>
            {navoptions.map((option, index) => (
              <div className='nav-option' key={option.id}>
                {option.text}
              </div>
            ))}
            <button className='sign-in-button'>Sign In</button>
            <button className='Create-acc'>Create an account</button>
          </div>
        </nav>
      );
};

export default Navbar;
