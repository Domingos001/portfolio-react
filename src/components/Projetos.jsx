import { motion } from "framer-motion"

export default function Projetos() {
  return (
    <motion.section
      id="projetos"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="py-28"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12 text-center text-textMedium">
          Meus Projetos
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* PROJETO 1 */}
          <div className="bg-secondary border border-borderCustom p-6 rounded-xl 
                          transform transition duration-300 
                          hover:-translate-y-3 hover:rotate-1 hover:shadow-2xl">

            <h3 className="text-xl font-bold text-purpleAccent mb-3">
              Project AXII
            </h3>

            <p className="text-textMedium mb-4">
              Solução tecnológica para gerenciamento de recursos escolares,
              tornando processos mais organizados e eficientes.
            </p>

            <a
              href="https://project-axii.github.io/Project-axii-site/"
              target="_blank"
              className="bg-purpleAccent px-4 py-2 rounded 
                         shadow-[0_0_20px_rgba(138,43,226,0.6)]
                         hover:shadow-[0_0_35px_rgba(138,43,226,1)]
                         transition"
            >
              Ver Projeto
            </a>

          </div>

          {/* PROJETO 2 */}
          <div className="bg-secondary border border-borderCustom p-6 rounded-xl 
                          transform transition duration-300 
                          hover:-translate-y-3 hover:-rotate-1 hover:shadow-2xl">

            <h3 className="text-xl font-bold text-purpleAccent mb-3">
              Bubble Beam
            </h3>

            <p className="text-textMedium mb-4">
              Jogo 2D desenvolvido em Python com Pygame, com sistema de ranking
              persistente utilizando SQLite.
            </p>

            <a
              href="https://github.com/Domingos001/Jogo-Uninter"
              target="_blank"
              className="bg-blueAccent px-4 py-2 rounded 
                         shadow-[0_0_20px_rgba(70,130,180,0.6)]
                         hover:shadow-[0_0_35px_rgba(70,130,180,1)]
                         transition"
            >
              GitHub
            </a>

          </div>

        </div>

      </div>
    </motion.section>
  )
}