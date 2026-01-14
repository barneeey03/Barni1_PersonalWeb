"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

type Project = {
  title: string
  category: string
  description: string
  tech: string[]
  image: string
  github: string
  live: string
}

const allProjects: Project[] = [
  {
    title: "Pet Care Application",
    category: "E-Commerce & Booking System",
    description:
      "Web-based pet care platform with product browsing, checkout, appointment booking, inventory management, and real-time admin monitoring.",
    tech: ["React.js", "Tailwind CSS", "Firebase", "Firestore"],
    image: "/pet-care-ecommerce-store.jpg",
    github: "https://github.com/barneeey03/pet-care-app",
    live: "https://pet-care-app.vercel.app",
  },
  {
    title: "Reina Pabili",
    category: "Food Delivery Application",
    description:
      "Mobile and web-based pabili service with real-time rider tracking and multiple payment options.",
    tech: ["Flutter", "React.js", "Node.js", "PostgreSQL"],
    image: "/food-delivery-app-screen.png",
    github: "https://github.com/barneeey03/reina-pabili",
    live: "https://reina-pabili.vercel.app",
  },
  {
    title: "Inventory Management System",
    category: "Enterprise Solution",
    description:
      "Secure inventory and purchasing system with supplier tracking and role-based access control.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Firestore"],
    image: "/inventory-management-dashboard.png",
    github: "https://github.com/barneeey03/ISC-IMS",
    live: "https://isc-ims.vercel.app/",
  },
  {
    title: "GoBookIt",
    category: "Ticket Booking Platform",
    description:
      "Ticket booking platform with dynamic seat selection and booking management.",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    image: "/movie-ticket-booking-interface.jpg",
    github: "https://github.com/barneeey03/gobookit",
    live: "https://gobookit.vercel.app",
  },
  {
    title: "Personal Portfolio Website",
    category: "Personal Branding",
    description:
      "Modern dark-themed portfolio showcasing projects, skills, and experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/MyPortfolio.png",
    github: "https://github.com/barneeey03/My-Portfolio",
    live: "https://my-portfolio-lilac-five-37.vercel.app/",
  },
]

// Floating particles
const Spark = ({
  size = 4,
  delay = 0,
  top = "0%",
  left = "0%",
}: any) => (
  <motion.div
    className="absolute rounded-full bg-accent/40"
    style={{ width: size, height: size, top, left }}
    animate={{ x: [0, 40, 0], y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
    transition={{ duration: 8, repeat: Infinity, delay }}
  />
)

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <Header />

      {/* Particles */}
      <Spark size={6} top="10%" left="5%" />
      <Spark size={4} delay={2} top="20%" left="80%" />
      <Spark size={5} delay={1} top="70%" left="15%" />

      {/* Hero */}
      <section className="pt-32 pb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6 gradient-text"
        >
          My Projects
        </motion.h1>
        <p className="text-foreground/70 max-w-xl mx-auto">
          A curated selection of projects built with consistency, performance, and clean UI.
        </p>
      </section>

      {/* Projects */}
      <section className="px-6 pb-24 max-w-7xl mx-auto space-y-14">
        {allProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-2xl overflow-hidden glass-effect border border-accent/20
                       shadow-lg hover:shadow-accent/20 transition-all duration-300"
          >
            <div className="grid md:grid-cols-2 gap-6 items-center min-h-[360px]">
              {/* Image */}
              <div className="relative h-[260px] md:h-full w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col justify-between h-full">
                <div>
                  <span className="text-accent text-xs uppercase tracking-wide">
                    {project.category}
                  </span>

                  <h2 className="text-2xl font-bold mt-2 mb-3">
                    {project.title}
                  </h2>

                  <p className="text-sm text-foreground/70 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    aria-label="GitHub Repository"
                    className="group relative w-12 h-12 rounded-full flex items-center justify-center
                               bg-background/70 backdrop-blur border border-accent/30
                               shadow-md hover:shadow-accent/40
                               transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="absolute inset-0 rounded-full bg-accent/20 opacity-0
                                     group-hover:opacity-100 transition" />
                    <svg
                      className="w-5 h-5 z-10 text-foreground group-hover:text-accent transition"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.55-3.87-1.55-.52-1.33-1.27-1.69-1.27-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.02 1.76 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.19.92-.26 1.9-.38 2.88-.38.98 0 1.96.13 2.88.38 2.21-1.5 3.18-1.19 3.18-1.19.63 1.57.23 2.73.11 3.02.74.81 1.19 1.85 1.19 3.11 0 4.43-2.69 5.41-5.25 5.69.41.35.78 1.05.78 2.13v3.15c0 .31.21.68.8.56 4.56-1.53 7.85-5.85 7.85-10.95C23.5 5.74 18.27.5 12 .5z" />
                    </svg>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    aria-label="Live Demo"
                    className="w-12 h-12 rounded-full flex items-center justify-center
                               bg-accent text-white shadow-lg shadow-accent/40
                               transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                  >
                    ↗
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <Link href="/contact" className="btn-primary">
          Get in Touch
        </Link>
      </section>

      <Footer />
    </div>
  )
}
