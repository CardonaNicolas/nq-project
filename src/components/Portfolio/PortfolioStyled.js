import styled from 'styled-components';

import { slideintop, slideinbottom, slideinleft, slideinright, invisible, bounce, slideinbckcenter, flipverticalleft, pageslideinleft } from 'src/assets/js/keyframes';
import websites from 'src/assets/js/websites.js';

const divideWimg = websites.length;
console.log(divideWimg);


const PortfolioStyled = styled.header` 
    background-color: #3d3d3d;
    width: 100vw;
    height: 100vh;
    animation: ${pageslideinleft} 0.5s 0s linear both;
    
    .container-cart {
        display: flex;
        height: 50%;
        margin-right: 100px;
        animation: ${slideinright} 0.5s 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

        .portfolio-img-container {
            height: 100%;
            width: ${100 / divideWimg}%;
            overflow: hidden;
            background-position: center;
            background-size: cover;
            border-right: 2px solid #02cbc7;

            .bcg-overlay {
                width: 100%;
                height: 100%;
            }

            .display-icon {
                display: none;
            }
        &:hover {
            position: relative;

            .bcg-overlay {
                background-color: rgba(0, 0, 0, 0.9);
            }

            .display-icon {
                display: block;
                color: #02cbc7;
                font-size: 2vw;
                position: absolute;
                top: 45%;
                left: 35%;
                animation: ${bounce} 0.5s 0s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            }
        } 
        }


        .portfolio-img-container:last-child {
            border-right: 0px;
        }
    }

    .info-website-container {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 50%;
        color: #fff;
        margin-right: 100px;
        width: 100%;

        img {
            height: 90%;
            animation: ${slideinbottom} 0.5s 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }

        .text-container {
            width: 50%;
            animation: ${bounce} 0.5s 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

            .website-title {
                font-size: 4vw;
                border-bottom: 2px solid #02cbc7;
                display: inline-block;
                margin-bottom: 1vw;
            }

            .website-description {
                font-size: 2vw;
                margin-bottom: 0.5vw;
            }

            .website-techno {
                font-style: italic;
                margin-bottom: 1vw;
            }

            .website-link {
                color: #02cbc7;
            }

            .website-link:hover {
                color: #fff;
                border-bottom: 2px solid #02cbc7;
            }
        }
    }
`

export default PortfolioStyled;