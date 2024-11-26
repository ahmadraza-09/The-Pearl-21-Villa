import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed'
import SuperDeluxeRoomWithBalcony from '../components/super-deluxe-room-with-balcony'

const SuperDeluxeRoomWithBalconyPage = () => {

    return (
        <>
            <Helmet>
                <title>Super Deluxe Room with Balcony - The Pearl 21 Villa, Udaipur</title>
                <meta name="description" content="Experience luxury and comfort in our Super Deluxe Room with Balcony at The Pearl 21 Villa, Udaipur. Enjoy stunning views and premium amenities for an unforgettable stay in the City of Lakes." />
                <meta name="keywords" content="Super Deluxe Room with Balcony, The Pearl 21 Villa Udaipur, luxury room Udaipur, deluxe villa with balcony, best rooms in Udaipur, premium accommodations, Udaipur luxury rooms, luxury stays in Udaipur, balcony view Udaipur villa" />
                <link rel="canonical" href="https://thepearl21villa.com/super-deluxe-room-with-balcony" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HotelRoom",
                        "name": "Super Deluxe Room with Balcony",
                        "telephone": "+91-9971834141",
                        "url": "https://thepearl21villa.com/super-deluxe-room-with-balcony",
                        "roomType": "Super Deluxe Room with Balcony",
                        "hotel": {
                            "@type": "Hotel",
                            "name": "The Pearl 21 Villa",
                            "telephone": "+91-9971834141",
                            "url": "https://thepearl21villa.com"
                        }
                    })}
                </script>
            </Helmet>


            {<TopBanner />}
            {<Navbar />}
            {<SuperDeluxeRoomWithBalcony />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default SuperDeluxeRoomWithBalconyPage
