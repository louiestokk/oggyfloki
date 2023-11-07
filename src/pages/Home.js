import React,{lazy} from 'react'

const HeaderNav = lazy(()=> import('../components/HeaderNav'))
const Hero = lazy(()=> import('../components/Hero'))
const About = lazy(()=> import('../components/About'))
const Home = () => {
  return (
    <div>
        <HeaderNav />
        <Hero />
        <About/>
    </div>
  )
}

export default Home