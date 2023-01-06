import React from 'react'
import HeroSection from '../components/HeroSection'
import '../App.css'
import Footer from '../components/Footer';
import Subscription from '../components/Subscription';
import { useUserAuth } from '../contexts/AuthContext'

const Home = () => {
  return (
    <>
      <HeroSection />
      <Subscription />
      <Footer />
    </>
  )
}

export default Home