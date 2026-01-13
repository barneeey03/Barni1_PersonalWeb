"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, Linkedin, Github, Instagram, Facebook } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
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
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Create mailto link
      const subject = "Contact Form Submission from Portfolio"
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      const mailtoLink = `mailto:barnizojefferson12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

      // Open email client
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
    {
      icon: Mail,
      title: "Email",
      value: "barnizojefferson12@gmail.com",
      href: "mailto:barnizojefferson12@gmail.com",
      color: "text-accent",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+63 962 376 7913",
      href: "tel:+639623767913",
      color: "text-primary",
    },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/jefferson-barnizo-976498366",
    },
    { name: "GitHub", icon: Github, href: "https://github.com/barneeey03" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/jbrnzzxc_/" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/jefferson.barnizo.1" },
  ]

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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Let's Connect</h1>
          <p className="text-xl text-foreground/70 font-light">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Separator */}
      <div className="separator-line max-w-4xl mx-auto mb-20"></div>

      {/* Connect Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Connect With Me</h2>
          <p className="text-foreground/70 text-lg font-light mb-2">Find me on social media and let's collaborate</p>
          <p className="text-foreground/70 text-lg font-light">
            I'm always excited to work on new projects. Reach out and let's create something amazing together.
          </p>
        </div>

        {/* Direct Contact Methods and Social Media Links as Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon
            return (
              <a
                key={index}
                href={method.href}
                className="p-8 rounded-xl glass-effect border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 group block text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary/40 mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                <p className={`${method.color} hover:opacity-80 transition-opacity break-all text-sm`}>
                  {method.value}
                </p>
              </a>
            )
          })}

          {/* Social Media Links as Cards */}
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 rounded-xl glass-effect border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 group block text-center"
                title={social.name}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-accent/30 bg-primary/10 hover:border-accent hover:bg-primary/20 mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-foreground group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-foreground">{social.name}</h3>
                <p className="text-foreground/60 text-sm mt-1">Visit Profile</p>
              </a>
            )
          })}
        </div>
      </section>

      {/* Separator */}
      <div className="separator-line-secondary max-w-4xl mx-auto mb-20"></div>

      {/* Let's Build Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-foreground">Let's Build Something Great</h2>
        <p className="text-lg text-foreground/70 mb-8 font-light leading-relaxed">
          I'm always excited to work on new projects. Reach out and let's create something amazing together.
        </p>

        <div className="space-y-4 mb-10">
          <div className="p-6 rounded-xl glass-effect border border-accent/30 hover:border-accent/60 transition-all duration-300">
            <p className="text-foreground/70 text-sm font-light mb-2">Email</p>
            <a
              href="mailto:barnizojefferson12@gmail.com"
              className="text-2xl font-bold text-accent hover:text-accent/80 transition-colors break-all"
            >
              barnizojefferson12@gmail.com
            </a>
          </div>
          <div className="p-6 rounded-xl glass-effect border border-primary/30 hover:border-primary/60 transition-all duration-300">
            <p className="text-foreground/70 text-sm font-light mb-2">Phone</p>
            <a
              href="tel:+639623767913"
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              +63 962 376 7913
            </a>
          </div>
        </div>

        <a
          href="#contact-form"
          className="px-8 py-3 rounded-full font-semibold bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-105 inline-block border-2 border-primary"
        >
          Start a Conversation
        </a>
      </section>

      {/* Separator */}
      <div className="separator-line max-w-4xl mx-auto my-20"></div>

      {/* Contact Form Section */}
      <section id="contact-form" className="px-4 sm:px-6 lg:px-8 pb-20 max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Send Me a Message</h2>
          <p className="text-foreground/70 font-light">Fill out the form below and I'll get back to you soon</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
              Full Name
            </label>
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

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
              Email Address
            </label>
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

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
              Message
            </label>
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

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="p-4 rounded-lg bg-primary/20 border border-primary/50 text-foreground">
              ✓ Thank you for reaching out! Opening email client...
            </div>
          )}
          {submitStatus === "error" && (
            <div className="p-4 rounded-lg bg-primary/20 border border-primary/50 text-foreground">
              ✗ Something went wrong. Please try again or email me directly.
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 rounded-full font-semibold bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 border-2 border-primary"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

      <Footer />
    </div>
  )
}
