import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PortfolioStyled from './PortfolioStyled';
import { 
  FaEye,
} from 'react-icons/fa';

/**** import Images ****/

import websites from 'src/assets/js/websites.js';



const Portfolio = () => {

  const [clickedWebSiteId, setClickedWebSiteId] = useState(11);
  
  const clickedWebSite = websites.find(website => website.id === clickedWebSiteId);

  console.log(clickedWebSite);

  return (
    <PortfolioStyled>
        <div className="container-cart">
          {websites.map((website) => (
            <div 
              key={website.id} 
              onClick={() => {
              setClickedWebSiteId(website.id)
            }}
              className="portfolio-img-container" 
              style={{ backgroundImage: `url(${require(`public/img/${website.img}`)})` }}>
              <div className="bcg-overlay">
              <FaEye className="display-icon" />
            </div>
            </div>
          ))}
        </div>
        <div className="info-website-container">
          <img src={require(`public/img/${clickedWebSite.img}`)}></img>
          <div className="text-container">
            <h2 className="website-title">{clickedWebSite.title}</h2>
            <p className="website-description">{clickedWebSite.description}</p>
            <p className="website-techno">{clickedWebSite.technologies}</p>
            <a className="website-link" href={clickedWebSite.url} target="_blank">Aller sur le site</a>
          </div>
        </div>
    </PortfolioStyled>
  );
}

Portfolio.propTypes = {
}

export default Portfolio;