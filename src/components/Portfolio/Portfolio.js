import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'
import PortfolioStyled from './PortfolioStyled';
import {
  FaEye,
} from 'react-icons/fa';

/**** import Images ****/

import websites from 'src/assets/js/websites.js';

const variants = {
  new: { opacity: [0.0001, 1] },
  old: { opacity: [0, 1] },
}



const Portfolio = () => {

  const [clickedWebSiteId, setClickedWebSiteId] = useState(11);
  const [isNew, setIsNew] = useState(false)
  

  const clickedWebSite = websites.find(website => website.id === clickedWebSiteId);

  return (
    <PortfolioStyled
      as={motion.section}
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '100vw' }}
      transition={{ duration: .5 }}
    >
      <div className="container-cart">
        {websites.map((website) => (
          <div
            key={website.id}
            onClick={() => {
              setIsNew(isNew => !isNew)
              setClickedWebSiteId(website.id)
            }}
            className="portfolio-img-container"
            style={{ backgroundImage: `url(${require(`public/img/${website.img}`)})` }}>
            <div className="bcg-overlay">
            </div>
          </div>
        ))}
      </div>
      <motion.div className="info-website-container" 
      animate={isNew ? "new" : "old"}
      variants={variants}
      transition={{ duration: 1 }}
      >
        <img src={require(`public/img/${clickedWebSite.img}`)}></img>
        <div className="text-container">
          <h2 className="website-title">{clickedWebSite.title}</h2>
          <p className="website-description">{clickedWebSite.description}</p>
          <p className="website-techno">{clickedWebSite.technologies}</p>
          <a className="website-link" href={clickedWebSite.url} target="_blank">Aller sur le site</a>
        </div>
      </motion.div>
    </PortfolioStyled>
  );
}

Portfolio.propTypes = {
}

export default Portfolio;