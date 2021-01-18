import React from 'react';
import PropTypes from 'prop-types';
import SwitchModeStyled from './SwitchModeStyled';

const SwitchMode = ({ changeMode, siteMode }) => {
    console.log(siteMode);
  return (
    <SwitchModeStyled>
        <div 
            className={siteMode === 'Development' ? 'active' : ''}
            onClick={() => {changeMode('Development')}}>
            Développement
        </div>
        <div 
            className={siteMode === 'Design' ? 'active' : ''}
            onClick={() => {changeMode('Design')}}>
            Design
        </div>
    </SwitchModeStyled>
  );
}

SwitchMode.propTypes = {
}

export default SwitchMode;