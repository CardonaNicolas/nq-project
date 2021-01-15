import styled from 'styled-components';
import { slideintop, slideinbottom, slideinleft, slideinright, invisible } from 'src/assets/js/keyframes';

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
        border-right: 2px solid #000;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: center;

        .container-single-picto {

            img {
                width: 10%;
            }
        }
    }

    .container-home-title {
        width: 65%;
        padding-left: 100px;
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
            display: block;
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