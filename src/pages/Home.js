import React,{lazy} from 'react'
const Hero = lazy(()=> import('../components/Hero'))
const About = lazy(()=> import('../components/About'))
const Tokenomics = lazy(()=>import('../components/Tokenomics'))
const RoadMap = lazy(()=> import('../components/RoadMap'))
const Gallery = lazy(()=>import('../components/Gallery'))
const Community = lazy(()=> import('../components/Community'))
const HowToBuy = lazy(()=> import('../components/HowToBuy'))
const FooterNav = lazy(()=>import('../components/FooterNav'))
const OggyDescription = lazy(()=>import('../components/OggyDescription'))
const Home = () => {
  return (
    <div>
        <Hero />
        <OggyDescription />
        <About/>
        <Tokenomics />
        <HowToBuy />   
            <RoadMap />
        <FooterNav />
    </div>
  )
}

export default Home