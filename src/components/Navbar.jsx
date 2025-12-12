import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
            }`}>
            <div className="container">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
                        <img src={logo} alt="Siva Sai Global Solutions" className="h-12 w-auto" />
                        <div className="hidden md:block">
                            <div className="text-xl font-bold text-gradient">SIVA SAI</div>
                            <div className="text-xs text-gray-400">GLOBAL SOLUTIONS</div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button onClick={() => scrollToSection('home')} className="text-white hover:text-primary-500 transition-colors font-medium">
                            Home
                        </button>
                        <button onClick={() => scrollToSection('about')} className="text-white hover:text-primary-500 transition-colors font-medium">
                            About
                        </button>
                        <button onClick={() => scrollToSection('services')} className="text-white hover:text-primary-500 transition-colors font-medium">
                            Services
                        </button>
                        <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-primary-500 transition-colors font-medium">
                            Gallery
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="btn btn-primary text-sm px-6 py-2">
                            Get in Touch
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-white p-2"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800">
                    <div className="container py-4 space-y-3">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="block w-full text-left px-4 py-2 text-white hover:text-primary-500 transition-colors"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="block w-full text-left px-4 py-2 text-white hover:text-primary-500 transition-colors"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('services')}
                            className="block w-full text-left px-4 py-2 text-white hover:text-primary-500 transition-colors"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection('gallery')}
                            className="block w-full text-left px-4 py-2 text-white hover:text-primary-500 transition-colors"
                        >
                            Gallery
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn btn-primary w-full"
                        >
                            Get in Touch
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
