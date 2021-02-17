import React from 'react';
import PropTypes from 'prop-types';
import SkillsStyled from './SkillsStyled';

import bootstrap from 'public/skills/bootstrap.png';
import css from 'public/skills/css3.png';
import divi from 'public/skills/divi.png';
import git from 'public/skills/git.png';
import html from 'public/skills/html5.png';
import js from 'public/skills/js.png';
import linux from 'public/skills/linux.png';
import nodejs from 'public/skills/nodejs.png';
import redux from 'public/skills/redux.png';
import shopify from 'public/skills/shopify.png';
import woo from 'public/skills/woo.png';
import wordpress from 'public/skills/wordpress.png';
import react from 'public/skills/react.png';

const Skills = () => {
  return (
    <SkillsStyled>
      <div className="logo-container">
        <img src={bootstrap} alt="Logo bootstrap" className="bootstrap" />
        <img src={css} alt="Logo css" className="css" />
        <img src={divi} alt="Logo divi" className="divi" />
        <img src={git} alt="Logo git" className="git" />
        <img src={html} alt="Logo html" className="html" />
        <img src={js} alt="Logo js" className="js" />
        <img src={linux} alt="Logo linux" className="linux" />
        <img src={nodejs} alt="Logo nodejs" className="nodejs" />
        <img src={redux} alt="Logo redux" className="redux" />
        <img src={shopify} alt="Logo shopify" className="shopify" />
        <img src={woo} alt="Logo woo" className="woo" />
        <img src={wordpress} alt="Logo wordpress" className="wordpress" />
        <img src={react} alt="Logo react" className="react" />
      </div>
    </SkillsStyled>
  );
}

Skills.propTypes = {
}

export default Skills;