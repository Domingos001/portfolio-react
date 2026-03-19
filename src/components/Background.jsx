import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"

export default function Background() {
  const particlesInit = async (engine) => {
    await loadSlim(engine)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed top-0 left-0 w-full h-full z-0"
      options={{
        fullScreen: { enable: false },

        background: {
          color: "transparent"
        },

        fpsLimit: 60,

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },
          modes: {
            grab: {
              distance: 160,
              links: {
                opacity: 0.5
              }
            },
            push: {
              quantity: 5
            }
          }
        },

        particles: {
          number: {
            value: 65,
            density: {
              enable: true,
              area: 800
            }
          },

          color: {
            value: ["#8a2be2", "#4682b4"]
          },

          links: {
            enable: true,
            distance: 130,
            color: "#ffffff",
            opacity: 0.25,
            width: 1
          },

          move: {
            enable: true,
            speed: 2,
            random: true,
            outModes: {
              default: "out"
            }
          },

          size: {
            value: { min: 1, max: 3 }
          },

          opacity: {
            value: 0.5
          }
        },

        detectRetina: true
      }}
    />
  )
}