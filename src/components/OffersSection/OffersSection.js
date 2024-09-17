import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyles';
import {
    Card,
    CardDesc,
    CardImage,
    CardTitle,
    CardWrapper,
    Heading,
    Section,
    TextWrapper
} from './OffersSection.element';
import logo from '../../images/background.png';

const OffersSection = () => {
    return (
        <>
        <Section>
            <Container id="offers">
                <Heading>
                    Služby
                </Heading>
                <CardWrapper>
                    <Card>
                        <CardImage src={logo} alt="Car Repair" />
                        <TextWrapper>
                            <CardTitle>
                                Pneuservis
                            </CardTitle>
                            <CardDesc>
                                Popis pôjde tu.
                            </CardDesc>
                            <Link to='/contact'>
                                <Button fullWidth primary="primary">
                                    Zkontaktovať
                                </Button>
                            </Link>
                        </TextWrapper>
                    </Card>
                    <Card>
                        <CardImage src={logo} alt="Car Detailing" />
                        <TextWrapper>
                            <CardTitle>
                                Výmena Oleja v Motore
                            </CardTitle>
                            <CardDesc>
                            Popis pôjde tu.
                            </CardDesc>
                            <Link to='/contact'>
                                <Button fullWidth primary="primary">
                                    Zkontaktovať
                                </Button>
                            </Link>
                        </TextWrapper>
                    </Card>
                    <Card>
                        <CardImage src={logo} alt="Tire Service" />
                        <TextWrapper>
                            <CardTitle>
                                Výmena Bŕzd
                            </CardTitle>
                            <CardDesc>
                            Popis pôjde tu. 
                            </CardDesc>
                            <Link to='/contact'>
                                <Button fullWidth primary="primary">
                                Zkontaktovať
                                </Button>
                            </Link>
                        </TextWrapper>
                    </Card>
                    <Card>
                        <CardImage src={logo} alt="Car Repair" />
                        <TextWrapper>
                            <CardTitle>
                                Príprava pred STK
                            </CardTitle>
                            <CardDesc>
                                Popis pôjde tu.
                            </CardDesc>
                            <Link to='/contact'>
                                <Button fullWidth primary="primary">
                                    Zkontaktovať 
                                </Button>
                            </Link>
                        </TextWrapper>
                    </Card>
                    <Card>
                        <CardImage src={logo} alt="Car Repair" />
                        <TextWrapper>
                            <CardTitle>
                                Prezúvanie pneumatik
                            </CardTitle>
                            <CardDesc>
                                Popis pôjde tu.
                            </CardDesc>
                            <Link to='/contact'>
                                <Button fullWidth primary="primary">
                                    Zkontaktovať 
                                </Button>
                            </Link>
                        </TextWrapper>
                    </Card>
                    <Card>
                        <CardImage src={logo} alt="Car Repair" />
                        <TextWrapper>
                            <CardTitle>
                                Vyvaženie Pneumatik
                            </CardTitle>
                            <CardDesc>
                                Popis pôjde tu.
                            </CardDesc>
                            <Link to='/contact'>
                                <Button fullWidth primary="primary">
                                    Zkontaktovať 
                                </Button>
                            </Link>
                        </TextWrapper>
                    </Card>
                    <Card>
                        <CardImage src={logo} alt="Car Repair" />
                        <TextWrapper>
                            <CardTitle>
                                Opravy podvozku
                            </CardTitle>
                            <CardDesc>
                                Popis pôjde tu.
                            </CardDesc>
                            <Link to='/contact'>
                                <Button fullWidth primary="primary">
                                    Zkontaktovať 
                                </Button>
                            </Link>
                        </TextWrapper>
                    </Card>
                    <Card>
                        <CardImage src={logo} alt="Car Repair" />
                        <TextWrapper>
                            <CardTitle>
                                Diagnostika Vozidiel
                            </CardTitle>
                            <CardDesc>
                                Popis pôjde tu.
                            </CardDesc>
                            <Link to='/contact'>
                                <Button fullWidth primary="primary">
                                    Zkontaktovať 
                                </Button>
                            </Link>
                        </TextWrapper>
                    </Card>
                    <Card>
                        <CardImage src={logo} alt="Car Repair" />
                        <TextWrapper>
                            <CardTitle>
                                Predaj pneumatík a dielov
                            </CardTitle>
                            <CardDesc>
                                Popis pôjde tu.
                            </CardDesc>
                            <Link to='/contact'>
                                <Button fullWidth primary="primary">
                                    Zkontaktovať 
                                </Button>
                            </Link>
                        </TextWrapper>
                    </Card>
                </CardWrapper>
            </Container>
            </Section>
        </>
    )
}

export default OffersSection;
