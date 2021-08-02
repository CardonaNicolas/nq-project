import styled from 'styled-components';
import { rotate, visible, invisible } from 'src/assets/js/keyframes';

const NavStyled = styled.div`
position: fixed;
z-index: 100;
right: 0;
top: 0;
height: 100vh;
background-color: #282828;
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100px;

.nav-container-logo {
    height: 30%;
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

.legal {
    font-size: 10px;
    padding-bottom: 5px;
    text-align: center;
    color: #02cbc7;
    position: relative;
    transition: color .4s ease-out;
    padding-bottom: 5px;

    &:after {
        border-top: 2px solid #02cbc7;
        content: "";
        position: absolute;
        right: 100%;
        bottom: 0px;
        left: 3px;
        transition: right .4s cubic-bezier(0,.5,0,1);
    }

    &:hover:after {
        right: 0;
    }
}

@media screen and (max-width: 767px) {
    display: none;
}
`;

export default NavStyled;