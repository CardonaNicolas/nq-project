import styled from 'styled-components';
import { rotate, visible, invisible } from 'src/assets/js/keyframes';

const NavStyled = styled.div`
position: fixed;
z-index: 2;
right: 0;
height: 100vh;
background-color: #282828;
display: flex;
flex-direction: column;
width: 100px;

.nav-container-logo {
    height: 40%;
    display: flex;
    align-items: center;

    img {
        width: 100px;
        animation: 16s linear infinite ${rotate};
    }
}

.nav-container-menu{
    height: 40%;

    nav {
        height: 100%;
        width: 100%;

        ul {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            text-align: center;
            

            div {
                padding-top: 5px;
                display: none;
                animation: 400ms linear ${visible};
                font-weight: bold;
            }

            li {
                margin: 0 auto;
                width: auto;
                height: 40px;

                &:hover {
                    div {
                        color: #02cbc7;
                        display: block;
                    }

                    .nav-icons-menu {
                        display: none;
                    }
                }
            }

            .nav-icons-menu {
                font-size: 25px;
                color: #fff;
                animation: 400ms linear ${visible};
            }
        }
    }

    .active-menu .nav-icons-menu {
        color: #02cbc7;
    }
}

.nav-container-socials {
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;


    .nav-icons-socials {
        color: #fff;
        transition: color 400ms;

        &:hover {
            color: #02cbc7;
        }
    }
}
`;

export default NavStyled;