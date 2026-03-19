export default function Certificados() {

  const calcularProgresso = (inicio, fim) => {
    const hoje = new Date()
    const dataInicio = new Date(inicio)
    const dataFim = new Date(fim)

    const total = dataFim - dataInicio
    const atual = hoje - dataInicio

    if (total <= 0) return 0

    let progresso = (atual / total) * 100

    if (progresso < 0) progresso = 0
    if (progresso > 100) progresso = 100

    return Math.floor(progresso)
  }

  const certificados = [
    {
      nome: "Bacharelado em Engenharia de Software",
      instituicao: "Uninter",
      inicio: "2024-02-02",
      fim: "2027-12-15",
      tipo: "andamento"
    },
    {
      nome: "Técnico de Informática",
      instituicao: "Etec de Mauá",
      inicio: "2025-01-01",
      fim: "2026-06-30",
      tipo: "andamento"
    },
    {
      nome: "Banco de Dados para WEB",
      instituicao: "SENAC SP",
      inicio: "2026-01-10",
      fim: "2026-06-15",
      tipo: "andamento"
    },
    {
      nome: "Programação com IA Generativa",
      instituicao: "Senai Ipiranga",
      status: "Concluído (2025)",
      link: "/img/Certificado_Programacao ia.pdf",
      tipo: "concluido"
    },
    {
      nome: "Fundamentos de Python",
      instituicao: "Senai Ipiranga",
      status: "Concluído (2025)",
      link: "/img/Certificado_Fundamentos do Python.pdf",
      tipo: "concluido"
    },
    {
      nome: "Técnico em Administração",
      instituicao: "Etec Professora Maria Cristina Medeiros",
      status: "Concluído (2023)",
      link: "/img/CERTIFICADO-DE-ADMIN.pdf",
      tipo: "concluido"
    }
  ]

  return (
    <section className="min-h-screen pt-32 px-6 text-white">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Certificados & Cursos
        </h1>

        <p className="text-textMedium text-center mb-12">
          Minha evolução ao longo do tempo 🚀
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {certificados.map((cert, index) => {
            const progresso =
              cert.tipo === "andamento"
                ? calcularProgresso(cert.inicio, cert.fim)
                : null

            return (
              <div
                key={index}
                className="bg-[#1e293b] p-6 rounded-xl border border-borderCustom 
                hover:scale-105 hover:shadow-[0_0_25px_rgba(138,43,226,0.4)]
                transition duration-300 flex flex-col justify-between"
              >

                <div>
                  <h3 className="text-xl font-bold text-purpleAccent mb-2">
                    {cert.nome}
                  </h3>

                  <p className="text-blueAccent mb-2">
                    {cert.instituicao}
                  </p>

                  {cert.tipo === "andamento" ? (
                    <p className="text-textMedium mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Em andamento • {progresso}%
                    </p>
                  ) : (
                    <p className="text-textMedium mb-4">
                      {cert.status}
                    </p>
                  )}
                </div>

                {/* PROGRESSO */}
                {cert.tipo === "andamento" && (
                  <div className="w-full bg-[#0f172a] rounded-full h-5 overflow-hidden mb-4">
                    <div
                      className="h-full bg-purpleAccent text-center text-sm font-bold text-white transition-all duration-700"
                      style={{ width: `${progresso}%` }}
                    >
                      {progresso}%
                    </div>
                  </div>
                )}

                {/* BOTÃO */}
                {cert.tipo === "concluido" && (
                  <a
                    href={cert.link}
                    target="_blank"
                    className="mt-auto text-center px-4 py-2 rounded-lg 
                    bg-blueAccent text-white font-semibold
                    hover:shadow-[0_0_20px_#4682b4]
                    transition"
                  >
                    Ver Certificado
                  </a>
                )}

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}