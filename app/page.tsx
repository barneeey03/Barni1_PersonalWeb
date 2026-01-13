"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SplashScreen } from "@/components/splash-screen"
import {
  Code2,
  Palette,
  Zap,
  Smartphone,
  ExternalLink,
  Linkedin,
  Mail,
  Github,
  Instagram,
  Facebook,
} from "lucide-react"

const languages = ["English", "Español", "日本語", "Français"]
const languages_text = [
  "Hello, I'm Jefferson Barnizo",
  "Hola, soy Jefferson Barnizo",
  "こんにちは、ジェファーソン・バルニゾです",
  "Bonjour, je suis Jefferson Barnizo",
]

const techStackWithIcons = [
  { name: "React.js", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
  { name: "Firebase", icon: "🔥" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Flutter", icon: "📱" },
]

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/jefferson-barnizo-976498366",
    color: "text-blue-400",
  },
  { name: "Gmail", icon: Mail, href: "mailto:barnizojefferson12@gmail.com", color: "text-red-400" },
  { name: "GitHub", icon: Github, href: "https://github.com/barneeey03", color: "text-gray-300" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/jbrnzzxc_/", color: "text-pink-400" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/jefferson.barnizo.1", color: "text-blue-500" },
]

export default function Home() {
  const [langIndex, setLangIndex] = useState(0)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setShowContent(true)
    const interval = setInterval(() => {
      setLangIndex((prev) => (prev + 1) % languages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      icon: Palette,
      title: "UI & UX Design",
      description: "Creating intuitive interfaces that users love to interact with",
    },
    {
      icon: Smartphone,
      title: "Web & Mobile Apps",
      description: "Building cross-platform applications with modern technologies",
    },
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "End-to-end solutions from frontend to backend infrastructure",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Ensuring fast, efficient, and scalable applications",
    },
  ]

  const projects = [
    {
      title: "Reina Pabili – Food Delivery",
      description: "Mobile and web-based pabili service with real-time tracking",
      tech: ["React.js", "Node.js", "Firebase"],
      image: "/food-delivery-app-screen.png",
    },
    {
      title: "Inventory Management System",
      description: "Enterprise-level inventory and purchasing platform",
      tech: ["React.js", "TypeScript", "Firestore"],
      image: "/inventory-management-dashboard.png",
    },
    {
      title: "GoBookIt",
      description: "Ticket booking platform with real-time seat management",
      tech: ["React.js", "Bootstrap", "Firestore"],
      image: "/movie-ticket-booking-interface.jpg",
    },
    {
      title: "Pet Care Application",
      description: "Complete pet care platform with e-commerce and bookings",
      tech: ["React.js", "Tailwind CSS", "Firebase"],
      image: "/pet-care-ecommerce-store.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <SplashScreen />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fadeInUp">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-accent/40 animate-float shadow-lg shadow-accent/20">
              <img src="/pfp.jpg" alt="Jefferson Barnizo" className="w-full h-full object-cover" />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-foreground">{languages_text[langIndex]}</h1>
          <p className="text-sm tracking-widest text-foreground/60 mb-8 uppercase">{languages[langIndex]}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <p className="text-lg text-foreground/80 font-light">
              Full Stack Developer • IT Student <br /> Crafting Digital Experiences
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link
              href="/projects"
              className="px-8 py-3 rounded-full font-semibold bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-105 border-2 border-primary"
            >
              Explore My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full font-semibold border-2 border-accent text-foreground hover:bg-accent/10 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="separator-line max-w-4xl mx-auto my-12"></div>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-foreground/70 text-lg font-light">A selection of my most impactful work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.slice(0, 4).map((project, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden glass-effect border border-accent/20 transition-all duration-300 animate-glow hover:-translate-y-2 relative hover:border-accent/50"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors text-foreground">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm mb-4 font-light">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-primary/20 text-foreground border border-primary/40 hover:border-primary/80 hover:bg-primary/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="px-8 py-3 rounded-full font-semibold bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 border-2 border-primary"
          >
            View All Projects <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Separator */}
      <div className="separator-line-secondary max-w-4xl mx-auto my-12"></div>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">What I Offer</h2>
          <p className="text-foreground/70 text-lg font-light">Comprehensive solutions tailored to your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-xl glass-effect border border-accent/20 transition-all duration-300 animate-glow hover:-translate-y-2 relative overflow-hidden hover:border-accent/50"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent/5 to-transparent"></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-primary/40">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-foreground/70 font-light text-base leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Separator */}
      <div className="separator-line max-w-4xl mx-auto my-12"></div>

      <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-foreground mb-6">Tech Stack & Expertise</h2>
          <p className="text-foreground/70 text-lg font-light leading-relaxed">
            My expertise spans a diverse range of technologies, enabling me to deliver comprehensive and cutting-edge
            solutions across various platforms.
          </p>
        </div>

        <div className="relative flex gap-8 overflow-hidden max-w-7xl mx-auto mb-8">
          <div className="flex gap-8 animate-scroll-loop">
            {[...techStackWithIcons, ...techStackWithIcons].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 py-6 rounded-full glass-effect border border-accent/20 whitespace-nowrap hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 flex items-center gap-4 group animate-glow-accent hover:scale-110 transform"
              >
                <span className="text-4xl group-hover:animate-icon-bounce inline-block">{tech.icon}</span>
                <span className="font-semibold text-foreground text-lg">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="separator-line-secondary max-w-4xl mx-auto my-12"></div>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Connect With Me</h2>
          <p className="text-foreground/70 text-lg font-light">Find me on social media and let's collaborate</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full flex items-center justify-center group border-2 border-accent/30 bg-primary/10 hover:border-accent hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/20"
                title={social.name}
              >
                <IconComponent className="w-7 h-7 text-foreground group-hover:text-accent transition-colors duration-300" />
              </a>
            )
          })}
        </div>
      </section>

      {/* Separator */}
      <div className="separator-line max-w-4xl mx-auto my-12"></div>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6 text-foreground">Let's Build Something Great</h2>
        <p className="text-xl text-foreground/70 mb-8 font-light leading-relaxed">
          I'm always excited to work on new projects. Reach out and let's create something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <a
            href="mailto:barnizojefferson12@gmail.com"
            className="text-lg font-semibold text-accent hover:text-accent/80 transition-colors"
          >
            barnizojefferson12@gmail.com
          </a>
          <a
            href="tel:+639623767913"
            className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            +63 962 376 7913
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
