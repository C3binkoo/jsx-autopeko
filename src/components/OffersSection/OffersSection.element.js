import styled from 'styled-components';

export const Section = styled.div`
    background: rgb(238,238,238);
    background: linear-gradient(90deg, rgba(238,238,238,1) 0%, rgba(255,255,255,1) 50%, rgba(236,236,236,1) 100%);
    font-size: 1.2rem;
    top: 0;
    border-bottom: 1px solid #b6b6b6;
    overflow: hidden;
    height: auto;
`;

export const Heading = styled.h1`
    margin-bottom: 15px;
    font-size: 30px;
    line-height: 1.1;
    color: black;  /* Changed to white for dark background */
    padding-top: 75px;
    padding-bottom: 50px;
    text-align: center;

    @media screen and (max-width: 900px) {
        font-size: 36px;
    }
`;

export const CardWrapper = styled.div`
    display: grid;
    justify-content:center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    column-gap: 25px;
    row-gap: 50px;
    padding-bottom: 160px;
    text-align: center;

    @media screen and (max-width: 1100px) {
        grid-template-columns: 2fr;
        display: flex;
        grid-template-rows: auto;
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: 2fr;
        display: flex;
        grid-template-rows: auto;
    }
`;

export const Card = styled.div`
    width: 450px;
    max-width: 350px;
     background: rgb(238,238,238);
    background: linear-gradient(90deg, rgba(238,238,238,1) 0%, rgba(255,255,255,1) 50%, rgba(236,236,236,1) 100%);
    color: #fff;
    border: 1px solid gray; /* Updated border color */
    border-radius: 10px;  /* Increased border-radius */
    margin: 0px auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Added shadow for depth */
`;

export const CardImage = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0 0;  /* Added border radius for the image */
    object-fit: fit;  /* Ensure the image fits nicely */
`;

export const TextWrapper = styled.div`
    padding: 30px 30px 50px 30px;
    
`;

export const CardTitle = styled.p`
    font-size: 28px;
    color: black; /* Ensures the title text is white */
    margin-bottom: 15px;
`;

export const CardDesc = styled.p`
    color: black;  /* Light grey for description text */
    font-size: 18px;
    line-height: 1.5;
    word-spacing: 3px;
    margin: 30px 0;
    text-align: center;
`;
