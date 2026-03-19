import { HashRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Sobre from "./components/Sobre"
import Projetos from "./components/Projetos"
import Contato from "./components/Contato"
import Footer from "./components/Footer"
import Background from "./components/Background"

import Certificados from "./pages/Certificados"

//  TRACKING GOOGLE ANALYTICS
function AnalyticsTracker() {
  const location = useLocation()

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-KWX7286594", {
        page_path: location.pathname + location.hash,
      })
    }
  }, [location])

  return null
}

//  HOME
function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Projetos />
      <Contato />
    </>
  )
}

//  APP
function App() {
  return (
    <HashRouter>

      <AnalyticsTracker />

      <div className="min-h-screen text-white relative bg-[#0f172a] overflow-hidden">

        {/*  FUNDO ANIMADO */}
        <Background />

        {/*  DEGRADÊ */}
        <div className="fixed inset-0 -z-10 pointer-events-none
          bg-[radial-gradient(circle_at_top_left,rgba(138,43,226,0.35),transparent_45%),
              radial-gradient(circle_at_bottom_right,rgba(70,130,180,0.35),transparent_45%)]">
        </div>

        {/*  CONTEÚDO */}
        <div className="relative z-10">

          <Navbar />

          <main className="max-w-6xl mx-auto px-6 pt-28">

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/certificados" element={<Certificados />} />
            </Routes>

          </main>

          <Footer />

        </div>

      </div>

    </HashRouter>
  )
}

export default App