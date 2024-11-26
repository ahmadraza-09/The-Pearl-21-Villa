import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import TopBanner from '../components/top-banner';
import Footer from '../components/footer';
import OurGallery from '../components/our-gallery';
import SocialMediaFixed from '../components/socialmedia-fixed';

const GalleryPage = () => {
    return (
        <>
            <Helmet>
                <title>Gallery - The Pearl 21 Villa in Udaipur</title>
                <meta name="description" content="Explore the photo gallery of The Pearl 21 Villa in Udaipur. View stunning images of our luxurious accommodations, beautiful surroundings, and serene atmosphere in the City of Lakes." />
                <meta name="keywords" content="The Pearl 21 Villa gallery, villa photos Udaipur, luxury accommodations Udaipur, The Pearl 21 Villa images, Udaipur villa gallery, luxury stays Udaipur, City of Lakes villa pictures, The Pearl Villa Udaipur gallery" />
                <link rel="canonical" href="https://thepearl21villa.com/gallery" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Gallery - The Pearl 21 Villa in Udaipur<",
                        "telephone": "+91-9971834141",
                        "url": "https://thepearl21villa.com/gallery"
                    })}
                </script>
            </Helmet>



            <TopBanner />
            <Navbar />
            <OurGallery />
            <Footer />
            <SocialMediaFixed />
        </>
    );
}

export default GalleryPage;
