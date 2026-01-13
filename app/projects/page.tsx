"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const allProjects = [
  {
    title: "Pet Care Application",
    category: "E-Commerce & Booking System",
    description:
      "Web-based pet care platform with product browsing, checkout, appointment booking, inventory management, and real-time admin monitoring.",
    tech: ["React.js", "Tailwind CSS", "Bootstrap", "Firebase Auth", "Firestore"],
    image: "/pet-care-ecommerce-store.jpg",
  },
  {
    title: "Reina Pabili",
    category: "Food Delivery Application",
    description:
      "Mobile and web-based pabili service with real-time rider tracking, chat functionality, and multiple payment options (GCash & COD).",
    tech: ["Flutter", "React.js", "Node.js", "Express.js", "PostgreSQL", "Firebase Auth", "Google Maps API"],
    image: "/food-delivery-app-screen.png",
  },
  {
    title: "Inventory Management System",
    category: "Enterprise Solution",
    description:
      "Secure inventory and purchasing system with comprehensive supplier tracking, item management, and role-based access control.",
    tech: ["React.js", "Node.js", "Tailwind CSS", "Bootstrap", "TypeScript", "Firestore"],
    image: "/inventory-management-dashboard.png",
  },
  {
    title: "GoBookIt",
    category: "Ticket Booking Platform",
    description:
      "Full-featured ticket booking platform for movies and events with dynamic seat selection, booking management, and payment integration.",
    tech: ["React.js", "Node.js", "Tailwind CSS", "Bootstrap", "TypeScript", "Firestore"],
    image: "/movie-ticket-booking-interface.jpg",
  },
  {
  title: "Personal Portfolio Website",
  category: "Personal Branding & Showcase",
  description:
    "A modern, dark-themed personal portfolio showcasing my projects, skills, and experience with smooth animations, responsive design, and a strong visual identity.",
  tech: [
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Vercel",
  ],
  image: "/MyPortfolio.png",
},

]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-fadeInUp">My Projects</h1>
          <p className="text-xl text-foreground/70 font-light">
            Explore my portfolio of innovative and impactful web and mobile applications
          </p>
        </div>
      </section>

      {/* Separator */}
      <div className="separator-line max-w-4xl mx-auto mb-20"></div>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-7xl mx-auto">
        <div className="space-y-12">
          {allProjects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden glass-effect border border-accent/20 transition-all duration-300 animate-glow hover:-translate-y-2 relative hover:border-accent/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-auto min-h-80 overflow-hidden order-2 md:order-1 bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center order-1 md:order-2 relative z-10">
                  <div className="mb-4">
                    <span className="text-sm font-semibold uppercase tracking-wider text-accent/80">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 transition-colors text-foreground group-hover:text-accent">
                    {project.title}
                  </h2>
                  <p className="text-foreground/70 mb-6 leading-relaxed font-light">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-4 py-2 rounded-full bg-primary/20 text-foreground border border-primary/40 transition-all duration-300 cursor-default hover:scale-105 hover:border-primary/80 hover:bg-primary/30 font-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="w-fit px-6 py-2 rounded-full font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 bg-primary border-2 border-primary hover:shadow-lg hover:shadow-primary/40">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="separator-line-secondary max-w-4xl mx-auto my-20"></div>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Interested in Collaboration?</h2>
        <p className="text-lg text-foreground/70 mb-8 font-light">
          Let's discuss your next project and how I can help bring your vision to life
        </p>
        <Link
          href="/contact"
          className="px-8 py-3 rounded-full font-semibold bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-105 inline-block border-2 border-primary"
        >
          Get in Touch
        </Link>
      </section>

      <Footer />
    </div>
  )
}
