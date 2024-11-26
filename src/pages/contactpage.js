import React from 'react';
import { Helmet } from 'react-helmet-async';
import TopBanner from '../components/top-banner';
import Navbar from '../components/navbar';
import ContactUs from '../components/contact-us';
import Footer from '../components/footer';
import SocialMediaFixed from '../components/socialmedia-fixed';

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us - The Pearl 21 Villa in Udaipur</title>
                <meta name="description" content="Get in touch with The Pearl 21 Villa in Udaipur. For inquiries, bookings, or more information, reach out to us via phone, email, or our contact form." />
                <meta name="keywords" content="contact The Pearl 21 Villa, Udaipur hotel contact, contact information Udaipur, villa bookings Udaipur, The Pearl 21 Villa inquiries, contact form Udaipur, luxury villa contact, The Pearl 21 Villa phone, email for villa bookings" />
                <link rel="canonical" href="https://thepearl21villa.com/contact" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Contact Us - The Pearl 21 Villa in Udaipur",
                        "telephone": "+91-9971834141",
                        "url": "https://thepearl21villa.com/contact"
                    })}
                </script>
            </Helmet>

            <TopBanner />
            <Navbar />
            <ContactUs />
            <Footer />
            <SocialMediaFixed />
        </>
    );
}

export default ContactPage;
