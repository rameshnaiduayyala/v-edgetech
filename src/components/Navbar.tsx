import React, { useState } from 'react';
import {
  ChevronDown,
  Moon,
  Sun,
  Menu,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import MegaMenu from './MegaMenu';
import { useTheme } from '@/provider/useTheme';
import Logo from "/assets/v edge tech.png"

const Navbar: React.FC = () => {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-neutral-200 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Logo"
            className="h-12 w-auto object-contain dark:brightness-200"
          />
        </a>
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium text-white dark:text-neutral-300">
          <a href="#hero" className="hover:text-blue-500 dark:hover:text-cyan-400 transition-colors">Home</a>
          <a href="#services" className="hover:text-blue-500 dark:hover:text-cyan-400 transition-colors">What We Do</a>
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button className="flex items-center hover:text-blue-500 dark:hover:text-cyan-400 transition-colors">
              Solutions <ChevronDown size={18} className="ml-1" />
            </button>
            <AnimatePresence>
              {megaOpen && <MegaMenu />}
            </AnimatePresence>
          </div>
          <a href="#usecases" className="hover:text-blue-500 dark:hover:text-cyan-400 transition-colors">Our use cases</a>
          <a href="#contact" className="hover:text-blue-500 dark:hover:text-cyan-400 transition-colors">Contact</a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-blue-600" />
            )}
          </button>
        </nav>

        {/* Mobile Toggle Buttons */}
        <div className="md:hidden flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-blue-600" />
            )}
          </button>

          {/* Menu Toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-md border border-black/10 dark:border-white/20 text-neutral-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition"
            aria-label="Open menu"
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Slide-in Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white dark:bg-black z-50 p-6 shadow-lg flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-neutral-900 dark:text-white">Menu</h2>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-md border border-black/10 dark:border-white/20"
                >
                  <X />
                </button>
              </div>
              <nav className="flex flex-col gap-4 text-sm font-medium text-neutral-800 dark:text-neutral-200">
                <a href="#hero" onClick={() => setMobileOpen(false)}>Home</a>
                <a href="#services" onClick={() => setMobileOpen(false)}>What We Do</a>
                <a href="#usecases" onClick={() => setMobileOpen(false)}>Our use cases</a>
                <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
