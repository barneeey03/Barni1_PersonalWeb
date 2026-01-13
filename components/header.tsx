"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/skills", label: "Skills" },
    { href: "/about", label: "About Me" },
    { href: "/projects", label: "Projects" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isSticky
          ? "glass-effect backdrop-blur-lg border-b border-accent/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MOBILE = FLEX | DESKTOP = GRID */}
        <div className="flex items-center justify-between h-20 md:grid md:grid-cols-3">
          
          {/* LEFT — LOGO */}
          <div className="flex items-center">
            <Link
              href="/"
              className="px-4 py-2 rounded-full text-sm font-bold
              transition-all duration-300 border-2
              bg-primary/15 border-primary text-foreground
              hover:border-accent hover:bg-primary/30 hover:scale-105"
            >
              Barni1
            </Link>
          </div>

          {/* CENTER — NAV (DESKTOP ONLY) */}
          <nav className="hidden md:flex justify-center items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium
                transition-all duration-300 border-2
                ${
                  isActive(link.href)
                    ? "border-accent bg-accent/10 text-foreground"
                    : "border-accent/30 text-foreground/70 hover:border-accent/60 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT — CONTACT + HAMBURGER */}
          <div className="flex items-center gap-4 ml-auto md:ml-0 md:justify-end">
            
            <Link
              href="/contact"
              className="hidden sm:block px-6 py-2 rounded-full
              font-medium text-sm transition-all duration-300
              bg-primary text-primary-foreground border-2 border-primary
              hover:shadow-lg hover:shadow-primary/40 hover:scale-105"
            >
              Contact
            </Link>

            {/* HAMBURGER */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-foreground
              hover:bg-accent/10 transition-colors"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE NAV MENU */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-accent/20 animate-slideInLeft">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 px-4 rounded-lg text-sm font-medium
                text-foreground/70 hover:text-foreground hover:bg-accent/5 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="block mt-4 mx-4 px-4 py-2 rounded-full
              text-sm font-medium bg-primary text-primary-foreground text-center
              hover:opacity-80 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
