import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate() // ADICIONADO: Para podermos mudar de página via código

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkClass = (path) =>
    `relative group ${
      location.pathname === path
        ? "text-purpleAccent"
        : "text-textLight hover:text-blueAccent"
    }`

  // A FUNÇÃO MÁGICA QUE RESOLVE O PROBLEMA
  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      // Se estiver em outra página (ex: Certificados), volta para Home primeiro
      navigate("/")
      // Dá um tempinho (300ms) para a Home carregar, e depois rola para baixo
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
      }, 300)
    } else {
      // Se já estiver na Home, só rola suavemente para baixo
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-[#1e293b]/90 backdrop-blur-lg shadow-lg border-b border-borderCustom"
          : "bg-transparent"
      }`}>

      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* LOGO */}
        <Link
          to="/"
          className="text-3xl font-bold text-purpleAccent hover:scale-105 transition"
        >
          Portfólio
        </Link>

        {/* LINKS */}
        <div className="flex gap-8 text-xl">

          <Link to="/" className={linkClass("/")}>
            Início
            <span className="absolute left-0 -bottom-1 w-0 h-[3px] 
              bg-purpleAccent transition-all duration-300 
              group-hover:w-full"></span>
          </Link>

          <Link to="/certificados" className={linkClass("/certificados")}>
            Certificados
            <span className="absolute left-0 -bottom-1 w-0 h-[3px] 
              bg-blueAccent transition-all duration-300 
              group-hover:w-full"></span>
          </Link>

          {/* TROCAMOS A TAG <A> POR UM BUTTON COM ONCLICK */}
          <button
            onClick={() => scrollToSection("contato")}
            className="relative group text-textLight"
          >
            Contato
            <span className="absolute left-0 -bottom-1 w-0 h-[3px] 
              bg-purpleAccent transition-all duration-300 
              group-hover:w-full"></span>
          </button>

        </div>
      </div>
    </nav>
  )
}