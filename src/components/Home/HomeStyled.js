import styled from 'styled-components';
import { slideintop, slideinbottom, slideinleft, slideinright, invisible, bounce, slideinbckcenter, flipverticalleft } from 'src/assets/js/keyframes';

const HomeStyled = styled.div`

.container-home {
    background-color: #3d3d3d;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;

    .container-home-image {
        width: 35%;
        z-index:100;
        height: 100%;
        text-align: center;
        background-color: #282828;
        animation: ${invisible} 0s 2, ${slideinbckcenter} 0.5s 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

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
            flex-direction: wrap;
        }

        .home-img-top,  
        .home-img-bottom {

            .container-single-picto:nth-child(1) {
                background-color: #fff;
                color: #000;
            }

            .container-single-picto:nth-child(2) {
                background-color: #000;
                color: #fff;
            }
        }

        .home-img-middle {

            .container-single-picto:nth-child(2) {
                background-color: #fff;
                color: #000;
            }

            .container-single-picto:nth-child(1) {
                background-color: #000;
                color: #fff;
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

            &:hover {
                img, h3 {
                    display: none;
                }

                div {
                    display: flex;
                    align-items: center;
                }
            }

            div {
                display: none;
                height: 100%;
                width: 102%;
                padding: 20px;
                box-sizing: border-box;
                text-align: justify;
                color: #fff;
                background-color: #282828;
                animation: ${flipverticalleft} 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
            }

            img {
               width: 40%;
            }

            h3 {
                font-size: 1vw;
                font-family: 'century gothic';
                font-weight: bold;
            }
        }
    }

    .container-home-title {
        width: 65%;
        padding-left: 10vw;
        font-size: 60px;
        color: #fff;
        text-align: left;

        h1 {
            display: block;
            font-size: 5vw;
            animation: ${slideintop} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }

        h2 {
            display: block;
            font-size: 4vw;
            margin-top: 2%;
            animation: ${invisible} 0s 0.5s,  ${slideinright} 0.5s 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }

        hr {
            display: block;
            width: 30%;
            color: #000;
            margin: 0.5% 0 2% 0;
            animation: ${invisible} 0s 1s, ${slideinleft} 0.5s 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }

        h3 {
            display: block;
            font-size: 1.5vw;
            margin-top: 2%;
            font-family: 'century gothic';
            animation: ${invisible} 0s 1.5s, ${slideinbottom} 0.5s 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }
    }
}
`

export default HomeStyled;