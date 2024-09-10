import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import { 
    Nav, 
    NavContainer, 
    NavLogo, 
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavItemBtn,
    NavBtnLink } from './Navbar.element';
import logo from '../../images/logo512.png';  // Import the logo image

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [buttonLabelSm, setButtonLabelSm] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 900) {
            setButtonLabelSm(false);
            setClick(false);
        } else {
            setButtonLabelSm(true);
        }
    }

    useEffect(() => {
        showButton();

        return () => setClick(false);
    },[])

    window.addEventListener('resize', showButton);

    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to='/' onClick={handleClick}>
                        <img src={logo} alt='AutoPeko.sk' style={{ height: '75px', width: 'auto' }} />
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu click={click}>
                        <NavItem>
                            <NavLink to='home' onClick={handleClick} smooth={true} offset={-80} duration={500}>
                                Domov
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='about' onClick={handleClick} smooth={true} offset={-80} duration={500}>
                                O Nás
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='offers' onClick={handleClick} smooth={true} offset={-80} duration={500}>
                                Ponuka
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='course' onClick={handleClick} smooth={true} offset={-80} duration={500}>
                                Kontakt
                            </NavLink>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar;
