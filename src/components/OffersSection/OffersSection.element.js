import styled from 'styled-components';

export const Section = styled.div`
    background-color: #161921;
    font-size: 1.2rem;
    top: 0;
    border-bottom: 1px solid #262a33;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 42px;
    line-height: 1.1;
    color: #fff;  /* Changed to white for dark background */
    padding-top: 100px;
    padding-bottom: 50px;
    text-align: center;

    @media screen and (max-width: 900px) {
        font-size: 36px;
    }
`;

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    column-gap: 25px;
    row-gap: 50px;
    padding-bottom: 160px;
    text-align: center;

    @media screen and (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`;

export const Card = styled.div`
    width: 100%;
    max-width: 350px;
    background: #161921;  /* Updated background color */
    color: #fff;
    border: 1px solid gray; /* Updated border color */
    border-radius: 10px;  /* Increased border-radius */
    margin: 0px auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Added shadow for depth */
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
    color: #fff; /* Ensures the title text is white */
    margin-bottom: 15px;
`;

export const CardDesc = styled.p`
    color: #b0b0b0;  /* Light grey for description text */
    font-size: 18px;
    line-height: 1.5;
    word-spacing: 3px;
    margin: 30px 0;
    text-align: left;
`;
