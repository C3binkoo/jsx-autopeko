import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from '../../globalStyles';
import { 
    Nav, 
    NavContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavBtnLink 
} from './NavbarM.element';
import logo from '../../images/logo512.png';  

const NavbarM = () => {
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
                        <img src={logo} alt='AutoPeko.sk' style={{ height: '150px', width: 'auto'}} />
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu click={click}>
                        <NavItem>
                            <NavBtnLink to='/' onClick={handleClick}>
                                DOMOV
                            </NavBtnLink>
                        </NavItem>
                        <NavItem>
                            <NavBtnLink to='error' onClick={handleClick}>
                                KONTAKT
                            </NavBtnLink>
                        </NavItem>
                        <NavItem>
                            <NavBtnLink to='error' onClick={handleClick}>
                                GALÉRIA
                            </NavBtnLink>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default NavbarM;
