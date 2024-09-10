import styled from 'styled-components';
import { Link as SLink } from 'react-scroll';
export const InfoSec = styled.div`
    color: #fff;
    padding: 160px 0px;
    background: ${({lightBG}) => (lightBG ? '#161921': '#161921')};
    border-bottom: 1px solid #262a33;
`;

export const InfoRow = styled.div`
    display: grid;
    row-gap: 100px;
    column-gap: 50px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: ${({imgStart}) => (imgStart ? "'ImageColumn InfoColumn'" : "'InfoColumn ImageColumn'")};
    
    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        grid-template-areas: ${({imgStart}) => (imgStart ? "'ImageColumn' 'InfoColumn'" : "'InfoColumn' 'ImageColumn'")};
    }
`;

export const InfoColumn = styled.div`
    grid-area: InfoColumn;
`;

export const TopLine = styled.div`
    color: ${({lightTopLine}) => (lightTopLine ? 'silver' : 'silver')};
    font-size: 26px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 42px;
    line-height: 1.1;
    color: ${({lightText}) => (lightText ? '#fff' : '#fff')};

    @media screen and (max-width: 900px) {
        font-size: 36px;
    }
`;

export const SubTitle = styled.p`
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({lightTextDesc}) => (lightTextDesc ? 'silver' : 'silver')};
`;

export const ImageColumn = styled.div`
    grid-area: ImageColumn;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.img`
    width: 95%;
    max-width: 500px;
    height: auto;
`;

export const LinkMain = styled(SLink)`
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    width: 100%;
    line-height: 80px;
    text-align: center;
    cursor: pointer;

    @media screen and (max-width: 900px) {   
        padding: 2rem;

        &:hover{
            color: #4b59f7;
            transition: all 0.3s ease;
        }
    }
`;