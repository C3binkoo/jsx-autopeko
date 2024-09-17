import React from 'react';
import { aboutObject, aboutUsObject } from './Data'; 
import { OffersSection, InfoSection, Navbar, MapSection } from '../../components';

const Home = () => {
    return (
        <>
            <Navbar />
            <InfoSection {...aboutObject} />
            <OffersSection />
            <MapSection />
        </>
    );
};

export default Home;
