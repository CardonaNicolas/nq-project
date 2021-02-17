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

export const pageslideinleft = keyframes`{
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

export const logoIn = keyframes`{
        0% {
                transform: scale(2);
                filter: blur(4px);
                opacity: 0;
              }
              100% {
                transform: scale(1);
                filter: blur(0px);
                opacity: 1;
        }
}`

export const boostrapAnim = keyframes`{
        0% {
                top: 90%;
                left: 90%;
        }
        10% {
                top: 60%;
                left: 80%;
        }
        20% {
                top :40%;
                left: 60%;
        }
        30% {
                top: 10%;
                left: 50%;
        }
        40% {
                top: 30%;
                left: 30%;
        }
        50% {
                top: 50%;
                left: 10%;
        }
        60% {
                top: 30%;
                left: 30%;
        }
        70% {
                top: 10%;
                left: 50%;
        }
        80% {
                top: 40%;
                left: 60%;
        }
        90% {
                top: 60%;
                left: 80%;
        }
        100% {
                top: 90%;
                left: 90%;
        }
}`

export const cssAnim = keyframes`{
        0% {
                top: 80%;
                left: 80%;
        }
        10% {
                top: 90%;
                left: 50%;
        }
        20% {
                top :70%;
                left: 30%;
        }
        30% {
                top: 50%;
                left: 10%;
        }
        40% {
                top: 50%;
                left: 50%;
        }
        50% {
                top: 10%;
                left: 50%;
        }
        60% {
                top: 50%;
                left: 50%;
        }
        70% {
                top: 50%;
                left: 10%;
        }
        80% {
                top: 70%;
                left: 30%;
        }
        90% {
                top: 90%;
                left: 50%;
        }
        100% {
                top: 80%;
                left: 80%;
        }
}`

export const diviAnim = keyframes`{
        0% {
                top: 70%;
                left: 30%;
        }
        10% {
                top: 50%;
                left: 10%;
        }
        20% {
                top :90%;
                left: 10%;
        }
        30% {
                top: 90%;
                left: 50%;
        }
        40% {
                top: 70%;
                left: 70%;
        }
        50% {
                top: 30%;
                left: 70%;
        }
        60% {
                top: 70%;
                left: 70%;
        }
        70% {
                top: 90%;
                left: 50%;
        }
        80% {
                top: 90%;
                left: 10%;
        }
        90% {
                top: 50%;
                left: 10%;
        }
        100% {
                top: 70%;
                left: 30%;
        }
}`

export const gitAnim = keyframes`{
        0% {
                top: 20%;
                left: 30%;
        }
        10% {
                top: 10%;
                left: 60%;
        }
        20% {
                top :50%;
                left: 60%;
        }
        30% {
                top: 90%;
                left: 60%;
        }
        40% {
                top: 70%;
                left: 40%;
        }
        50% {
                top: 70%;
                left: 80%;
        }
        60% {
                top: 70%;
                left: 40%;
        }
        70% {
                top: 90%;
                left: 60%;
        }
        80% {
                top: 50%;
                left: 60%;
        }
        90% {
                top: 10%;
                left: 60%;
        }
        100% {
                top: 20%;
                left: 30%;
        }
}`

export const htmlAnim = keyframes`{
        0% {
                top: 10%;
                left: 60%;
        }
        10% {
                top: 30%;
                left: 40%;
        }
        20% {
                top :50%;
                left: 20%;
        }
        30% {
                top: 90%;
                left: 20%;
        }
        40% {
                top: 90%;
                left: 60%;
        }
        50% {
                top: 70%;
                left: 80%;
        }
        60% {
                top: 90%;
                left: 60%;
        }
        70% {
                top: 90%;
                left: 20%;
        }
        80% {
                top: 50%;
                left: 20%;
        }
        90% {
                top: 30%;
                left: 40%;
        }
        100% {
                top: 10%;
                left: 60%;
        }
}`

export const jsAnim = keyframes`{
        0% {
                top: 40%;
                left: 80%;
        }
        10% {
                top: 20%;
                left: 60%;
        }
        20% {
                top :10%;
                left: 30%;
        }
        30% {
                top: 50%;
                left: 30%;
        }
        40% {
                top: 70%;
                left: 50%;
        }
        50% {
                top: 60%;
                left: 80%;
        }
        60% {
                top: 70%;
                left: 50%;
        }
        70% {
                top: 50%;
                left: 30%;
        }
        80% {
                top: 10%;
                left: 30%;
        }
        90% {
                top: 20%;
                left: 60%;
        }
        100% {
                top: 40%;
                left: 80%;
        }
}`

export const linuxAnim = keyframes`{
        0% {
                top: 50%;
                left: 70%;
        }
        10% {
                top: 70%;
                left: 90%;
        }
        20% {
                top :90%;
                left: 70%;
        }
        30% {
                top: 50%;
                left: 70%;
        }
        40% {
                top: 40%;
                left: 40%;
        }
        50% {
                top: 20%;
                left: 20%;
        }
        60% {
                top: 40%;
                left: 40%;
        }
        70% {
                top: 50%;
                left: 70%;
        }
        80% {
                top: 90%;
                left: 70%;
        }
        90% {
                top: 70%;
                left: 90%;
        }
        100% {
                top: 50%;
                left: 70%;
        }
}`

export const nodejsAnim = keyframes`{
        0% {
                top: 40%;
                left: 10%;
        }
        10% {
                top: 60%;
                left: 30%;
        }
        20% {
                top :70%;
                left: 60%;
        }
        30% {
                top: 90%;
                left: 80%;
        }
        40% {
                top: 50%;
                left: 80%;
        }
        50% {
                top: 30%;
                left: 60%;
        }
        60% {
                top: 50%;
                left: 80%;
        }
        70% {
                top: 90%;
                left: 80%;
        }
        80% {
                top: 70%;
                left: 60%;
        }
        90% {
                top: 60%;
                left: 30%;
        }
        100% {
                top: 40%;
                left: 10%;
        }
}`

export const reduxAnim = keyframes`{
        0% {
                top: 20%;
                left: 80%;
        }
        10% {
                top: 10%;
                left: 50%;
        }
        20% {
                top :30%;
                left: 70%;
        }
        30% {
                top: 40%;
                left: 40%;
        }
        40% {
                top: 50%;
                left: 80%;
        }
        50% {
                top: 80%;
                left: 70%;
        }
        60% {
                top: 50%;
                left: 80%;
        }
        70% {
                top: 40%;
                left: 40%;
        }
        80% {
                top: 30%;
                left: 70%;
        }
        90% {
                top: 10%;
                left: 50%;
        }
        100% {
                top: 20%;
                left: 80%;
        }
}`

export const shopifyAnim = keyframes`{
        0% {
                top: 30%;
                left: 90%;
        }
        10% {
                top: 10%;
                left: 70%;
        }
        20% {
                top :50%;
                left: 70%;
        }
        30% {
                top: 70%;
                left: 50%;
        }
        40% {
                top: 60%;
                left: 20%;
        }
        50% {
                top: 40%;
                left: 40%;
        }
        60% {
                top: 60%;
                left: 20%;
        }
        70% {
                top: 70%;
                left: 50%;
        }
        80% {
                top: 50%;
                left: 70%;
        }
        90% {
                top: 10%;
                left: 70%;
        }
        100% {
                top: 30%;
                left: 90%;
        }
}`

export const wooAnim = keyframes`{
        0% {
                top: 50%;
                left: 50%;
        }
        10% {
                top: 30%;
                left: 30%;
        }
        20% {
                top :30%;
                left: 70%;
        }
        30% {
                top: 50%;
                left: 90%;
        }
        40% {
                top: 90%;
                left: 90%;
        }
        50% {
                top: 60%;
                left: 80%;
        }
        60% {
                top: 90%;
                left: 90%;
        }
        70% {
                top: 50%;
                left: 90%;
        }
        80% {
                top: 30%;
                left: 70%;
        }
        90% {
                top: 30%;
                left: 30%;
        }
        100% {
                top: 50%;
                left: 50%;
        }
}`

export const wordpressAnim = keyframes`{
        0% {
                top: 30%;
                left: 30%;
        }
        10% {
                top: 10%;
                left: 10%;
        }
        20% {
                top :10%;
                left: 50%;
        }
        30% {
                top: 30%;
                left: 70%;
        }
        40% {
                top: 60%;
                left: 60%;
        }
        50% {
                top: 40%;
                left: 40%;
        }
        60% {
                top: 60%;
                left: 60%;
        }
        70% {
                top: 30%;
                left: 70%;
        }
        80% {
                top: 10%;
                left: 50%;
        }
        90% {
                top: 10%;
                left: 10%;
        }
        100% {
                top: 30%;
                left: 30%;
        }
}`

export const reactAnim = keyframes`{
        0% {
                top: 60%;
                left: 10%;
        }
        10% {
                top: 80%;
                left: 30%;
        }
        20% {
                top :90%;
                left: 60%;
        }
        30% {
                top: 50%;
                left: 60%;
        }
        40% {
                top: 30%;
                left: 40%;
        }
        50% {
                top: 10%;
                left: 60%;
        }
        60% {
                top: 30%;
                left: 40%;
        }
        70% {
                top: 50%;
                left: 60%;
        }
        80% {
                top: 90%;
                left: 60%;
        }
        90% {
                top: 80%;
                left: 30%;
        }
        100% {
                top: 60%;
                left: 10%;
        }
}`