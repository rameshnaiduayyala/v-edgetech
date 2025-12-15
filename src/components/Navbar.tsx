import React, { useEffect, useState } from 'react'
import {
  ChevronDown,
  Moon,
  Sun,
  Menu,
  X,
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import MegaMenu from './MegaMenu'
import { useTheme } from '@/provider/useTheme'
import Logo from '/assets/v edge tech.png'

const Navbar: React.FC = () => {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)


  useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 40)
  window.addEventListener('scroll', onScroll)
  return () => window.removeEventListener('scroll', onScroll)
}, [])

  return (
<header
  className={`
    fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${scrolled
      ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-white/10'
      : 'bg-transparent'}
  `}
>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="/" className="flex items-center">
          <div className="bg-neutral-900/95 dark:bg-transparent rounded-md px-2 py-1">

            <img
              src={Logo}
              alt="Vertical Edge"
              className="h-10 w-auto"
            />
          </div>
        </a>


        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-neutral-700 dark:text-neutral-300">
          <a
            href="#hero"
            className="hover:text-neutral-900 dark:hover:text-white transition"
          >
            Home
          </a>

          <a
            href="#services"
            className="hover:text-neutral-900 dark:hover:text-white transition"
          >
            Services
          </a>

          {/* Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              className="flex items-center gap-1 hover:text-neutral-900 dark:hover:text-white transition"
            >
              Solutions
              <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {megaOpen && <MegaMenu />}
            </AnimatePresence>
          </div>

          <a
            href="#industries"
            className="hover:text-neutral-900 dark:hover:text-white transition"
          >
            Industries
          </a>

          <a
            href="#contact"
            className="hover:text-neutral-900 dark:hover:text-white transition"
          >
            Contact
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
              ml-2 p-2 rounded-md
              border border-neutral-300 dark:border-neutral-700
              hover:border-neutral-500 transition
            "
          >
            {theme === 'dark' ? (
              <Sun size={16} className="text-neutral-300" />
            ) : (
              <Moon size={16} className="text-neutral-700" />
            )}
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md border border-neutral-300 dark:border-neutral-700"
          >
            {theme === 'dark' ? (
              <Sun size={16} className="text-neutral-300" />
            ) : (
              <Moon size={16} className="text-neutral-700" />
            )}
          </button>

          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="p-2 rounded-md border border-neutral-300 dark:border-neutral-700"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-zinc-950 z-50 p-6 border-l border-neutral-200 dark:border-neutral-800"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 border border-neutral-300 dark:border-neutral-700 rounded-md"
                >
                  <X size={16} />
                </button>
              </div>

              <nav className="flex flex-col gap-6 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                <a href="#hero" onClick={() => setMobileOpen(false)}>Home</a>
                <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
                <a href="#industries" onClick={() => setMobileOpen(false)}>Industries</a>
                <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
