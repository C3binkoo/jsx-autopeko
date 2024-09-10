import React from 'react'
import { FaFacebook, FaInstagram  } from 'react-icons/fa'
import { Button } from '../../globalStyles'
import { BrandLogo, FooterContainer, FooterLink, FooterLinkContainer, FooterLinkItem, 
    FooterLinkTitle, FooterLinkWrapper, FooterSubHeading, FooterSubscription, FooterSubText, 
    Form, FormInput, SocialMediaContainer, SocialMediaIcon, SocialMediaLink, SocialMediaWrap, 
    WebsiteIcon, WebsiteRights } from './Footer.element'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>Informácie o Webe</FooterLinkTitle>
                            <FooterLink to='about'>
                                O Nás
                            </FooterLink>
                            <FooterLink to='map'>
                                Mapa
                            </FooterLink>
                            <FooterLink to='offers'>
                                Ponuka
                            </FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>Kontaktné Informácie</FooterLinkTitle>
                            <FooterLink to='/'>
                                Odošlite nám Email
                            </FooterLink>
                            <FooterLink to='/'>
                                Tel. Číslo: +421 911 450 496
                            </FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>Sociálne Siete</FooterLinkTitle>
                            <FooterLink to='/'>
                                Instagram
                            </FooterLink>
                            <FooterLink to='/'>
                                Facebook
                            </FooterLink>
                        </FooterLinkItem>
                    </FooterLinkWrapper>
                </FooterLinkContainer>
                <SocialMediaContainer>
                    <SocialMediaWrap>
                        <BrandLogo to='/'>
                            <WebsiteIcon />
                            AutoPeko
                        </BrandLogo>
                        <WebsiteRights>Vytvoril &nbsp;&copy; L.M</WebsiteRights>
                        
                    </SocialMediaWrap>
                </SocialMediaContainer>
            </FooterContainer>
        </>
    )
}

export default Footer
