import styled from 'styled-components';

export const MapContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 50px 0;
    background: #161921; /* Background color for the section */
    color: #fff;
    border-bottom: 1px solid #262a33;
`;

export const MapHeading = styled.h2`
    font-size: 36px;
    margin-bottom: 20px;
`;

export const MapIframe = styled.iframe`
    width: 80%;
    max-width: 800px;
    height: 450px;
    border: 0;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
