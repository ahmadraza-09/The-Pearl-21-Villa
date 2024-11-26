import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import TopBanner from '../components/top-banner';
import Footer from '../components/footer';
import Payment from '../components/payment';
import SocialMediaFixed from '../components/socialmedia-fixed';

const PaymentPage = () => {
    return (
        <>
            <Helmet>
                <title>Payment - The Pearl 21 Villa in Udaipur</title>
                <meta name="description" content="Make secure payments for your stay at The Pearl 21 Villa, Udaipur. We offer multiple payment options for a seamless booking experience in the City of Lakes." />
                <meta name="keywords" content="payment page, The Pearl 21 Villa payment, Udaipur hotel payment, secure payment options Udaipur, online booking payment, luxury villa payment, book villa Udaipur online, payment gateway for villa booking" />
                <link rel="canonical" href="https://thepearl21villa.com/payment" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Payment - The Pearl 21 Villa in Udaipur",
                        "telephone": "+91-9971834141",
                        "url": "https://thepearl21villa.com/payment"
                    })}
                </script>
            </Helmet>



            <TopBanner />
            <Navbar />
            <Payment />
            <Footer />
            <SocialMediaFixed />
        </>
    );
}

export default PaymentPage;
