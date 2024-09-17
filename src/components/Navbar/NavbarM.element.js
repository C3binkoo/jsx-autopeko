import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as SLink } from 'react-scroll';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
     background: rgb(238,238,238);
    background: linear-gradient(90deg, rgba(238,238,238,1) 0%, rgba(255,255,255,1) 50%, rgba(236,236,236,1) 100%);
    font-size: 1.2rem;
    position: relative;
    top: 0;
    z-index: 10;
    padding: 10px;
    border-bottom: 1px solid #b6b6b6;
`;

export const NavContainer = styled(Container)`
    display: flex;
    flex-direction: column; /* Stack logo and items vertically */
    justify-content: center;
    align-items: center;
    height: auto;
`;

export const NavLogo = styled(Link)`
    margin-bottom: 10px; 
    display: flex;
    border-bottom: 1px solid gray;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 900px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 70%);
        font-size: 1.8rem;
        color: #fff;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        background: rgb(238,238,238);
        background: linear-gradient(90deg, rgba(238,238,238,1) 0%, rgba(255,255,255,1) 50%, rgba(236,236,236,1) 100%);
        width: 100%;
        height: calc(100vh - 80px);
        position: absolute;
        top: 80px;
        left: ${({ click }) => (click ? '0' : '-100%')};
        transition: all 0.5s ease;
    }
`;

export const NavItem = styled.li`
    height: 40px;
    width: 120;
    padding: 10px;
    font-size: 15px;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(238,238,238);
    border-radius: 5px;
    border-bottom: 1px solid silver;
    background: linear-gradient(90deg, rgba(238,238,238,1) 20%, rgba(255,255,255,1) 50%, rgba(236,236,236,1) 100%);
    &:hover {
        border-bottom: 1px solid black;
        transition: ease-out 0.3s;
    }

    :active {
       color: red;
    }

    @media screen and (max-width: 900px) {
        width: 100%;

        &:hover {
            border: none;
        }
    }
`;

export const NavLink = styled(SLink)`
    color: black;
    text-decoration: none;
    padding: 0.5rem 1rem;
    width: 100%;
    line-height: 80px;
    text-align: center;
    cursor: pointer;
    font-weight: 600;

    @media screen and (max-width: 900px) {   
        padding: 0rem;

        &:hover{
            color: black;
            transition: all 1s ease-in;
        }
    }
`;

export const NavBtnLink = styled(Link)`
    color: black;
    text-decoration: none;
    padding: 0.5rem 1rem;
    width: 100%;
    line-height: 80px;
    text-align: center;
    cursor: pointer;
    font-weight: 600;

    @media screen and (max-width: 900px) {   
        padding: 0rem;

        &:hover{
            color: black;
            transition: all 0.3s ease;
            transform: scale(1.05);
        }
        &:active{
            color: black;
        }
    }
`;