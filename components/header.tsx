"use client"

import type React from "react"
import { useState } from "react"
import { Code, Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = e.currentTarget.getAttribute("href")?.substring(1)
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false) // Close menu on link click
  }

  return (
    <header className="fixed top-0 w-full bg-space-dark/80 backdrop-blur-md border-b border-purple-400/20 z-[1000] shadow-lg">
      <div className="container flex justify-between items-center py-4">
        <a
          href="#hero"
          className="logo text-xl font-bold text-cyan-400 flex items-center gap-2 transition-colors duration-300 hover:text-cyan-400"
          onClick={handleNavLinkClick}
        >
          <Code className="h-6 w-6" />
          Gustavo Matias
        </a>
        <button
          className="lg:hidden text-white p-2 rounded-lg transition-all duration-300 hover:text-cyan-400 hover:bg-purple-400/20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <nav
          className={`nav ${isMenuOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row absolute lg:relative top-full left-0 w-full lg:w-auto bg-space-dark/90 lg:bg-transparent shadow-lg lg:shadow-none py-4 lg:py-0 text-center`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 list-none m-0 p-0">
            <li>
              <a
                href="#hero"
                className="block lg:inline-block text-gray-300 font-semibold py-2 px-4 lg:p-0 rounded-lg lg:rounded-none transition-all duration-300 hover:text-cyan-400 hover:bg-purple-400/10 lg:hover:bg-transparent"
                onClick={handleNavLinkClick}
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block lg:inline-block text-gray-300 font-semibold py-2 px-4 lg:p-0 rounded-lg lg:rounded-none transition-all duration-300 hover:text-cyan-400 hover:bg-purple-400/10 lg:hover:bg-transparent"
                onClick={handleNavLinkClick}
              >
                Sobre Mim
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block lg:inline-block text-gray-300 font-semibold py-2 px-4 lg:p-0 rounded-lg lg:rounded-none transition-all duration-300 hover:text-cyan-400 hover:bg-purple-400/10 lg:hover:bg-transparent"
                onClick={handleNavLinkClick}
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block lg:inline-block text-gray-300 font-semibold py-2 px-4 lg:p-0 rounded-lg lg:rounded-none transition-all duration-300 hover:text-cyan-400 hover:bg-purple-400/10 lg:hover:bg-transparent"
                onClick={handleNavLinkClick}
              >
                Experiência
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="block lg:inline-block text-gray-300 font-semibold py-2 px-4 lg:p-0 rounded-lg lg:rounded-none transition-all duration-300 hover:text-cyan-400 hover:bg-purple-400/10 lg:hover:bg-transparent"
                onClick={handleNavLinkClick}
              >
                Educação
              </a>
            </li>
            <li>
              <a
                href="#courses"
                className="block lg:inline-block text-gray-300 font-semibold py-2 px-4 lg:p-0 rounded-lg lg:rounded-none transition-all duration-300 hover:text-cyan-400 hover:bg-purple-400/10 lg:hover:bg-transparent"
                onClick={handleNavLinkClick}
              >
                Aprendizado Contínuo
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block lg:inline-block text-gray-300 font-semibold py-2 px-4 lg:p-0 rounded-lg lg:rounded-none transition-all duration-300 hover:text-cyan-400 hover:bg-purple-400/10 lg:hover:bg-transparent"
                onClick={handleNavLinkClick}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
