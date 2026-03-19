import { useState } from 'react';
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contato() {
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setResult("Enviando...");

    const formData = new FormData(event.target);
    
    formData.append("access_key", "579285fe-4a03-482a-b9cc-e8b741b39c18");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Mensagem enviada com sucesso! ");
        event.target.reset(); // Limpa o formulário
      } else {
        console.log("Erro", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("Erro ao conectar com o servidor. Tente novamente.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.section
      id="contato"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="py-28 min-h-screen scroll-mt-24 flex items-center"
    >
      <div className="max-w-4xl mx-auto px-6 w-full">
        
        {/* REDES SOCIAIS */}
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://www.linkedin.com/in/pedro-henrique-domingos-386ab0237/" target="_blank" className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#1e293b] border border-borderCustom hover:border-purpleAccent shadow-[0_0_15px_rgba(59,130,246,0.3)] transition duration-300">
            <FaLinkedin className="text-blueAccent text-2xl" />
            <span className="text-textLight font-medium">LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/pedro_domingozz/" target="_blank" className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#1e293b] border border-borderCustom hover:border-purpleAccent shadow-[0_0_15px_rgba(138,43,226,0.3)] transition duration-300">
            <FaInstagram className="text-purpleAccent text-2xl" />
            <span className="text-textLight font-medium">Instagram</span>
          </a>
        </div>

        <h2 className="text-4xl font-bold text-center text-purpleAccent mb-12">Vamos Conversar?</h2>

        <div className="bg-[#1e293b] border border-borderCustom p-8 rounded-2xl shadow-xl">
          <p className="text-textMedium text-center mb-8">
            Estou buscando minha primeira oportunidade na área de tecnologia.
          </p>

          <form onSubmit={onSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              required
              placeholder="Seu nome"
              className="w-full p-4 rounded-lg bg-[#0f172a] border border-borderCustom focus:outline-none focus:border-purpleAccent text-white"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Seu email"
              className="w-full p-4 rounded-lg bg-[#0f172a] border border-borderCustom focus:outline-none focus:border-purpleAccent text-white"
            />

            <textarea
              name="message"
              required
              rows="5"
              placeholder="Sua mensagem..."
              className="w-full p-4 rounded-lg bg-[#0f172a] border border-borderCustom focus:outline-none focus:border-purpleAccent text-white"
            ></textarea>

            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-4 rounded-lg font-semibold text-white transition duration-300 
                ${isSending ? 'bg-gray-600 cursor-not-allowed' : 'bg-purpleAccent shadow-[0_0_20px_rgba(138,43,226,0.6)] hover:shadow-[0_0_40px_rgba(138,43,226,1)]'}`}
            >
              {isSending ? "Enviando..." : "Enviar Mensagem 🚀"}
            </button>

            {/* Mensagem de Feedback */}
            {result && (
              <p className={`text-center mt-4 font-medium ${result.includes("sucesso") ? "text-green-400" : "text-red-400"}`}>
                {result}
              </p>
            )}
          </form>

          <div className="mt-10 text-center text-textMedium space-y-2">
            <p>Email: Pedrod07122005@gmail.com</p>
            <p>Ribeirão Pires - SP</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}