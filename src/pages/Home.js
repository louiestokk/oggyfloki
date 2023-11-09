import React,{lazy} from 'react'
const Hero = lazy(()=> import('../components/Hero'))
const About = lazy(()=> import('../components/About'))
const Tokenomics = lazy(()=>import('../components/Tokenomics'))
const RoadMap = lazy(()=> import('../components/RoadMap'))
const Gallery = lazy(()=>import('../components/Gallery'))
const Community = lazy(()=> import('../components/Community'))
const HowToBuy = lazy(()=> import('../components/HowToBuy'))
const FooterNav = lazy(()=>import('../components/FooterNav'))
const Home = () => {
  return (
    <div>
        <Hero />
        <About/>
        <Tokenomics />
        {/* <RoadMap /> */}
        <HowToBuy />
        <Community />
        <Gallery />
        <FooterNav />
    </div>
  )
}

export default Home