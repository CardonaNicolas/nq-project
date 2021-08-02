// == Import locaux
import styled from 'styled-components';
import { rotate, visible, invisible } from 'src/assets/js/keyframes';


// == Composant
// ici on a la fonction qui décrit le style du composant App
const SimpleMenuStyled = styled.div`
    display: none;

    @media screen and (max-width: 767px) {
        display: block;
        position: fixed;
        top: 0;
        z-index: 100;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0px;
        background-color: rgba(0,0,0,.8);

        .mobile-menu {
            svg {
                color: #02cbc7;
                font-size: 50px;
            }
        }

        .nav-container-logo {
            img {
                max-width: 80px;
                animation: 16s linear infinite ${rotate};
            }
        }

        .picto-rs-container {
            padding-right: 10px;
            a {
                color: #fff;
                padding-left: 10px;

                svg {
                    font-size: 35px;
                }
            }
        }

        img {
            width: 100px;
            padding-right: 10px;
        }
    }
`;

// == Export
export default SimpleMenuStyled;