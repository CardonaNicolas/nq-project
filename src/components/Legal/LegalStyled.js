import styled from 'styled-components';
import { motion } from 'framer-motion'

const LegalStyled = styled(motion.section)`
    width: 100%;
    height: 100vh;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 100px;
    box-sizing: border-box;

    div {
        
        padding: 20px; 

        h3 {
            font-size: 30px; 
            padding: 0px 0px 20px;
        }

        p {
            padding: 10px 0px;

            a {
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

        padding-right: 0px;
    }
`;

export default LegalStyled;