import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Banner from '../components/home/Banner'
import DiscoverSection from '../components/home/DiscoverSection'
import ProductSection from '../components/home/ProductSection'
import TestimonialSection from '../components/home/TestimonialSection'
import Newsletter from '../components/home/Newsletter'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <DiscoverSection />
      <ProductSection />
      {/* <TestimonialSection /> */}
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home
