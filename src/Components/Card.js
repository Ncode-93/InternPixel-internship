// import React from "react";
// import light from '../Assets/lightweight.png'
// import "./Card.css"

// const Card = () => {
//   return (
//     <div className="card-container">
//         <div className="card-one">     
//             <img src={light} alt='you'></img>
//             <h2>This is h2</h2>
//             <p>this is p</p>
//         </div>
//     </div>
//   )
// }

// export default Card

import React from 'react';
import light from '../Assets/light-1.png'
import nosub from '../Assets/nosub-1.png'
import decentral from '../Assets/decentral-1.png'
import './Card.css';

// const FeatureCard = ({ icon, title, description, linkText, linkUrl }) => {
//     return (
//         <div className="feature-card">
//             <div className="feature-icon">{icon}</div>
//             <h3>{title}</h3>
//             <p>{description}</p>
//             <a href={linkUrl}>{linkText}</a>
//         </div>
//     );
// };
const FeatureCard = ({ imgSrc, title, description, linkText, linkUrl }) => {
  return (
      <div className="feature-card">
          <div className="feature-icon">
              <img src={imgSrc} alt={title} />
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={linkUrl}>{linkText}</a>
      </div>
  );
};


const FeaturesSection = () => {
    return (
        <section className="features-section">
            {/* <h2>Lightning fast. Better privacy. Fairer cost.</h2> */}
            {/* <p className='para'>You can choose to continue using centralized cloud storage but we have some better reasons for you to start moving to decentralized storage because it is simply the future of the internet.</p> */}
            <div className="features-grid">
                <FeatureCard
                    imgSrc={light}
                    title="Lightweight"
                    description="Designed to be lightweight to help you enhance team collaboration by organizing and sharing files in your projects without stress."
                    linkText="Products features →"
                    linkUrl="#"
                />
                <FeatureCard
                    imgSrc={nosub}
                    title="Decentralization"
                    description="Store data securely on over 13k nodes worldwide instead of just a few vulnerable data centers with privacy and lightning speed by design."
                    linkText="How it works →"
                    linkUrl="#"
                />
                <FeatureCard
                    imgSrc={decentral}
                    title="No subscription"
                    description="With Pay-as-you-go pricing, now you only pay for the resource you use without being charged a flat monthly fee even if you don’t use it up."
                    linkText="Metered billing →"
                    linkUrl="#"
                />
            </div>
        </section>
    );
};

export default FeaturesSection;
