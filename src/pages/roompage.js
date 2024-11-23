import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TopBanner from '../components/top-banner';
import SocialMediaFixed from '../components/socialmedia-fixed';
import RoomComp from '../components/room-comp';

const RoomPage = () => {
    return (
        <>
            {/* <Helmet>
                <title>Rooms at Vanasthali Jungle Resort - Luxury Accommodations</title>
                <meta name="description" content="Explore our luxurious rooms at Vanasthali Jungle Resort in Jim Corbett National Park. Experience a perfect blend of comfort and nature with well-appointed accommodations designed for relaxation and adventure." />
                <meta name="keywords" content="Vanasthali Jungle Resort rooms, Jim Corbett rooms, luxury rooms in Corbett, jungle resort accommodations, eco-friendly stays, comfortable rooms Corbett, family rooms, premium rooms, Jim Corbett resort stay, nature retreat, Ramnagar luxury rooms" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://vanasthalicorbett.com/rooms" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Rooms at Vanasthali Jungle Resort - Luxury Accommodations",
                        "telephone": "+91 8510934101",
                        "url": "https://vanasthalicorbett.com/rooms"
                    })}
                </script>
            </Helmet> */}

            <TopBanner />
            <Navbar />
            <RoomComp />
            
            <Footer />
            <SocialMediaFixed />
        </>
    );
};

export default RoomPage;
