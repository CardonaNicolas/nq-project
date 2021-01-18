import React, {useRef, useEffect, useState} from 'react';
import HomeStyled from './HomeStyled';

import { 
  FaEnvelope,
  FaPhoneAlt
} from 'react-icons/fa';

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
                <p>Installation de Google Analytics. Cet outil permet de faire des analyses sur l’audience d’un site web, c’est-à-dire sa popularité et sa performance auprès des internautes et par rapport aux autres sites.</p>
              </div>
            </div>
            <div className="container-single-picto">
              <img src={custom} alt="picto tools"/>
              <h3>100% personnalisable</h3>
              <div>
                <p>Votre site aura un design 100% personnalisé et 100% personnalisable. L'avantage est d'avoir une identité unique et de vous démarquer de vos concurrents.</p>
              </div>
            </div>
          </div>
          <div className="home-img-middle">
            <div className="container-single-picto">
              <img src={security} alt="picto warning"/>
              <h3>Sécurisé</h3>
              <div>
                <p>Installation de module de sécurité & d'un certificat SSL. Site web aux normes RGPD. Vos utilisateurs peuvent naviguer en toutes sécurité.</p>
              </div>
            </div>
            <div className="container-single-picto">
              <img src={update} alt="picto update site"/>
              <h3>Simple à mettre à jour</h3>
              <div>
                <p>Un back-office accessible et rapide a prendre en main pour effectuer des mises a jour, des changements de contenu et sauvegardes regulières de votre site web.</p>
              </div>
            </div>
          </div>
          <div className="home-img-bottom">
            <div className="container-single-picto">
              <img src={seo} alt="picto seo"/>
              <h3>Référencement naturel</h3>
              <div>
                <p>Référencement naturel optimisé pour permettre aux utilisateurs de vous trouver rapidement via leur moteur de recherche.</p>
              </div>
            </div>
            <div className="container-single-picto">
              <img src={responsive} alt="picto desktop"/>
              <h3>Responsive design</h3>
              <div>
                <p>Votre site web et visible sans bug sur tout les écrans: Ordinateur, tablette et mobile.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-home-title">
          <div>
            <h1>Bonjour, je suis <span className="bold">Nicolas,</span></h1>
            <h2>Développeur web Freelance,</h2>
            <hr/>
            <h3>Concepteur de <span className="bold">sites vitrine</span> & <span className="bold">e-commerce</span>.</h3>
          </div>
          <section className="container-contact">
            <p>Envie de lancer un <span className="bold">projet</span> ? N'hésitez pas à me <span className="bold">contacter</span> pour le plannifier.</p>
            <p>
              <FaEnvelope /> 
              <span> Par E-mail :</span>
              <a href="mailto: cardona.nicolas78@gmail.com"> cardona.nicolas78@gmail.com</a>
            </p>
            <p>
              <FaPhoneAlt /> 
              <span> Par téléphone :</span>
              <a href="tel:+33642767592"> 06 42 76 75 92</a>
            </p>
          </section>
        </div>
      </div>
    </HomeStyled>
  );
}

Home.propTypes = {
}

export default Home;