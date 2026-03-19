import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa" // ADICIONADO: Ícones do menu

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // ADICIONADO: Estado do menu mobile
  
  const location = useLocation()
  const navigate = useNavigate()

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

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false) // Fecha o menu mobile ao clicar no contato
    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
      }, 300)
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Função para fechar o menu ao clicar em links normais
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        scrolled || isMobileMenuOpen
          ? "bg-[#1e293b]/95 backdrop-blur-lg shadow-lg border-b border-borderCustom"
          : "bg-transparent"
      }`}>

      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center relative">

        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="text-3xl font-bold text-purpleAccent hover:scale-105 transition"
        >
          Portfólio
        </Link>

        {/* BOTÃO APARECE SÓ NO MOBILE */}
        <button 
          className="md:hidden text-2xl text-textLight hover:text-purpleAccent transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* LINKS DESKTOP  */}
        <div className="hidden md:flex gap-8 text-xl">
          <Link to="/" className={linkClass("/")}>
            Início
            <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-purpleAccent transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link to="/certificados" className={linkClass("/certificados")}>
            Certificados
            <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-blueAccent transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <button onClick={() => scrollToSection("contato")} className="relative group text-textLight hover:text-purpleAccent transition">
            Contato
            <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-purpleAccent transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>

      </div>

      {/* MENU MOBILE (DROPDOWN) */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#1e293b]/95 backdrop-blur-lg border-b border-borderCustom transition-all duration-300 overflow-hidden flex flex-col items-center ${isMobileMenuOpen ? "max-h-64 py-6 opacity-100" : "max-h-0 opacity-0"}`}>
        
        <Link to="/" className={`mb-4 text-xl ${linkClass("/")}`} onClick={closeMobileMenu}>
          Início
        </Link>
        
        <Link to="/certificados" className={`mb-4 text-xl ${linkClass("/certificados")}`} onClick={closeMobileMenu}>
          Certificados
        </Link>
        
        <button onClick={() => scrollToSection("contato")} className="text-xl text-textLight hover:text-purpleAccent transition">
          Contato
        </button>

      </div>
    </nav>
  )
}