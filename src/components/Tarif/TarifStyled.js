import styled from 'styled-components';
import { motion } from 'framer-motion'
import { bcg, slideintop, slideinbottom, slideinleft, slideinright, invisible, bounce, slideinbckcenter, flipverticalleft, pageslideinleft } from 'src/assets/js/keyframes';

const TarifStyled = styled(motion.section)` 
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    padding-right: 100px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h1 {
        padding: 50px 0 0;
        color: #fff;
        font-size: 40px;
        text-align: center;
    }
    
    .card-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
        height: 100%;
        justify-content: space-evenly;
        box-sizing: border-box;
        perspective: 1000px;

        .container { 
            padding: 50px;
            transition: all .1s;
        }

        .card {
            margin: 0 auto;
            transform-style: preserve-3d;
            background-color: rgba(0, 0, 0, 0.7);
            width: 300px;
            height: auto;
            padding: 20px;
            border: 5px solid;
            border-image: linear-gradient(45deg, rgb(24, 67, 96), rgb(2, 203, 199)) 1;
            color: #fff;
            position: relative;
            box-shadow: 0 20px 20px rgba(24, 67, 96, 0.2), 0px 0px 100px rgba(24, 67, 96, 0.9);
            transition: background-image 1000ms linear;

            h2 {
                font-size: 30px;
                color: #fff;
                border-bottom: 3px solid #02cbc7;
                text-align: center;
                padding-bottom: 10px;
            }

            span {
                width: 100px;
                height: 100px;
                border-radius: 100px;
                background: rgba(24, 67, 96, 1);
                position: absolute;
                top: -50px;
                right: -50px;
                color: #fff;
                font-size: 30px;
                font-weight: bold;
                text-align: center;
                padding-top: 35px;
                box-sizing: border-box;
            }

            h3 {
                padding: 20px 0;
                font-size: 25px;
            }
            
            ul {
                li {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    padding-bottom: 10px;

                    svg {
                        color: #02cbc7;
                    }
                }
            }
        }

        .container:hover {
            .card { 
                background-image: linear-gradient(45deg, rgb(24, 67, 96), rgb(2, 203, 199));
            }
        }
    }

    .disclaimer {
        background-color: rgba(24, 67, 96, .5);
        width: 100%;
        color: #fff;
        padding: 0px 20px 20px;

        
        h3 {
            padding: 20px 0px 10px;
            font-size: 25px;
        }
    }

    @media screen and (max-width: 767px){

        padding-right: 0px;
        width: 100%;
        box-sizing: border-box;

        .card-container {
            width: 90%;
            box-sizing: border-box;

            .container {
                padding: 0px;
                width: 100%;
                box-sizing: border-box;

                .card {
                    margin-top: 100px;
                    width: 100%;
                    height: auto;
                    box-sizing: border-box;

                    h2 {
                        text-align: left;
                    }

                    span {
                        left: 70%;
                    }
                }
            }
        }
        
        .disclaimer {
            margin-top: 50px;
            padding: 30px;
            width: auto;
        }
    }
`

export default TarifStyled;