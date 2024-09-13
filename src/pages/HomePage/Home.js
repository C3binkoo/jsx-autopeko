import React from 'react';
import { aboutObject, aboutUsObject } from './Data'; 
import { OffersSection, InfoSection, Navbar, MapSection } from '../../components';

const Home = () => {
    return (
        <>
            <Navbar />
            <InfoSection {...aboutObject} />
            <InfoSection {...aboutUsObject} />
            <OffersSection />
            <MapSection />
        </>
    );
};

export default Home;
