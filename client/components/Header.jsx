"use client"
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-white font-bold text-xl">
            CollabSource
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/">
            <h1 className="text-white hover:text-gray-400">Home</h1>
          </Link>
          <Link href="/projects">
            <h1 className="text-white hover:text-gray-400">Projects</h1>
          </Link>
          <Link href="/contribute">
            <h1 className="text-white hover:text-gray-400">Contribute</h1>
          </Link>
          <Link href="/about">
            <h1 className="text-white hover:text-gray-400">About</h1>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Full Screen Mobile Menu */}
      {isOpen && (
        <nav className="fixed top-0 left-0 w-full h-full bg-black z-50 flex flex-col justify-center items-center">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Menu Links */}
          <ul className="space-y-6">
            <li>
              <Link href="/">
                <h1 className="text-white text-2xl hover:text-gray-400" onClick={toggleMenu}>Home</h1>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <h1 className="text-white text-2xl hover:text-gray-400" onClick={toggleMenu}>Projects</h1>
              </Link>
            </li>
            <li>
              <Link href="/contribute">
                <h1 className="text-white text-2xl hover:text-gray-400" onClick={toggleMenu}>Contribute</h1>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <h1 className="text-white text-2xl hover:text-gray-400" onClick={toggleMenu}>About</h1>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
