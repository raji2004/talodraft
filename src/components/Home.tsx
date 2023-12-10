import React from "react"
import Header from "./Header"
import Hero from "./Hero"
import WhyTalo from "./WhyTalo"
import Features from "./Features"
import WhyEmployers from "./WhyEmployers"
import JoinTalo from "./JoinTalo"
import Footer from "./Footer"

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <WhyTalo />
        <Features />
        <WhyEmployers />
        <JoinTalo />
      </main>
      <Footer />
    </div>
  )
}

export default Home
