import styled from 'styled-components';
import { pageslideinleft, logoIn, boostrapAnim, cssAnim, diviAnim, gitAnim, htmlAnim, jsAnim, linuxAnim, nodejsAnim, reduxAnim, shopifyAnim, wooAnim, wordpressAnim, reactAnim } from 'src/assets/js/keyframes';

const SkillsStyled = styled.div`
    background-color: #3d3d3d;
    width: 100vw;
    height: 100vh;
    animation: ${pageslideinleft} 0.5s 0s linear both;

    .logo-container {
        height: 100%;
        position: relative;
        margin-right: 100px;

        .bootstrap, .css, .html, .woo, .wordpress, .react, .git, .js, .linux, .shopify, .redux, .nodejs {
            width: 5vw;
            position: absolute;
        }


        .bootstrap {
            top: 90%;
            left: 90%;
            animation: ${logoIn} 0.5s 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both, ${boostrapAnim} 10s linear 1s;
        }

        .css {
            top: 80%;
            left: 80%;
            animation: ${logoIn} 0.5s 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both, ${cssAnim} 10s linear 1.5s;
        }

        .divi {
            width: 10vw;
            position: absolute;
            top: 70%;
            left: 30%;
            animation: ${logoIn} 0.5s 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both, ${diviAnim} 10s linear 2s;
        }

        .git {
            top: 20%;
            left: 30%;
            animation: ${logoIn} 0.5s 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both, ${gitAnim} 10s linear 2.5s;
        }

        .html {
            top: 10%;
            left: 60%;
            animation: ${logoIn} 0.5s 2.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both, ${htmlAnim} 10s linear 3s;
        }

        .js {
            top: 40%;
            left: 80%;
            animation: ${logoIn} 0.5s 3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both, ${jsAnim} 10s linear 3.5s;
        }

        .linux {
            top: 50%;
            left: 70%;
            animation: ${logoIn} 0.5s 3.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both, ${linuxAnim} 10s linear 4s;
        }

        .nodejs {
            top: 40%;
            left: 10%;
            animation: ${logoIn} 0.5s 4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both, ${nodejsAnim} 10s linear 4.5s;
        }

        .redux {
            top: 20%;
            left: 80%;
            animation: ${logoIn} 0.5s 4.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both, ${reduxAnim} 10s linear 5s;
        }

        .shopify {
            top: 30%;
            left: 90%;
            animation: ${logoIn} 0.5s 5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both, ${shopifyAnim} 10s linear 5.5s;
        }

        .woo {
            top: 50%;
            left: 50%;
            animation: ${logoIn} 0.5s 5.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both, ${wooAnim} 10s linear 6s;
        }

        .wordpress {
            top: 30%;
            left: 30%;
            animation: ${logoIn} 0.5s 6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both, ${wordpressAnim} 10s linear 6.5s;
        }

        .react {
            top: 60%;
            left: 10%;
            animation: ${logoIn} 0.5s 6.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both, ${reactAnim} 10s linear 5.5s;
        }
    }
`

export default SkillsStyled;