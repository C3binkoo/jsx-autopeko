import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, StyledImage } from '../../globalStyles';
import { 
    Heading, InfoColumn, ImageColumn, InfoRow, InfoSec, SubTitle, TopLine, 
    LinkMain, Img 
} from './InfoSection.element';

const InfoSection = ({id, lightBG, imgStart, lightTopLine, topLine, lightText, 
                    headLine, lightTextDesc, description, primary, buttonLabel,
                    img, alt}) => {
    return (
        <InfoSec lightBG={lightBG} id={id}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                        <LinkMain to='offers' smooth={true} offset={-50} duration={250}>
                            <Button big fontBig primary={primary}>{buttonLabel}</Button>
                        </LinkMain>
                    </InfoColumn>
                    <ImageColumn>
                        <StyledImage src={img} alt={alt} />
                    </ImageColumn>
                </InfoRow>
            </Container>
        </InfoSec>  
   );
 };

 export default InfoSection;
