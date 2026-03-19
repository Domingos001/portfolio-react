import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

export default function ParticlesBackground() {

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#0f172a"
        },

        particles: {
          number: {
            value: 60
          },

          size: {
            value: 2
          },

          move: {
            speed: 1
          },

          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.2
          }
        }
      }}
    />
  )
}