import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Features from './components/Features.jsx'
import Community from './components/Community.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import FAQ from './components/FAQ.jsx'
import DownloadCTA from './components/DownloadCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <Community />
      <HowItWorks />
      <FAQ />
      <DownloadCTA />
      <Footer />
    </>
  )
}
