import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TopBanner from '../components/top-banner';
import SocialMediaFixed from '../components/socialmedia-fixed';
import PlacesToVisit from '../components/places-to-visit';

const PlacesToVisitPage = () => {
    return (
        <>
            <Helmet>
                <title>Places to Visit Near The Pearl 21 Villa - Explore Udaipur's Best Attractions</title>
                <meta name="description" content="Discover the top attractions near The Pearl 21 Villa in Udaipur, including Udai Sagar Lake, Swaroop Sagar Lake, Sajjangarh Biological Park, Monsoon Palace, Badi Lake, Lake Pichola, Jagdish Temple, Fateh Sagar Lake, Doodh Talai Lake, City Palace, and Bagore Ki Haveli." />
                <meta name="keywords" content="places to visit near The Pearl 21 Villa, Udai Sagar Lake, Swaroop Sagar Lake, Sajjangarh Biological Park, Monsoon Palace, Badi Lake, Lake Pichola, Jagdish Temple, Fateh Sagar Lake, Doodh Talai Lake, City Palace, Bagore Ki Haveli, Udaipur attractions, City of Lakes sightseeing, tourist spots near The Pearl 21 Villa, Udaipur travel guide" />
                <link rel="canonical" href="https://thepearl21villa.com/places-to-visit" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Places to Visit Near The Pearl 21 Villa - Explore Udaipur's Best Attractions",
                        "telephone": "+91-9971834141",
                        "url": "https://thepearl21villa.com/places-to-visit"
                    })}
                </script>
            </Helmet>
            <TopBanner />
            <Navbar />
            <PlacesToVisit />
            <Footer />
            <SocialMediaFixed />
        </>
    );
};

export default PlacesToVisitPage;
