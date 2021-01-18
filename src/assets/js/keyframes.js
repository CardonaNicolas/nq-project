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
0% {
    -webkit-transform: translateY(-45px);
            transform: translateY(-45px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateY(-24px);
            transform: translateY(-24px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateY(-12px);
            transform: translateY(-12px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateY(-6px);
            transform: translateY(-6px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
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

export const slideinbckcenter = keyframes `{
    0% {
      -webkit-transform: translateZ(600px);
              transform: translateZ(600px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
              transform: translateZ(0);
      opacity: 1;
    }
}`

export const flipverticalleft = keyframes`{
    0% {
        -webkit-transform: translateZ(-800px) rotateX(90deg);
                transform: translateZ(-800px) rotateX(90deg);
        opacity: 0;
      }
      54% {
        -webkit-transform: translateZ(-160px) rotateX(87deg);
                transform: translateZ(-160px) rotateX(87deg);
        opacity: 1;
      }
      100% {
        -webkit-transform: translateZ(0) rotateX(0);
                transform: translateZ(0) rotateX(0);
      }
}`

export const homeslideinleft = keyframes`{
        0% {
            -webkit-transform: translateX(-100%);
                    transform: translateX(-100%);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
            opacity: 1;
        }
    }`
  