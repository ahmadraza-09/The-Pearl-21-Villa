import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import ExploreRoomsSection from '../components/explore-rooms-section'
import SocialMediaFixed from '../components/socialmedia-fixed.jsx'

const RoomsPage = () => {
    return (
        <>
            <Helmet>
    <title>Rooms - The Pearl 21 Villa, Udaipur</title>
    <meta name="description" content="Explore the luxurious rooms at The Pearl 21 Villa, Udaipur. Choose from a variety of premium room options, each designed to offer ultimate comfort, exclusive amenities, and stunning views of Udaipur." />
<meta name="keywords" content="rooms at The Pearl 21 Villa, Udaipur luxury rooms, villa rooms Udaipur, luxury stays in Udaipur, best rooms in Udaipur, premium accommodations Udaipur, villa room options, Udaipur villa rooms, luxury resort rooms" />
    <link rel="canonical" href="https://thepearl21villa.com/rooms" />

    {/* JSON-LD structured data */}
    <script type="application/ld+json">
        {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "hotel",
            "name": "Room Options",
            "telephone": "+91-9971834141",
            "url": "https://thepearl21villa.com/rooms",
        })}
    </script>
</Helmet>


            {<TopBanner />}
            {<Navbar />}
            {<ExploreRoomsSection />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default RoomsPage
