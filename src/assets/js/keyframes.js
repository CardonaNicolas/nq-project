import { keyframes } from 'styled-components';

export const rotate = keyframes`
0% { transform: rotate(0deg) }
100% { transform: rotate(360deg) }
`

export const visible = keyframes`
0% { opacity: 0 }
100% { opacity: 1 }
`

export const invisible = keyframes`
0% { visibility: hidden }
100% { visibility: visible }
`

export const bounce = keyframes`
0% { transform: translateY(0px) }
25% { transform: translateY(20px) }
50% { transform: translateY(0px) }
75% { transform: translateY(30px) }
100% { transform: translateY(0px) }
`

export const slideintop = keyframes`{
    0% {
        -webkit-transform: translateY(-1000px);
                transform: translateY(-1000px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
        opacity: 1;
    }
}`

export const slideinbottom = keyframes`{
    0% {
        -webkit-transform: translateY(1000px);
                transform: translateY(1000px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
        opacity: 1;
    }
}`

export const slideinright = keyframes`{
    0% {
        -webkit-transform: translateX(1000px);
                transform: translateX(1000px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
        opacity: 1;
    }
}`

export const slideinleft = keyframes`{
    0% {
        -webkit-transform: translateX(-1000px);
                transform: translateX(-1000px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
        opacity: 1;
    }
}`

export const textanim = keyframes`{
    0% {
        letter-spacing: 0.3em;
        -webkit-transform: translateY(400px);
                transform: translateY(400px);
        opacity: 0;
    }
    40% {
        opacity: 0.6;
    }
    100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
        opacity: 1;
    }
}`