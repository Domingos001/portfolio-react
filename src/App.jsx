import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Sobre from "./components/Sobre"
import Projetos from "./components/Projetos"
import Contato from "./components/Contato"
import Footer from "./components/Footer"
import Background from "./components/Background"

import Certificados from "./pages/Certificados"

function AnalyticsTracker() {
  const location = useLocation()

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-KWX7286594", {
        page_path: location.pathname,
      })
    }
  }, [location])

  return null
}

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

function App() {
  return (
    <BrowserRouter>

      <AnalyticsTracker />

      <div className="min-h-screen text-white relative bg-[#0f172a] overflow-hidden">

        {/* FUNDO */}
        <Background />

        {/* DEGRADÊ */}
        <div className="fixed inset-0 z-0 pointer-events-none
          bg-[radial-gradient(circle_at_top_left,rgba(138,43,226,0.3),transparent_40%),
              radial-gradient(circle_at_bottom_right,rgba(70,130,180,0.3),transparent_40%)]">
        </div>

        {/* CONTEÚDO */}
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

    </BrowserRouter>
  )
}

export default App