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

const OffersSection = () => {
    return (
        <>
        <Section>
            <Container id="offers">
                <Heading>
                    Naša Ponuka
                </Heading>
                <CardWrapper>
                    <Card>
                        <CardImage src={require('../../images/background.png').default} alt="Car Repair" />
                        <TextWrapper>
                            <CardTitle>
                                Oprava Vozidla
                            </CardTitle>
                            <CardDesc>
                                Text pôjde tu. Zatiaľ som tu nič nevypisoval.
                            </CardDesc>
                            <Link to='/contact'>
                                <Button fullWidth primary="primary">
                                    Zkontaktovať ohladom opravy.
                                </Button>
                            </Link>
                        </TextWrapper>
                    </Card>
                    <Card>
                        <CardImage src={require('../../images/background.png').default} alt="Car Detailing" />
                        <TextWrapper>
                            <CardTitle>
                                Detailing Vozidla
                            </CardTitle>
                            <CardDesc>
                            Text pôjde tu. Zatiaľ som tu nič nevypisoval.
                            </CardDesc>
                            <Link to='/contact'>
                                <Button fullWidth primary="primary">
                                    Zkontaktovať ohladom detailingu.
                                </Button>
                            </Link>
                        </TextWrapper>
                    </Card>
                    <Card>
                        <CardImage src={require('../../images/background.png').default} alt="Tire Service" />
                        <TextWrapper>
                            <CardTitle>
                                Výmena Pneumatík
                            </CardTitle>
                            <CardDesc>
                            Text pôjde tu. Zatiaľ som tu nič nevypisoval.
                            </CardDesc>
                            <Link to='/contact'>
                                <Button fullWidth primary="primary">
                                Zkontaktovať ohľadom výmeny pneumatík.
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
