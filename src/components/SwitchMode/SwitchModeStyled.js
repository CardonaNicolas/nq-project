import styled from 'styled-components';

const SwitchModeStyled = styled.section` 
    position: fixed;
    width: 30%;
    z-index: 100;
    bottom: 1em;
    left: 35%;
    display: flex;
    align-items: stretch;
    background-color: #282828;
    text-align: center;
    
    .active {
        background-color: #02cbc7;
        color: #000;
    }

    div {
        padding: 1em;
        width: 50%;
        color: #fff;
    }
`

export default SwitchModeStyled;