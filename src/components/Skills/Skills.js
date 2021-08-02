import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SkillsStyled from './SkillsStyled';
import { motion } from 'framer-motion'

import bootstrap from 'public/skills/bootstrap.png';
import css from 'public/skills/css3.png';
import divi from 'public/skills/divi.png';
import git from 'public/skills/git.png';
import html from 'public/skills/html5.png';
import js from 'public/skills/js.png';
import nodejs from 'public/skills/nodejs.png';
import redux from 'public/skills/redux.png';
import shopify from 'public/skills/shopify.png';
import woo from 'public/skills/woo.png';
import wordpress from 'public/skills/wordpress.png';
import react from 'public/skills/react.png';

const Skills = () => {
  const [htmlValue, setHtmlValue] = useState(0)
  const [cssValue, setCssValue] = useState(0)
  const [bootstrapValue, setBootstrapValue] = useState(0)
  const [jsValue, setJsValue] = useState(0)
  const [reactValue, setReactValue] = useState(0)
  const [reduxValue, setReduxValue] = useState(0)
  const [nodeValue, setNodeValue] = useState(0)
  const [wordpressValue, setWordpressValue] = useState(0)
  const [diviValue, setDiviValue] = useState(0)
  const [woocValue, setWoocValue] = useState(0)
  const [shopifyValue, setShopifyValue] = useState(0)
  const [githubValue, setGithubValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setHtmlValue(oldValue => {
        const newValue = oldValue + 1;

        if (newValue === 75) {
          clearInterval(interval);
        }

        return newValue;
      });
    }, 30);

  }, []);
  useEffect(() => {
    const intervalCss = setInterval(() => {
      setCssValue(oldValue => {
        const newValue = oldValue + 1;

        if (newValue === 65) {
          clearInterval(intervalCss);
        }

        return newValue;
      });
    }, 30);
  }, []);

  useEffect(() => {
    const intervalBootstrap = setInterval(() => {
      setBootstrapValue(oldValue => {
        const newValue = oldValue + 1;

        if (newValue === 40) {
          clearInterval(intervalBootstrap);
        }

        return newValue;
      });
    }, 30);
  }, []);

  useEffect(() => {
    const intervalJs = setInterval(() => {
      setJsValue(oldValue => {
        const newValue = oldValue + 1;

        if (newValue === 55) {
          clearInterval(intervalJs);
        }

        return newValue;
      });
    }, 30);
  }, []);

  useEffect(() => {
    const intervalReact = setInterval(() => {
      setReactValue(oldValue => {
        const newValue = oldValue + 1;

        if (newValue === 50) {
          clearInterval(intervalReact);
        }

        return newValue;
      });
    }, 30);
  }, []);

  useEffect(() => {
    const intervalRedux = setInterval(() => {
      setReduxValue(oldValue => {
        const newValue = oldValue + 1;

        if (newValue === 60) {
          clearInterval(intervalRedux);
        }

        return newValue;
      });
    }, 30);
  }, []);

  useEffect(() => {
    const intervalNode = setInterval(() => {
      setNodeValue(oldValue => {
        const newValue = oldValue + 1;

        if (newValue === 40) {
          clearInterval(intervalNode);
        }

        return newValue;
      });
    }, 30);
  }, []);

  useEffect(() => {
    const intervalWordpress = setInterval(() => {
      setWordpressValue(oldValue => {
        const newValue = oldValue + 1;

        if (newValue === 80) {
          clearInterval(intervalWordpress);
        }

        return newValue;
      });
    }, 30);
  }, []);

  useEffect(() => {
    const intervalDivi = setInterval(() => {
      setDiviValue(oldValue => {
        const newValue = oldValue + 1;

        if (newValue === 85) {
          clearInterval(intervalDivi);
        }

        return newValue;
      });
    }, 30);
  }, []);

  useEffect(() => {
    const intervalWooc = setInterval(() => {
      setWoocValue(oldValue => {
        const newValue = oldValue + 1;

        if (newValue === 70) {
          clearInterval(intervalWooc);
        }

        return newValue;
      });
    }, 30);
  }, []);

  useEffect(() => {
    const intervalShopify = setInterval(() => {
      setShopifyValue(oldValue => {
        const newValue = oldValue + 1;

        if (newValue === 40) {
          clearInterval(intervalShopify);
        }

        return newValue;
      });
    }, 30);
  }, []);

  useEffect(() => {
    const intervalGithub = setInterval(() => {
      setGithubValue(oldValue => {
        const newValue = oldValue + 1;

        if (newValue === 70) {
          clearInterval(intervalGithub);
        }

        return newValue;
      });
    }, 30);
  }, []);

  return (
    <SkillsStyled
      as={motion.section}
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '100vw' }}
      transition={{ duration: .5 }}
    >
      <div className="logo-container">
        <h2>Technologies utilisées !</h2>
        <div className="skill-wrapper">
          <img src={html} alt="Logo html" className="html" />
          <div className="loader-container">
            <motion.div
              animate={{ width: `${htmlValue}%` }}
              className="loader"
              transition={{ duration: .03 }}
            >
              HTML
            </motion.div>
          </div>
          <div className="loader-pourcentage">{htmlValue} %</div>
        </div>
        <div className="skill-wrapper">
          <img src={css} alt="Logo css" className="css" />
          <div className="loader-container">
            <motion.div
              animate={{ width: `${cssValue}%` }}
              className="loader"
              transition={{ duration: .03 }}
            >
              CSS
            </motion.div>
          </div>
          <div className="loader-pourcentage">{cssValue} %</div>
        </div>
        <div className="skill-wrapper">
          <img src={bootstrap} alt="Logo bootstrap" className="bootstrap" />
          <div className="loader-container">
            <motion.div
              animate={{ width: `${bootstrapValue}%` }}
              className="loader"
              transition={{ duration: .03 }}
            >
              BOOTSTRAP
            </motion.div>
          </div>
          <div className="loader-pourcentage">{bootstrapValue} %</div>
        </div>
        <div className="skill-wrapper">
          <img src={js} alt="Logo js" className="js" />
          <div className="loader-container">
            <motion.div
              animate={{ width: `${jsValue}%` }}
              className="loader"
              transition={{ duration: .03 }}
            >
              JAVASCRIPT
            </motion.div>
          </div>
          <div className="loader-pourcentage">{jsValue} %</div>
        </div>
        <div className="skill-wrapper">
          <img src={react} alt="Logo react" className="react" />
          <div className="loader-container">
            <motion.div
              animate={{ width: `${reactValue}%` }}
              className="loader"
              transition={{ duration: .03 }}
            >
              REACT JS
            </motion.div>
          </div>
          <div className="loader-pourcentage">{reactValue} %</div>
        </div>
        <div className="skill-wrapper">
          <img src={redux} alt="Logo redux" className="redux" />
          <div className="loader-container">
            <motion.div
              animate={{ width: `${reduxValue}%` }}
              className="loader"
              transition={{ duration: .03 }}
            >
              REDUX
            </motion.div>
          </div>
          <div className="loader-pourcentage">{reduxValue} %</div>
        </div>
        <div className="skill-wrapper">
          <img src={nodejs} alt="Logo nodejs" className="nodejs" />
          <div className="loader-container">
            <motion.div
              animate={{ width: `${nodeValue}%` }}
              className="loader"
              transition={{ duration: .03 }}
            >
              NODE JS
            </motion.div>
          </div>
          <div className="loader-pourcentage">{nodeValue} %</div>
        </div>
        <div className="skill-wrapper">
          <img src={wordpress} alt="Logo wordpress" className="wordpress" />
          <div className="loader-container">
            <motion.div
              animate={{ width: `${wordpressValue}%` }}
              className="loader"
              transition={{ duration: .03 }}
            >
              WORDPRESS
            </motion.div>
          </div>
          <div className="loader-pourcentage">{wordpressValue} %</div>
        </div>
        <div className="skill-wrapper">
          <img src={divi} alt="Logo divi" className="divi" />
          <div className="loader-container">
            <motion.div
              animate={{ width: `${diviValue}%` }}
              className="loader"
              transition={{ duration: .03 }}
            >
              DIVI
            </motion.div>
          </div>
          <div className="loader-pourcentage">{diviValue} %</div>
        </div>
        <div className="skill-wrapper">
          <img src={woo} alt="Logo woo" className="woo" />
          <div className="loader-container">
            <motion.div
              animate={{ width: `${woocValue}%` }}
              className="loader"
              transition={{ duration: .03 }}
            >
              WOOCOMMERCE
            </motion.div>
          </div>
          <div className="loader-pourcentage">{woocValue} %</div>
        </div>
        <div className="skill-wrapper">
          <img src={shopify} alt="Logo shopify" className="shopify" />
          <div className="loader-container">
            <motion.div
              animate={{ width: `${shopifyValue}%` }}
              className="loader"
              transition={{ duration: .03 }}
            >
              SHOPIFY
            </motion.div>
          </div>
          <div className="loader-pourcentage">{shopifyValue} %</div>
        </div>
        <div className="skill-wrapper">
          <img src={git} alt="Logo git" className="git" />
          <div className="loader-container">
            <motion.div
              animate={{ width: `${githubValue}%` }}
              className="loader"
              transition={{ duration: .03 }}
            >
              GITHUB
            </motion.div>
          </div>
          <div className="loader-pourcentage">{githubValue} %</div>
        </div>

      </div >
    </SkillsStyled >
  );
}

Skills.propTypes = {
}

export default Skills;