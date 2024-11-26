import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TopBanner from '../components/top-banner';
import SocialMediaFixed from '../components/socialmedia-fixed';
import HeroSection from '../components/hero-section';
import IntroductionSection from '../components/introduction-section';
import Services from '../components/services';
import ExploreRoomsSection from '../components/explore-rooms-section';


const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>The Pearl 21 Villa - Luxury Stay in Udaipur</title>
                <meta name="description" content="Discover The Pearl 21 Villa in Udaipur, offering a perfect blend of luxury, comfort, and elegance. Experience an unforgettable stay at our exquisite villas in the City of Lakes." />
                <meta name="keywords" content="The Pearl 21 Villa, luxury villas in Udaipur, premium villa stay Udaipur, private villas Udaipur, elegant accommodations Udaipur, boutique villa experience, vacation villas Udaipur, luxury retreat, The Pearl Villa Udaipur" />
                <link rel="canonical" href="https://thepearl21villa.com/" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "The Pearl 21 Villa - Luxury Stay in Udaipur",
                        "telephone": "+91-9971834141",
                        "url": "https://thepearl21villa.com"
                    })}
                </script>
            </Helmet>
            <TopBanner />
            <Navbar />
            <HeroSection/>
            <IntroductionSection/>
            <ExploreRoomsSection/>
            <Services/>
            <Footer />
            <SocialMediaFixed />
        </>
    );
};

export default HomePage;
