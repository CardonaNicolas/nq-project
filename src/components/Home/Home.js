import React from 'react';
import PropTypes from 'prop-types';
import HomeStyled from './HomeStyled';

import Nav from 'src/containers/Nav';

const Home = () => {
  return (
    <HomeStyled>
      <Nav />
    </HomeStyled>
  );
}

Home.propTypes = {
}

export default Home;