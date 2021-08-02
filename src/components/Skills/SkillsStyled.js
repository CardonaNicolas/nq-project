import styled from 'styled-components';
import { motion } from 'framer-motion'

const SkillsStyled = styled(motion.section)`
    width: 100vw;
    height: 100vh;

    .logo-container {
        height: 100%;
        margin-right: 100px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-evenly;

        h2 {
            color: #fff;
            font-size: 40px;
            text-align: center;
        }

        .skill-wrapper {
            width: 100%;
            margin: 0 auto;
            display:flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-items: center;

            .divi, .bootstrap, .css, .html, .woo, .wordpress, .react, .git, .js, .linux, .shopify, .redux, .nodejs {
                width: 50px;
                padding-right: 20px;
            }

            .loader-container {
                height: 30x;
                width: 80%;
                background-color: #fff;
                border-radius: 5px;
                color:#fff;

                .loader {
                    background-color: #02cbc7;
                    width: 20px;
                    height: 30px;
                    border-radius: 5px;
                    box-sizing: border-box;
                    padding: 7px 20px;
                    font-weight: bold;
                }
            }

            .loader-pourcentage {
                padding-left: 20px;
                font-size:30px;
                color: #fff;
                font-weight: bold;
                font-family: "dk lemon";
            }
        }
    }
    @media screen and (max-width: 1400px){
        height: auto;
        padding-bottom: 50px;

        h2 {
            padding: 30px 0 0 0 ;
        }

        .logo-container {

            .skill-wrapper {
                margin-top: 50px;
                width: 100%;
                .loader-container {
                    width: 70%;
                }
            }
        }
    }

    @media screen and (max-width: 767px){

        .logo-container {
            margin-right: 0;

            .skill-wrapper {
                .loader-container {
                    width: 60%;
                }
            }
        }
    }
`

export default SkillsStyled;