import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom" // Importante para o scroll funcionar

export default function Hero() {
  const navigate = useNavigate()
  const location = useLocation()

  const texts = [
    "Desenvolvedor em formação",
    "Engenheiro de Software",
    "Análise e Desenvolvimento"
  ]

  const [textIndex, setTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  //lógica de digitação
  useEffect(() => {
    const currentText = texts[textIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1))
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1))
        if (displayText === "") {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? 40 : 80)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex])

  // FUNÇÃO DE SCROLL
  const scrollToProjetos = () => {
    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })
      }, 300)
    } else {
      document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="flex flex-col md:flex-row items-center gap-16 w-full">
        
        {/* FOTO E BORDAS ANIMADAS */}
        <div className="relative flex-shrink-0">
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-purpleAccent via-blueAccent to-purpleAccent p-[3px] animate-spin-slow">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0f172a] animate-spin-reverse">
              <img
                src="/perfil/perfil1.jpeg"
                alt="Pedro Henrique Domingos"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* TEXTO */}
        <div className="text-center md:text-left">
          <p className="text-purpleAccent text-base md:text-lg mb-2">
            Engenheiro de Software • 2026
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Pedro Henrique <br /> Domingos
          </h1>

          <p className="text-xl md:text-2xl text-textMedium mb-8 h-[30px]">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>

          <div className="flex gap-6 justify-center md:justify-start">
            
            {/* BOTÃO DE CV  */}
            <a
              href="/curriculo/Pedro CV DEV.pdf"
              download
              className="px-8 py-4 rounded-xl font-semibold text-lg bg-blueAccent text-white shadow-[0_0_20px_#4682b4] hover:shadow-[0_0_35px_#4682b4] transition duration-300"
            >
              Baixar CV
            </a>

            {/* BOTÃO DE PROJETOS  */}
            <button
              onClick={scrollToProjetos}
              className="px-8 py-4 rounded-xl font-semibold text-lg bg-purpleAccent text-white shadow-[0_0_20px_#8a2be2] hover:shadow-[0_0_35px_#8a2be2] transition duration-300"
            >
              Ver Projetos
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}