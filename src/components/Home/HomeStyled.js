import styled from 'styled-components';
import { slideintop, slideinbottom, slideinleft, slideinright, invisible, bounce, slideinbckcenter, flipverticalleft, pageslideinleft } from 'src/assets/js/keyframes';
import { motion } from 'framer-motion'

const HomeStyled = styled(motion.section)`
overflow: hidden;

.container-home {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;

    .container-home-image {
        width: 30%;
        z-index:100;
        height: 100%;
        text-align: center;
        background-color: #282828;
        

        h2 {
            width: 100%;
            height: 10%;
            box-sizing: border-box;
            font-size: 2vw;
            padding-top: 5%;
            color: #02cbc7;
        }

        .home-img-top, .home-img-middle, .home-img-bottom {
            width: 100%;
            height: 30%;
            display: flex;
            flex-wrap: wrap;
        }

        .home-img-top {

            .container-single-picto:nth-child(1) {
                background-color: #2A3D36;
                color: #28755D;
            }

            .container-single-picto:nth-child(2) {
                background-color: #28755D;
                color: #2A3D36;
            }
        }

        .home-img-middle {
            
            .container-single-picto:nth-child(1) {
                background-color: #C36285;
                color: #FE97BA;
            }

            .container-single-picto:nth-child(2) {
                background-color: #FE97BA;
                color: #C36285;
            }
        }

        .home-img-bottom {

            .container-single-picto:nth-child(1) {
                background-color: #CE8F36;
                color: #FFECCC;
            }

            .container-single-picto:nth-child(2) {
                background-color: #FFECCC;
                color: #CE8F36;
            }
        }

        .container-single-picto {
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            overflow: hidden;
            
            div {
                display: none;
                height: 100%;
                width: 102%;
                padding: 20px;
                box-sizing: border-box;
                text-align: left;
                color: #fff;
                background-color: rgba(0,0,0,0.5);
                opacity: 0;
                transition: opacity 1s;
            }

            &:hover {
                img, h3 {
                    display: none;
                }

                div {
                    display: flex;
                    align-items: center;
                }
            }

            img {
               width: 30%;
            }

            h3 {
                font-size: 1vw;
                font-family: 'century gothic';
                font-weight: bold;
            }
        }
    }

    .container-home-title {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 70%;
        height: 100%;
        padding-left: 10vw;
        font-size: 60px;
        color: #fff;
        text-align: left;

        h1 {
            display: block;
            font-size: 5vw;
            
        }

        h2 {
            display: block;
            font-size: 4vw;
            margin-top: 2%;
            
        }

        hr {
            display: block;
            width: 30%;
            height: 0;
            border: 2px solid #02cbc7;
            margin: 0.5% 0 2% 0;

        }

        h3 {
            display: block;
            font-size: 1.5vw;
            margin-top: 2%;
            font-family: 'century gothic';

        }

        .container-contact {
            font-size: 1vw;
            line-height: 3vh;


            svg {
                color: #02cbc7;
            }

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
}

@media screen and (max-width: 1400px){


    .container-home {
        flex-direction: column-reverse;
        height: 100%;

        .container-home-image{
            width: 100%;
            padding-right: 100px;
            box-sizing: border-box;
            margin-top: 50px;

            h2 {
                padding: 20px 0px;
                font-size: 30px;
            }

            .home-img-top, .home-img-middle, .home-img-bottom {
                flex-direction: column;

                .container-single-picto {
                    width: 100%;
                    height: auto;
                    padding: 20px 0;

                    &:hover {
                        img, h3 {
                            display: inline;
                        }
                    }

                    img {
                        width: 120px;
                    }

                    h3 {
                        padding-top: 20px;
                        font-size: 22px;
                    }

                    div {
                        display: flex;
                        align-items: center;
                        width: 80%;
                        margin-top: 20px;
                        opacity: 1;
                    }
                }
            }
        }

        .container-home-title {
            width: 100%;
            padding: 50px 150px 0px 50px;
            box-sizing: border-box;

            h1 {
                font-size: 7vw;
            }

            h2 {
                font-size: 5.5vw;
            }

            h3 {
                font-size: 2.5vw;
            }

            .container-contact {
                margin-top: 50px;

                p {
                    font-size: 2vw;
                    line-height: 20px;
                }
            }

        }
    }
}

@media screen and (max-width: 767px){




    .container-home {
    
        .container-home-image{
            padding-right: 0px;
        }

        .container-home-title {
            width: 100%;
            box-sizing: border-box;

            h1 {
                font-size: 60px;
            }

            h2 {
                font-size: 45px;
            }

            h3 {
                font-size: 30px;
            }

            .container-contact {
                margin-top: 50px;

                p {
                    font-size: 20px;
                    line-height: 25px;
                }
            }

        }
    }
}
`

export default HomeStyled;