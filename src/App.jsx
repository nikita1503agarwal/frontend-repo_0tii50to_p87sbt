import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Security from './components/Security'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-50">
      {/* Background accents */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_-10%,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_90%_10%,rgba(14,165,233,0.12),transparent_60%)]" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Security />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
