import React, { useEffect } from "react"
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import TarifStyled from './TarifStyled';
import Card from 'react-animated-3d-card'
import { motion } from "framer-motion"

import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const Tarif = () => {

  const cardAnim = () => {
    let cards = document.querySelectorAll(".container");

    cards.forEach(card => {

      let titles = document.querySelectorAll("ul");

      card.addEventListener('mousemove', (e) => {

        const rect = card.getBoundingClientRect();

        const xCursor = e.pageX - rect.left - 200;
        const yCursor = e.pageY - rect.top - 300;

        let attrX = xCursor / 50;
        let attrY = yCursor / 50;

        card.style.transform = `rotateY(${attrX}deg) rotateX(${attrY}deg)`

      })
      card.addEventListener("mouseenter", (e) => {
        card.style.transition = "";
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = "all 0.5s ease";
      })
    })
  }


  return (
    <TarifStyled
      as={motion.section}
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '100vw' }}
      transition={{ duration: .5 }}
    >
      <h1>Mes préstations</h1>
      <div className="card-container">
        <div className="container">
          <div className="card">
            <h2 className="title">Site vitrine</h2>
            <span>850€</span>
            <h3>Spécificités</h3>
            <ul>
              <li><ArrowRightIcon />1 à 5 page(s)</li>
              <li><ArrowRightIcon />SEO optimisé</li>
              <li><ArrowRightIcon />Réalisé sous wordpress ou React</li>
              <li><ArrowRightIcon />Clé en main</li>
              <li><ArrowRightIcon />Pour un blog ou site vitrine</li>
            </ul>
            <h3>Conditions de réalisation:</h3>
            <ul>
              <li><ArrowRightIcon />Livraison sous 1 mois</li>
            </ul>
          </div>
        </div>
        <div className="container" onMouseOver={cardAnim}>
          <div className="card">
            <h2 className="title">Site e-commerce</h2>
            <span>1500€</span>
            <h3>Spécificités</h3>
            <ul>
              <li><ArrowRightIcon />1 à 5 page(s) & 1 à 10 produit(s)</li>
              <li><ArrowRightIcon />SEO optimisé</li>
              <li><ArrowRightIcon />Réalisé avec wordpress ou Shopify</li>
              <li><ArrowRightIcon />Clé en main</li>
              <li><ArrowRightIcon />Paiement via stripe</li>
            </ul>
            <h3>Conditions de réalisation:</h3>
            <ul>
              <li><ArrowRightIcon />Livraison sous 2 mois</li>
            </ul>
          </div>
        </div>
        <div className="container" onMouseOver={cardAnim}>
          <div className="card">
            <h2 className="title">Extras</h2>
            <span>?</span>
            <h3>Offres complémentaires</h3>
            <ul>
              <li><ArrowRightIcon />+40 € par page</li>
              <li><ArrowRightIcon />+20 € par produit (e-commerce)</li>
              <li><ArrowRightIcon />Formation back-office 50€/h</li>
              <li><ArrowRightIcon />Maintenance 60€/trimestre</li>
              <li><ArrowRightIcon />Maintenance ponctuelle 30€/h</li>
            </ul>
            <h3>Devis sur mesure:</h3>
            <ul>
              <li><ArrowRightIcon />En cas de demande inabituelle</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="disclaimer">
        <h3>Organisation:</h3>
        <p>Suite à un premier entretien, je réalise un cahier des charges avec un aperçu du site. Si celui-ci est validé, on lance le projet.</p>
        <h3>Paiement:</h3>
        <p>Un accompte de 30% sera demandé suite à la validation du cahier des charges. Le reste du réglement se fera à la livraison du site.</p>
      </div>
    </TarifStyled>
  );
}

Tarif.propTypes = {
}

export default Tarif;