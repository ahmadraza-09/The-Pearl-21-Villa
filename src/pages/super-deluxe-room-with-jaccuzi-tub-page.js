import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import SuperDeluxeRoomWithJaccuziTub from '../components/super-deluxe-room-with-jaccuzi-tub'
import SocialMediaFixed from '../components/socialmedia-fixed'


const SuperDeluxeRoomWithJaccuziTubPage = () => {

    return (
        <>
            <Helmet>
                <title>Super Deluxe Room with Jacuzzi Tub - The Pearl 21 Villa, Udaipur</title>
                <meta name="description" content="Relax and unwind in the Super Deluxe Room with Jacuzzi Tub at The Pearl 21 Villa, Udaipur. Enjoy a luxurious stay with private amenities, including a jacuzzi, for a truly indulgent experience." />
                <meta name="keywords" content="Super Deluxe Room with Jacuzzi Tub, The Pearl 21 Villa Udaipur, luxury room with jacuzzi, jacuzzi villa Udaipur, exclusive rooms with jacuzzi, Udaipur luxury rooms, premium accommodations with jacuzzi, luxury spa experience Udaipur" />
                <link rel="canonical" href="https://thepearl21villa.com/super-deluxe-room-with-jacuzzi-tub" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HotelRoom",
                        "name": "Super Deluxe Room with Jacuzzi Tub",
                        "telephone": "+91-9971834141",
                        "url": "https://thepearl21villa.com/super-deluxe-room-with-jacuzzi-tub",
                        "roomType": "Super Deluxe Room with Jacuzzi Tub",
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
            {<SuperDeluxeRoomWithJaccuziTub />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default SuperDeluxeRoomWithJaccuziTubPage
