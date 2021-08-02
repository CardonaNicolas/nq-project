import React, { useRef, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import LegalStyled from './LegalStyled'
import { motion } from 'framer-motion'

export default function Legal() {

  return (
    <LegalStyled
      as={motion.section}
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '100vw' }}
      transition={{ duration: .5 }}
    >
      <div>
        <h3>Mentions légales</h3>
        <p><strong>Propriétaire</strong> : Nicolas Cardona – SIRET 84231246400014 – 10 Allée des Marronniers, 78340 Les Clayes sous Bois</p>
        <p><strong>Créateur</strong> : <a target="blank" href="https://www.nicolas-cardona.fr" rel="noopener">Nicolas Cardona</a></p>
        <p><strong>Responsable publication</strong> : Nicolas Cardona – cardona.nicolas78@gmail.com</p>
        <p><strong>Webmaster</strong> : Nicolas Cardona – cardona.nicolas78@gmail.com</p>
        <p><strong>Hébergeur</strong> : Ovh – 2 rue Kellermann 59100 Roubaix</p>
      </div>
    </LegalStyled>
  );
};