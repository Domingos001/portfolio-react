import { useEffect, useState } from "react"

export default function TypingText() {

  const texts = [
    "Estudante de Engenharia de Software",
    "Desenvolvedor em formação",
    "Python • SQL • JavaScript"
  ]

  const [textIndex, setTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {

    if (charIndex < texts[textIndex].length) {

      const timeout = setTimeout(() => {

        setDisplayedText(prev => prev + texts[textIndex][charIndex])
        setCharIndex(prev => prev + 1)

      }, 80)

      return () => clearTimeout(timeout)

    } else {

      setTimeout(() => {

        setDisplayedText("")
        setCharIndex(0)
        setTextIndex((textIndex + 1) % texts.length)

      }, 2000)

    }

  }, [charIndex, textIndex])

  return (
    <span className="text-blue-400 font-semibold">
      {displayedText}
    </span>
  )
}