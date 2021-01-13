import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
0% { transform: rotate(0deg) }
100% { transform: rotate(360deg) }
`

const NavStyled = styled.div`

background-color: #282828;
display: flex;
flex-direction: column;
width: 100px;

.nav-container-logo {
    height: 20vh;

    img {
        width: 100px;
        animation: 16s linear infinite ${rotate};
    }
}

.nav-container-menu{
    height: 60vh;
}

.nav-container-socials {
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;


    .nav-icons-socials {
        color: #fff;

        &:hover {
            color: #02cbc7;
        }
    }
}
`;

export default NavStyled;