import React from 'react';
import { MapContainer, MapHeading, MapIframe } from './MapSection.element';

const MapSection = () => {
    return (
        <MapContainer id="map">
            <MapHeading>Kde nás nájdete?</MapHeading>
            <MapIframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2596.0379503522813!2d19.47966343175759!3d49.40818799853328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715c89337f1da87%3A0x223d32fbd3273490!2sN%C3%A1mestie%20Antona%20Bernol%C3%A1ka%20375%2F1%2C%20029%2001%20N%C3%A1mestovo!5e0!3m2!1ssk!2ssk!4v1725981774953!5m2!1ssk!2ssk"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </MapContainer>
    );
};

export default MapSection;
