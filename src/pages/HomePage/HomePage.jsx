
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import DealsSection from '../../components/DealsSection/DealsSection';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';
import OfferBanner from '../../components/OfferBanner/OfferBanner';
import PopularRestaurants from '../../components/PopularRestaurants/PopularRestaurants';
import AboutUs from '../../components/AboutUs/AboutUs';
import Stats from '../../components/Stats/Stats';
import Aboutus from '../../components/AboutUs_/Aboutus';

const HomePage = () => {
  return (
    <div>
      <OfferBanner />
      <Header />
      <HeroSection />
      <DealsSection />
      <Categories />
      <PopularRestaurants />
      <Aboutus/>
      <AboutUs />
      <Stats />
      <Footer />
    </div>
  );
};

export default HomePage
