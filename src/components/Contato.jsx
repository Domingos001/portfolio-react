import { motion } from "framer-motion"
import { FaLinkedin, FaInstagram } from "react-icons/fa"

export default function Contato() {
  return (
    <motion.section
      id="contato"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="py-28"
    >
      <div className="max-w-4xl mx-auto px-6">
{/* REDES SOCIAIS */}
<div className="flex justify-center gap-6 mb-12">

  {/* LINKEDIN */}
  <a
    href="https://www.linkedin.com/in/pedro-henrique-domingos-386ab0237/"
    target="_blank"
    className="flex items-center gap-3 px-6 py-3 rounded-xl 
              bg-[#1e293b] border border-borderCustom
              hover:border-purpleAccent
              shadow-[0_0_15px_rgba(59,130,246,0.3)]
              hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]
              transition duration-300"
  >
    <FaLinkedin className="text-blueAccent text-2xl" />
    <span className="text-textLight font-medium">LinkedIn</span>
  </a>

  {/* INSTAGRAM */}
  <a
    href="https://www.instagram.com/pedro_domingozz/"
    target="_blank"
    className="flex items-center gap-3 px-6 py-3 rounded-xl 
              bg-[#1e293b] border border-borderCustom
              hover:border-purpleAccent
              shadow-[0_0_15px_rgba(138,43,226,0.3)]
              hover:shadow-[0_0_25px_rgba(138,43,226,0.8)]
              transition duration-300"
  >
    <FaInstagram className="text-purpleAccent text-2xl" />
    <span className="text-textLight font-medium">Instagram</span>
  </a>

</div>
        <h2 className="text-4xl font-bold text-center text-purpleAccent mb-12">
          Vamos Conversar?
        </h2>

        <div className="bg-[#1e293b] border border-borderCustom p-8 rounded-2xl shadow-xl">

          <p className="text-textMedium text-center mb-8">
            Estou buscando minha primeira oportunidade na área de tecnologia.
            Se quiser entrar em contato, me manda uma mensagem!
          </p>

          <form className="space-y-6">

            {/* NOME */}
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full p-4 rounded-lg bg-[#0f172a] border border-borderCustom 
                        focus:outline-none focus:border-purpleAccent 
                        text-white"
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Seu email"
              className="w-full p-4 rounded-lg bg-[#0f172a] border border-borderCustom 
                        focus:outline-none focus:border-purpleAccent 
                        text-white"
            />

            {/* MENSAGEM */}
            <textarea
              rows="5"
              placeholder="Sua mensagem..."
              className="w-full p-4 rounded-lg bg-[#0f172a] border border-borderCustom 
                        focus:outline-none focus:border-purpleAccent 
                        text-white"
            ></textarea>

            {/* BOTÃO */}
            <button
              type="submit"
              className="w-full bg-purpleAccent py-4 rounded-lg font-semibold
                        shadow-[0_0_20px_rgba(138,43,226,0.6)]
                        hover:shadow-[0_0_40px_rgba(138,43,226,1)]
                        transition duration-300"
            >
              Enviar Mensagem 🚀
            </button>

          </form>

          {/* CONTATO DIRETO */}
          <div className="mt-10 text-center text-textMedium space-y-2">
            <p>Email: Pedrod07122005@gmail.com</p>
            <p>Ribeirão Pires - SP</p>
          </div>

        </div>

      </div>
    </motion.section>
  )
}