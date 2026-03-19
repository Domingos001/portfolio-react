import { motion } from "framer-motion"

export default function Sobre() {
  return (
    <motion.section
      id="sobre"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="py-28"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12 text-center text-textLight">
          Sobre Mim
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div className="text-textMedium text-lg space-y-4">
            <p>
              Olá! Sou Pedro, estudante de Engenharia de Software e Técnico em T.I,
              apaixonado por tecnologia e desenvolvimento.
            </p>

            <p>
              Busco minha primeira oportunidade na área para aplicar meus
              conhecimentos, aprender rapidamente e evoluir profissionalmente.
            </p>

            <p>
              Tenho foco em desenvolvimento, banco de dados e soluções modernas,
              sempre buscando criar experiências eficientes e bem estruturadas.
            </p>
          </div>

          {/* HABILIDADES */}
          <div className="bg-secondary border border-borderCustom p-6 rounded-xl">

            <h3 className="text-xl font-bold text-purpleAccent mb-4">
              Habilidades
            </h3>

            <div className="flex flex-wrap gap-3">

              {[
                "Python",
                "SQL",
                "JavaScript",
                "C",
                "Git",
                "HTML",
                "CSS",
                "VBA"
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-primary border border-borderCustom px-3 py-1 rounded-lg text-sm 
                            hover:bg-purpleAccent hover:text-white transition"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>
    </motion.section>
  )
}