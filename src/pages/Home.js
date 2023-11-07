import React,{lazy} from 'react'
const Hero = lazy(()=> import('../components/Hero'))
const About = lazy(()=> import('../components/About'))
const Home = () => {
  return (
    <div>
        <Hero />
        <About/>
    </div>
  )
}

export default Home