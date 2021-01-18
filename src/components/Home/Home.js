import React, {useRef, useEffect, useState} from 'react';
import HomeStyled from './HomeStyled';

import Nav from 'src/containers/Nav';

import analyse from 'public/img/icondev1.png';
import custom from 'public/img/icondev2.png';
import security from 'public/img/icondev3.png';
import update from 'public/img/icondev4.png';
import seo from 'public/img/icondev5.png';
import responsive from 'public/img/icondev6.png';

const Home = () => {

  return (
    <HomeStyled>
      <Nav />
      <div className="container-home">
        <div className="container-home-image">
          <h2>Des sites web clé en main</h2>
          <div className="home-img-top" >
            <div className="container-single-picto">
              <img src={analyse} alt="picto site analyse"/>
              <h3>Analyse statistique</h3>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus turpis eu ante faucibus, non sollicitudin ante accumsan. Sed finibus neque justo, ut eleifend ante lacinia at. Vestibulum ac posuere erat. Vestibulum sit amet tellus sollicitudin, gravida lacus vel, elementum dolor.</p>
              </div>
            </div>
            <div className="container-single-picto">
              <img src={custom} alt="picto tools"/>
              <h3>100% personnalisable</h3>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus turpis eu ante faucibus, non sollicitudin ante accumsan. Sed finibus neque justo, ut eleifend ante lacinia at. Vestibulum ac posuere erat. Vestibulum sit amet tellus sollicitudin, gravida lacus vel, elementum dolor.</p>
              </div>
            </div>
          </div>
          <div className="home-img-middle">
            <div className="container-single-picto">
              <img src={security} alt="picto warning"/>
              <h3>Sécurisé</h3>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus turpis </p>
              </div>
            </div>
            <div className="container-single-picto">
              <img src={update} alt="picto update site"/>
              <h3>Simple à mettre à jour</h3>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus turpis eu ante faucibus, non sollicitudin ante accumsan. Sed finibus neque justo, ut eleifend ante lacinia at. Vestibulum ac posuere erat. Vestibulum sit amet tellus sollicitudin, gravida lacus vel, elementum dolor..</p>
              </div>
            </div>
          </div>
          <div className="home-img-bottom">
            <div className="container-single-picto">
              <img src={seo} alt="picto seo"/>
              <h3>Référencement naturel</h3>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus turpis eu ante faucibus, non sollicitudin ante accumsan. Sed finibus neque justo, ut eleifend ante lacinia at. Vestibulum ac posuere erat. Vestibulum sit amet tellus sollicitudin, gravida lacus vel, elementum dolor..</p>
              </div>
            </div>
            <div className="container-single-picto">
              <img src={responsive} alt="picto desktop"/>
              <h3>Responsive design</h3>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus turpis eu ante faucibus, non sollicitudin ante accumsan. Sed finibus neque justo, ut eleifend ante lacinia at. Vestibulum ac posuere erat. Vestibulum sit amet tellus sollicitudin, gravida lacus vel, elementum dolor.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-home-title">
          <h1>Bonjour, je suis <span className="bold">Nicolas,</span></h1>
          <h2>Développeur web Freelance,</h2>
          <hr/>
          <h3>Concepteur de <span className="bold">sites vitrine</span> & <span className="bold">e-commerce</span>.</h3>
        </div>
      </div>
    </HomeStyled>
  );
}

Home.propTypes = {
}

export default Home;