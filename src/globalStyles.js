import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'SUSE';
        font-weight: 700;
        font-style: normal;
    }

    html, body {
        height: 100%;
        scroll-behavior: smooth;  /* Smooth scrolling */
    }

    #root {
        height: 100%;
    }
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 60px;
    padding-right: 60px;

    @media screen and (max-width: 900px) {
        padding-left: 30px;
        padding-right: 30px;
        height: 500px;
    }
`;

export const StyledImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 25px;
    -webkit-box-shadow: 0px 0px 34px -6px rgba(173,171,173,1);
-moz-box-shadow: 0px 0px 34px -6px rgba(173,171,173,1);
box-shadow: 0px 0px 34px -6px rgba(173,171,173,1);
    object-fit: cover;
    border: 1px solid silver;
    &:hover {
      border-bottom: 1px solid red;
      transition: all 50ms;
      transform: scale(1.05);
      -webkit-box-shadow: 0px 0px 34px -6px rgba(133,213,121,0.5);
     -moz-box-shadow: 0px 0px 34px -6px rgba(133,213,121,0.5);
     box-shadow: 0px 0px 34px -6px rgba(133,213,121,0.5);
    }
`;

export const Button = styled.button`
    border-radius: 10px;
    color: black;
    cursor: pointer;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    transition: all 250ms;
    border: 1px solid silver;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    -webkit-box-shadow: 0px 0px 34px -6px rgba(173,171,173,1);
-moz-box-shadow: 0px 0px 34px -6px rgba(173,171,173,1);
box-shadow: 0px 0px 34px -6px rgba(173,171,173,1);
    background: rgb(238,238,238);
    background: linear-gradient(90deg, rgba(238,238,238,1) 0%, rgba(255,255,255,1) 50%, rgba(236,236,236,1) 100%);
    font-size: ${({fontBig}) => (fontBig ? '19px' : '19px')};
    padding: ${({big}) => (big ? '10px 20px' : '10px 20px')};
    width: ${({fullWidth}) => (fullWidth ? '100%' : '')};
    
    &:hover {
        transform: scale(1.02);
        transition: all 0.1s ease-in;
        -webkit-box-shadow: 0px 0px 34px -6px rgba(173,171,173,1);
-moz-box-shadow: 0px 0px 34px -6px rgba(173,171,173,1);
box-shadow: 0px 0px 34px -6px rgba(173,171,173,1);
    }

    @media screen and (max-width: 900px) {
        width: 100%;
        font-size: ${({fontBig}) => (fontBig ? '18px' : '16px')};
        padding: ${({big}) => (big ? '12px 14px' : '10px 12px')};
    }
`;


export default GlobalStyle;
