import styled from 'styled-components';
import { motion } from 'framer-motion'
import websites from 'src/assets/js/websites.js';
import { visible } from 'src/assets/js/keyframes'

const divideWimg = websites.length;


const PortfolioStyled = styled(motion.section)` 
    width: 100vw;
    height: 100vh;
    
    .container-cart {
        display: flex;
        flex-wrap: wrap;
        height: 50%;
        margin-right: 100px;
        box-sizing: border-box;

        .portfolio-img-container {
            height: 50%;
            width: ${(100 - divideWimg  * .1 ) / divideWimg * 2}%;
            overflow: hidden;
            background-position: top;
            background-size: cover;
            box-sizing: border-box;
            margin: .1%;
            transition: all .5s;

            .bcg-overlay {
                width: 100%;
                height: 100%;
            }

        &:hover {
            position: relative;
            cursor: pointer;
            transform: scale(1.1);
            z-index:20;

            .bcg-overlay {
                background-color: rgba(0, 0, 0, 0.3);
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
        padding-right: 100px;
        width: 100%;
        box-sizing: border-box;

        img {
            height: 90%;
        }

        .text-container {
            width: 50%;

            .website-title {
                font-size: 60px;
                border-bottom: 4px solid #02cbc7;
                display: inline-block;
                margin-bottom: 1vw;
            }

            .website-description {
                font-size: 25px;
                margin-bottom: 0.5vw;
            }

            .website-techno {
                font-style: italic;
                margin-bottom: 20px;
            }

            .website-link {
                color: #02cbc7;
                position: relative;
                transition: color .4s ease-out;
                padding-bottom: 2px;

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
        }
    }

    @media screen and (max-width: 767px){
        min-height: 100vh;
        height: auto;
        display: flex;
        flex-wrap: wrap;

        .container-cart {
            height: 100vh;
            width:15%;
            margin: 0;

            .portfolio-img-container {
                width: 100%;
                height:  ${(100 - divideWimg  * .1 ) / divideWimg}%;
                background-position: top;

                &:hover {
                    position: relative;
                    cursor: pointer;
                    border-radius: 0%;
                    transform: scale(1.2);
        
                    .bcg-overlay {
                        background-color: rgba(0, 0, 0, 0.3);
                    }
        
                    .display-icon {
                        display: block;
                        color: #02cbc7;
                        font-size: 30px;
                        position: absolute;
                        top: 30%;
                        left: 40%;
                    }
                } 
            }

        }

        .info-website-container {
            height: 100vh;
            width: 85%;
            flex-direction: column;
            padding: 0 5% 0;

            img {
                height: 30%;
            }
    
            .text-container {
                width: 100%;
                text-align: center;
            }
        }

`

export default PortfolioStyled;