"use client"

import type React from "react"
import { useState, type FormEvent } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, Linkedin, Github, Instagram, Facebook } from "lucide-react"
import { motion } from "framer-motion"

// Floating spark particle component
const Spark = ({ size = 4, color = "#682A68", delay = 0, top = "0%", left = "0%" }) => (
  <motion.div
    className="absolute rounded-full"
    style={{ width: size, height: size, backgroundColor: color, top, left }}
    animate={{ x: [0, 40, 0], y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
    transition={{ duration: 8, repeat: Infinity, repeatType: "loop", delay }}
  />
)

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const subject = "Contact Form Submission from Portfolio"
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      const mailtoLink = `mailto:barnizojefferson12@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`
      window.location.href = mailtoLink

      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    { icon: Mail, title: "Email", value: "barnizojefferson12@gmail.com", href: "mailto:barnizojefferson12@gmail.com", color: "text-accent" },
    { icon: Phone, title: "Phone", value: "+63 962 376 7913", href: "tel:+639623767913", color: "text-primary" },
  ]

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/jefferson-barnizo-976498366" },
    { name: "GitHub", icon: Github, href: "https://github.com/barneeey03" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/jbrnzzxc_/" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/jefferson.barnizo.1" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <Header />

      {/* Floating background sparks */}
      <Spark size={6} color="#682A68" delay={0} top="10%" left="5%" />
      <Spark size={4} color="#4E1F4E" delay={2} top="20%" left="80%" />
      <Spark size={5} color="#341534" delay={1} top="70%" left="15%" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-64 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Let's Connect
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="text-xl text-foreground/70 font-light">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </motion.p>
        </div>
      </section>

      {/* Separator */}
      <div className="separator-line max-w-4xl mx-auto mb-20 relative">
        <motion.div
          className="absolute inset-0 h-1 bg-linear-to-r from-primary via-accent to-primary rounded-full"
          animate={{ x: [0, 200, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Connect Cards */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon
            return (
              <motion.a
                key={index}
                href={method.href}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-xl glass-effect border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 group block text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary/40 mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                <p className={`${method.color} hover:opacity-80 transition-opacity break-all text-sm`}>{method.value}</p>
              </motion.a>
            )
          })}

          {socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-xl glass-effect border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 group block text-center"
                title={social.name}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-accent/30 bg-primary/10 hover:border-accent hover:bg-primary/20 mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-foreground group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-foreground">{social.name}</h3>
                <p className="text-foreground/60 text-sm mt-1">Visit Profile</p>
              </motion.a>
            )
          })}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="px-4 sm:px-6 lg:px-8 pb-20 max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Send Me a Message</h2>
            <p className="text-foreground/70 font-light">Fill out the form below and I'll get back to you soon</p>
          </div>
        </motion.div>

        <motion.form onSubmit={handleSubmit} className="space-y-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-primary/10 border border-accent/30 text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/50 transition-all duration-300"
              placeholder="Jefferson Barnizo"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-primary/10 border border-accent/30 text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/50 transition-all duration-300"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-primary/10 border border-accent/30 text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/50 transition-all duration-300 resize-none"
              placeholder="Tell me about your project or inquiry..."
            />
          </div>

          {submitStatus === "success" && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 rounded-lg bg-primary/20 border border-primary/50 text-foreground">✓ Thank you! Opening email client...</motion.div>}
          {submitStatus === "error" && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 rounded-lg bg-primary/20 border border-primary/50 text-foreground">✗ Something went wrong. Please try again.</motion.div>}

          <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 rounded-full font-semibold bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 border-2 border-primary">
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </section>

      <Footer />
    </div>
  )
}
