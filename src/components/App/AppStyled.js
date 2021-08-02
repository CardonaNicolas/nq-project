import styled from 'styled-components';
// import theme from 'src/style/theme';

const AppStyled = styled.div`
  margin: 0;
  min-width: 100vw;
  min-height: 100vh;
  background-size: cover;
  background-position: bottom;
  overflow: hidden;
  

  .bcg-wrapper {
    background-color: rgba(0,0,0,1);
  }


  @media screen and (max-width: 1400px) {
    height: auto;
    max-height: none;
  }

  @media screen and (max-width: 767px) {
    height: auto;
    max-height: none;

    .bcg-wrapper {
      padding-top: 100px;
      box-sizing: border-box;
    }
  }
`;

export default AppStyled;
