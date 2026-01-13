"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Code2, Database, Smartphone, Palette, Box, Terminal } from "lucide-react"

const skillCategories = [
  {
    category: "Frontend",
    icon: Code2,
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    icon: Terminal,
    skills: ["Node.js", "Express.js", "MongoDB", "GraphQL", "REST APIs", "Authentication", "Authorization"],
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["Firebase", "Firestore", "PostgreSQL", "MongoDB", "SQL", "Real-time Databases"],
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    skills: ["Flutter", "React Native", "Mobile UI/UX", "Cross-platform Development"],
  },
  {
    category: "Tools & Platforms",
    icon: Box,
    skills: ["Git/GitHub", "VS Code", "Vercel", "Docker", "Figma", "Postman", "npm/yarn"],
  },
  {
    category: "Other Skills",
    icon: Palette,
    skills: ["UI/UX Design", "Project Management", "Problem Solving", "Team Collaboration", "Agile Methodology"],
  },
]

export default function SkillsPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground animate-fadeInUp">My Skills</h1>
          <p className="text-xl text-foreground/70 font-light">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>
      </section>

      {/* Separator */}
      <div className="separator-line max-w-4xl mx-auto mb-20"></div>

      <section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-xl glass-effect border border-accent/20 transition-all duration-300 animate-glow hover:-translate-y-2 relative overflow-hidden hover:border-accent/50"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br from-accent/5 to-transparent"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:animate-icon-bounce bg-primary/20 border border-primary/40">
                      <IconComponent className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-lg bg-primary/20 text-sm font-light text-foreground border border-primary/40 transition-all duration-300 cursor-default hover:scale-105 hover:border-primary/80 hover:bg-primary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Separator */}
      <div className="separator-line-secondary max-w-4xl mx-auto my-20"></div>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Work Together?</h2>
        <p className="text-lg text-foreground/70 mb-8 font-light">
          Let's create something innovative and impactful. I'm ready to contribute my skills to your next project.
        </p>
        <a
          href="/contact"
          className="px-8 py-3 rounded-full font-semibold bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-105 inline-block border-2 border-primary"
        >
          Let's Connect
        </a>
      </section>

      <Footer />
    </div>
  )
}
