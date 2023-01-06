import React from 'react'
import { useNavigate } from 'react-router-dom'
import Video from '../../assets/video.mp4'
import { Button } from '../../globalStyles'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from './HeroElements'
const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>EXPETRA</HeroH1>
        <HeroP>Web3 budgeting app with Game-Fi elements. <br />Track your finances and earn crypto!</HeroP>
        <HeroBtnWrapper>
          <Button big primary onClick={()=> navigate("/signin")}>get started</Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection

