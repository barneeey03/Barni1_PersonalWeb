"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const certifications = [
  {
    title: "Fortinet Certified Fundamentals Cybersecurity",
    image: "/Fortinet.Cert.png",
  },
  {
    title: "Student SOC Program – Foundations Training",
    image: "/SOC-CERT.png",
  },
  {
    title: "Accenture Skills to Succeed (S2S) Academy",
    image: "/S2S-CERT.png",
  },
  {
    title: "Responsive Web Design – freeCodeCamp",
    image: "/barnizo-cert1.png",
  },
  {
    title: "JavaScript Algorithms and Data Structures – freeCodeCamp",
    image: "/barnizo-cert2.png",
  },
  {
    title: "Front End Development Libraries – freeCodeCamp",
    image: "/barnizo-cert3.png",
  },
]

const expertise = [
  {
    number: "01",
    title: "Design",
    description:
      "I craft visually compelling, user-centered designs that seamlessly merge aesthetics with functionality. Every interface I design is built to enhance usability, performance, and engagement.",
  },
  {
    number: "02",
    title: "Development",
    description:
      "I develop scalable, high-performance applications with a focus on micro-animations, smooth transitions, and meaningful interactions using React.js, Next.js, GSAP, and Framer Motion.",
  },
  {
    number: "03",
    title: "Full-Stack Solutions",
    description:
      "From concept to deployment, I deliver complete full-stack applications. My combined expertise in frontend, backend, and database integration ensures reliable, scalable, and impactful digital solutions.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="animate-slideInLeft">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Hi! I'm Jefferson Barnizo</h1>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed font-light">
                I am an IT student and future Software Engineer focused on building scalable, high-impact applications.
                I create efficient, user-centered solutions designed for real-world use.
              </p>
              <p className="text-foreground/70 leading-relaxed font-light">
                With expertise in both design and development, I combine creativity with technical excellence to deliver
                exceptional digital experiences that make a difference.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/jefferson.jpg"
                  alt="Jefferson Barnizo"
                  className="w-80 h-80 rounded-2xl border-4 border-accent/40 shadow-2xl shadow-accent/20 animate-float object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="separator-line max-w-4xl mx-auto my-20"></div>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">My Expertise</h2>
          <p className="text-foreground/70 font-light">
            Building solutions with design, development, and full-stack expertise
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl glass-effect border border-accent/20 transition-all duration-300 animate-glow hover:-translate-y-2 relative overflow-hidden hover:border-accent/50"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent/5 to-transparent"></div>

              <div className="relative z-10">
                <div className="text-5xl font-bold bg-clip-text text-transparent mb-4 bg-gradient-to-r from-primary to-accent">
                  {item.number}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="separator-line-secondary max-w-4xl mx-auto my-20"></div>

      {/* Certifications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Certifications & Achievements</h2>
          <p className="text-foreground/70 font-light">Professional certifications and training programs completed</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden glass-effect border border-accent/20 transition-all duration-300 animate-glow hover:-translate-y-2 relative hover:border-accent/50"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 relative z-10">
                <p className="text-sm font-semibold text-center text-foreground/80 group-hover:text-accent transition-colors font-light">
                  {cert.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
