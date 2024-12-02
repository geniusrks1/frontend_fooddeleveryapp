import React from 'react'
import OffersSection from '../../components/rdetails/js/OffersSection'
import Header from '../../components/rdetails/js/Header'
import HeroSection from '../../components/rdetails/js/HeroSection'
import MenuSection from '../../components/rdetails/js/MenuSection'
import MapSection from '../../components/rdetails/js/MapSection'
import Footer from '../../components/rdetails/js/Footer'
import OfferBanner from '../../components/OfferBanner/OfferBanner'
import OffersList from '../../components/rdetails/js/OfferList'


const Restaurant = () => {
  return (
    <div>
      <OfferBanner/>
      <Header/>
      <HeroSection />
      <OffersSection />
      <OffersList/>
      {/* <MenuSection /> */}
      <MapSection />
      <Footer />

    </div>
  )
}

export default Restaurant