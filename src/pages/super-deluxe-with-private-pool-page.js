import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import SuperDeluxeRoomWithPrivatePool from '../components/super-deluxe-room-with-private-pool'
import SocialMediaFixed from '../components/socialmedia-fixed'

const SuperDeluxeRoomWithPrivatePoolPage = () => {
    return (
        <>
            <Helmet>
                <title>Super Deluxe Room with Private Pool - The Pearl 21 Villa, Udaipur</title>
                <meta name="description" content="Indulge in luxury with the Super Deluxe Room featuring a Private Pool at The Pearl 21 Villa, Udaipur. Enjoy exclusive privacy, stunning views, and top-notch amenities for a memorable stay." />
                <meta name="keywords" content="Super Deluxe Room with Private Pool, The Pearl 21 Villa Udaipur, private pool villa, luxury room with pool, exclusive stays in Udaipur, Udaipur luxury rooms, villa with private pool, premium accommodations Udaipur" />
                <link rel="canonical" href="https://thepearl21villa.com/super-deluxe-room-with-private-pool" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HotelRoom",
                        "name": "Super Deluxe Room with Private Pool",
                        "telephone": "+91-9971834141",
                        "url": "https://thepearl21villa.com/super-deluxe-room-with-private-pool",
                        "roomType": "Super Deluxe Room with Private Pool",
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
            {<SuperDeluxeRoomWithPrivatePool />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default SuperDeluxeRoomWithPrivatePoolPage
