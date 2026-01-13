"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

const certifications = [
  { title: "Fortinet Certified Fundamentals Cybersecurity", image: "/Fortinet.Cert.png" },
  { title: "Student SOC Program – Foundations Training", image: "/SOC-CERT.png" },
  { title: "Accenture Skills to Succeed (S2S) Academy", image: "/S2S-CERT.png" },
  { title: "Responsive Web Design – freeCodeCamp", image: "/barnizo-cert1.png" },
  { title: "JavaScript Algorithms and Data Structures – freeCodeCamp", image: "/barnizo-cert2.png" },
  { title: "Front End Development Libraries – freeCodeCamp", image: "/barnizo-cert3.png" },
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

// Floating spark particle component
const Spark = ({ size = 4, color = "#682A68", delay = 0, top = "0%", left = "0%" }) => (
  <motion.div
    className="absolute rounded-full"
    style={{ width: size, height: size, backgroundColor: color, top, left }}
    animate={{ x: [0, 50, 0], y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
    transition={{ duration: 8, repeat: Infinity, repeatType: "loop", delay }}
  />
)

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <Header />

      {/* Floating background particles */}
      <Spark size={6} color="#682A68" delay={0} top="10%" left="5%" />
      <Spark size={4} color="#4E1F4E" delay={2} top="20%" left="80%" />
      <Spark size={5} color="#341534" delay={1} top="70%" left="15%" />
      <Spark size={3} color="#682A68" delay={3} top="50%" left="50%" />
      <Spark size={4} color="#4E1F4E" delay={4} top="30%" left="30%" />
      <Spark size={5} color="#682A68" delay={5} top="80%" left="70%" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Animated background blobs */}
        <motion.div
          className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-64 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "loop" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-5xl md:text-6xl font-bold mb-6 gradient-text"
              >
                Hi! I'm Jefferson Barnizo
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-lg text-foreground/70 mb-6 leading-relaxed font-light"
              >
                I am an IT student and future Software Engineer focused on building scalable, high-impact applications. I create efficient, user-centered solutions designed for real-world use.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="text-foreground/70 leading-relaxed font-light"
              >
                With expertise in both design and development, I combine creativity with technical excellence to deliver exceptional digital experiences that make a difference.
              </motion.p>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="relative">
                <motion.img
                  src="/pfp.jpg"
                  alt="Jefferson Barnizo"
                  className="w-80 h-80 rounded-2xl border-4 border-accent/40 shadow-2xl shadow-accent/20 object-cover"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Separator Line */}
      <div className="separator-line max-w-4xl mx-auto my-20 relative">
        <motion.div
          className="absolute inset-0 h-1 bg-linear-to-r from-primary via-accent to-primary rounded-full"
          animate={{ x: [0, 200, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Expertise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-foreground mb-4"
          >
            My Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-foreground/70 font-light"
          >
            Building solutions with design, development, and full-stack expertise
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className="group p-8 rounded-xl glass-effect border border-accent/20 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden hover:border-accent/50"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-linear-to-br from-accent/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold bg-clip-text text-transparent mb-4 bg-linear-to-r from-primary to-accent">
                  {item.number}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed font-light">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <div className="separator-line-secondary max-w-4xl mx-auto my-20 relative">
        <motion.div
          className="absolute inset-0 h-1 bg-linear-to-r from-primary via-accent to-primary rounded-full"
          animate={{ x: [0, -200, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-foreground mb-4"
          >
            Certifications & Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-foreground/70 font-light"
          >
            Professional certifications and training programs completed
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group rounded-xl overflow-hidden glass-effect border border-accent/20 transition-all duration-300 hover:-translate-y-2 relative hover:border-accent/50"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <motion.img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 relative z-10">
                <p className="text-sm text-center text-foreground/80 group-hover:text-accent transition-colors font-light">
                  {cert.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
