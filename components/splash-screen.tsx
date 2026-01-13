"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const languages = [
  { text: "Hello, I'm Jefferson Barnizo", lang: "English" },
  { text: "Kumusta, ako si Jefferson Barnizo", lang: "Filipino" },
  { text: "Hola, soy Jefferson Barnizo", lang: "Español" },
  { text: "Bonjour, je suis Jefferson Barnizo", lang: "Français" },
  { text: "Hallo, ich bin Jefferson Barnizo", lang: "Deutsch" },
  { text: "Ciao, sono Jefferson Barnizo", lang: "Italiano" },
  { text: "Olá, eu sou Jefferson Barnizo", lang: "Português" },
  { text: "Привет, я Джефферсон Барнизо", lang: "Русский" },
  { text: "こんにちは、ジェファーソン・バルニゾです", lang: "日本語" },
  { text: "안녕하세요, 저는 제퍼슨 바르니조입니다", lang: "한국어" },
  { text: "你好，我是 Jefferson Barnizo", lang: "中文" },
  { text: "مرحبا، أنا جيفرسون بارنيزو", lang: "العربية" },
]


export function SplashScreen() {
  const [currentLang, setCurrentLang] = useState(0)
  const [showSplash, setShowSplash] = useState(true)
  const [isExiting, setIsExiting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const langInterval = setInterval(() => {
      setCurrentLang((prev) => (prev + 1) % languages.length)
    }, 200)

    const exitTimer = setTimeout(() => {
      setIsExiting(true)
      setTimeout(() => {
        setShowSplash(false)
        router.push("/")
      }, 800)
    }, 7000)

    return () => {
      clearInterval(langInterval)
      clearTimeout(exitTimer)
    }
  }, [router])

  if (!showSplash) {
    return null
  }

  return (
    <div
      className={`fixed inset-0 bg-background flex items-center justify-center z-50 transition-all duration-1000 overflow-hidden ${
        isExiting ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center w-full max-w-md px-6">
        {/* Profile Image with enhanced animation */}
        <div className="mb-12 flex justify-center animate-splash-fade-in">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-accent/20 to-primary/20 blur-xl animate-pulse"></div>
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-accent/30 animate-float shadow-2xl">
              <img src="/pfp.jpg" alt="Jefferson Barnizo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Multilingual Greeting with smooth transitions */}
        <div className="mb-8 h-32 flex flex-col items-center justify-center">
          <p className="text-accent/60 text-xs font-semibold tracking-widest mb-4 uppercase transition-all duration-200 h-4">
            {languages[currentLang].lang}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground transition-all duration-200 ease-in-out leading-tight">
            {languages[currentLang].text}
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-foreground/60 text-base font-light tracking-wide mb-12 animate-slideInLeft">
          Full Stack Developer & IT Student
        </p>

        {/* Language indicators with enhanced styling */}
        <div className="flex justify-center gap-3 mb-8">
          {languages.map((_, index) => (
            <div
              key={index}
              className={`rounded-full transition-all duration-200 ${
                index === currentLang ? "w-8 h-2 bg-accent shadow-lg shadow-accent/40" : "w-2 h-2 bg-foreground/25"
              }`}
            />
          ))}
        </div>

        {/* Loading progress indicator */}
        <div className="w-full h-1 bg-foreground/10 rounded-full overflow-hidden">
          <div className="h-full bg-linear-to-r from-primary via-accent to-primary animate-[slideInLeft_7s_ease-in-out_forwards]"></div>
        </div>

        {/* Loading message */}
        <p className="text-foreground/40 text-xs mt-6 animate-pulse">Preparing your portfolio...</p>
      </div>
    </div>
  )
}
