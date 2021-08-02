
import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**** import Images ****/

import websites from 'src/assets/js/websites.js';



const Website = ({ website }) => {
  return (
    <div className="info-website-container">
        <div className="img">
            <img src={require(`public/img/${website.img}`)}/>
        </div>
        <div className="text-container">
            <h2 className="website-title">{website.title}</h2>
            <p className="website-description">{website.description}</p>
            <p className="website-techno">{website.technologies}</p>
            <a className="website-link" href={website.url} target="_blank">Aller sur le site</a>
        </div>
    </div>
  );
}


export default Website;