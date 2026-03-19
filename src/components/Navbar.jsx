import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled 
        ? "bg-[#1e293b]/90 backdrop-blur-lg shadow-lg border-b border-borderCustom"
        : "bg-transparent"}`}>

      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* LOGO */}
        <a 
          href="/" 
          className="text-3xl font-bold text-purpleAccent
                    hover:scale-105 transition"
        >
          Portfólio
        </a>

        {/* LINKS */}
        <div className="flex gap-8 text-xl">

          <a 
            href="/" 
            className="relative group text-textLight"
          >
            Início
            <span className="absolute left-0 -bottom-1 w-0 h-[3px] 
              bg-purpleAccent transition-all duration-300 
              group-hover:w-full"></span>
          </a>

          <a 
            href="/certificados" 
            className="relative group text-textLight"
          >
            Certificados
            <span className="absolute left-0 -bottom-1 w-0 h-[3px] 
              bg-blueAccent transition-all duration-300 
              group-hover:w-full"></span>
          </a>

          <a 
            href="#contato" 
            className="relative group text-textLight"
          >
            Contato
            <span className="absolute left-0 -bottom-1 w-0 h-[3px] 
              bg-purpleAccent transition-all duration-300 
              group-hover:w-full"></span>
          </a>

        </div>

      </div>
    </nav>
  )
}