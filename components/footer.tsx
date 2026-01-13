"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [showNameAnimation, setShowNameAnimation] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowNameAnimation(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const socialLinks = [
    { icon: "linkedin", href: "https://linkedin.com/in/jefferson-barnizo-976498366", label: "LinkedIn" },
    { icon: "github", href: "https://github.com/barneeey03", label: "GitHub" },
    { icon: "instagram", href: "https://instagram.com/jbrnzzxc_/", label: "Instagram" },
    { icon: "facebook", href: "https://facebook.com/jefferson.barnizo.1", label: "Facebook" },
  ]

  return (
    <footer className="bg-background border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="separator-line mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className={`mb-4 ${showNameAnimation ? "animate-text-pop" : ""}`}>
              <h3 className="text-2xl font-bold">
                <span className="gradient-text">Jefferson</span>
                <span className="text-foreground"> Barnizo</span>
              </h3>
            </div>
            <p className="text-foreground/70 text-sm font-light">Where aesthetics & functionality meet</p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-foreground/60 hover:text-accent text-sm transition-colors duration-300 font-light"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-foreground/60 hover:text-accent text-sm transition-colors duration-300 font-light"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-foreground/60 hover:text-accent text-sm transition-colors duration-300 font-light"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">My Projects</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/projects"
                  className="text-foreground/60 hover:text-accent text-sm transition-colors duration-300 font-light"
                >
                  Explore Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="text-foreground/60 hover:text-accent text-sm transition-colors duration-300 font-light"
                >
                  My Skills
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contact Me</h4>
            <div className="space-y-2">
              <a
                href="mailto:barnizojefferson12@gmail.com"
                className="text-foreground/60 hover:text-accent text-sm transition-colors duration-300 block truncate font-light"
              >
                barnizojefferson12@gmail.com
              </a>
              <a
                href="tel:+639623767913"
                className="text-foreground/60 hover:text-accent text-sm transition-colors duration-300 block font-light"
              >
                +63 962 376 7913
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="separator-line-secondary mb-8"></div>
        <div className="border-t border-accent/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((link, idx) => (
                <a
                  key={link.icon}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-all duration-300 hover:scale-125 transform"
                  aria-label={link.label}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  {link.icon === "linkedin" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  )}
                  {link.icon === "github" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  )}
                  {link.icon === "instagram" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.015-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                    </svg>
                  )}
                  {link.icon === "facebook" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-foreground/40 text-xs font-light">
              © {currentYear} Jefferson Barnizo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
