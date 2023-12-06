import React,{lazy} from 'react'
const Hero = lazy(()=> import('../components/Hero'))
const About = lazy(()=> import('../components/About'))
const Tokenomics = lazy(()=>import('../components/Tokenomics'))
const RoadMap = lazy(()=> import('../components/RoadMap'))
const HowToBuy = lazy(()=> import('../components/HowToBuy'))
const FooterNav = lazy(()=>import('../components/FooterNav'))
const OggyDescription = lazy(()=>import('../components/OggyDescription'))
const OggyProfits = lazy(()=>import('../components/OggyProfits'))
const GameDevelope = lazy(()=> import('../components/GameDevelop'))
const OggyPres = lazy(()=> import('../components/VideoPresentation'))
const SocialIcons = lazy(()=> import('../components/SocialIcons'))
const Home = () => {
  return (
    <div>
        <Hero />
        <OggyDescription />
        <About/>
        <SocialIcons />
        <OggyProfits />
        <Tokenomics />
        <GameDevelope />
        <HowToBuy />   
            <OggyPres />
            <RoadMap />
        <FooterNav />
    </div>
  )
}

export default Home