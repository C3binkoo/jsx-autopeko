import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "SUSE", sans-serif;
        font-weight: 600;
    }

    html {
        width: 100%;
    }

    body {
        width: 100%;
        overflow-x: hidden;
        scroll-behavior: smooth;
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
    }
`;


export const StyledImage = styled.img`
    width: 100%;   /* Adjust width as needed */
    height: auto;   /* Keep aspect ratio */
    border-radius: 10px;  /* Optional: Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Add shadow */
    object-fit: cover; /* Ensure image covers its container */
    border: 2px solid #fff;
`;

export const Button = styled.button`
  border-radius: 10px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: "SUSE";
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 1px solid gray;

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  background: ${({primary}) => (primary ? '#161921' : '#161921')};
  font-size: ${({fontBig}) => (fontBig ? '22px' : '16px')};
  padding: ${({big}) => (big ? '10px 20px' : '10px 20px')};
  width: ${({fullWidth}) => (fullWidth ? '100%' : '')};
    

    &:hover {
        box-shadow: rgba(45, 89, 115,.35) 0 -25px 18px -14px inset,rgba(45, 89, 115,.25) 0 1px 2px,rgba(45, 89, 115,.25) 0 2px 4px,rgba(45, 89, 115,.25) 0 4px 8px,rgba(45, 89, 115,.25) 0 8px 16px,rgba(45, 89, 115,.25) 0 16px 32px;
        transform: scale(1.05) rotate(-0.5deg);
        transition: all 0.5s ease-out;
        color: silver;
        background: ${({primary}) => (primary ? '#161921' : '#161921')};
        font-weight: 600;
    }

    @media screen and (max-width: 900px) {
        width: 100%;
        font-size: ${({fontBig}) => (fontBig ? '18px' : '16px')};
        padding: ${({big}) => (big ? '12px 14px' : '10px 12px')};
    }
`;

export default GlobalStyle
