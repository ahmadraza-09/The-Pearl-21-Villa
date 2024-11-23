import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TopBanner from '../components/top-banner';
import SocialMediaFixed from '../components/socialmedia-fixed';
import About from '../components/about';
import IntroductionSection from '../components/introduction-section';


const AboutPage = () => {
    return (
        <>
            {/* <Helmet>
                <title>About Us - Vanasthali Jungle Resort in Jim Corbett National Park</title>
                <meta name="description" content="Learn more about Vanasthali Jungle Resort in Jim Corbett National Park. Discover our commitment to eco-friendly tourism, luxurious accommodations, wildlife experiences, and exceptional hospitality." />
                <meta name="keywords" content="About Vanasthali Jungle Resort, Jim Corbett eco-friendly resort, luxury resort Jim Corbett, wildlife tourism, jungle resort about us, Ramnagar resorts, Corbett National Park resort information, Vanasthali Resort mission, eco-tourism in Corbett, luxury stay in nature" />
                <link rel="canonical" href="https://vanasthalicorbett.com/about" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "About Us - Vanasthali Jungle Resort in Jim Corbett National Park",
                        "telephone": "+91 8510934101",
                        "url": "https://vanasthalicorbett.com/about"
                    })}
                </script>
            </Helmet> */}

            <TopBanner />
            <Navbar />
            {/* <About/> */}
                    <IntroductionSection/>
            <Footer />
            <SocialMediaFixed />
        </>
    );
};

export default AboutPage;
