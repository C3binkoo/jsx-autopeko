import styled from 'styled-components';


export const MapContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100vh;  
     background: rgb(238,238,238);
    background: linear-gradient(90deg, rgba(238,238,238,1) 0%, rgba(255,255,255,1) 50%, rgba(236,236,236,1) 100%);
    color: black;
    border-bottom: 1px solid #b6b6b6;
    overflow: hidden;
`;

export const MapHeading = styled.h2`
    padding-top: 100px;
    font-size: 35px;
    margin-bottom: 20px;
`;

export const MapIframe = styled.iframe`
    padding-top: 40px;
    width: 80%;
    height: 200px;
    max-width: 800px;
    height: 600px;
    border: 0;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
