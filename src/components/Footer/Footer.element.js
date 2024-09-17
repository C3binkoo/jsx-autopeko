import { FaCar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Link as SLink } from 'react-scroll';

export const FooterContainer = styled.div`
    background: rgb(238,238,238);
    background: linear-gradient(90deg, rgba(238,238,238,1) 0%, rgba(255,255,255,1) 50%, rgba(236,236,236,1) 100%);
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #b6b6b6;
`;

export const FooterSubscription = styled.section`
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 24px;
    width: 100%;
`;

export const FooterSubHeading = styled.p`
    font-family: 'SUSE';
    font-size: 24px;
    margin-bottom: 10px;
`;

export const FooterSubText = styled.small`
    font-size: 16px;
    color: black;
    margin-bottom: 15px;
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    width: 80%;
    max-width: 500px;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`;

export const FormInput = styled.input`
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 15px;
    margin-right: 10px;
    outline: none;
    border: 1px solid #fff;
    flex-grow: 1;

    &::placeholder {
        color: black;
    }

    @media screen and (max-width: 900px) {
        width: 100%;
        margin: 0 0 16px 0;
    }
`;

export const FooterLinkContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 900px) {
        padding-top: 32px;
    }   
`;

export const FooterLinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`;

export const FooterLinkItem = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
    text-align: center;
    width: 250px;

    @media screen and (max-width: 900px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h2`
    margin-bottom: 16px;
`;

export const FooterLink = styled(SLink)`
    color: black;
    text-decoration: none;
    margin-bottom: 0.5rem;
    cursor: pointer;
    font-weight: 400;
`;

export const SocialMediaContainer = styled.section`
    width: 100%;
`;

export const SocialMediaWrap = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 32px auto 0 auto;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`;

export const BrandLogo = styled(Link)`
    color: black;
    display: flex;
    align-items: center;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    margin-bottom: 16px;

    &:hover {
        transition: all 0.1s ease-out;
        color: black;
    }
`;

export const WebsiteIcon = styled(FaCar)`
    margin-right: 10px;
`;

export const WebsiteRights = styled.small`
    color: #fff;
    font-size: 16px;

    @media screen and (max-width: 900px) {
        margin-bottom: 16px;
    }
`;

export const SocialMediaIcon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialMediaLink = styled.a`
    color: #fff;
    font-size: 24px;

    &:hover {
        transition: all 0.1s ease-out;
        color: #4b59f7;
    }
`;
