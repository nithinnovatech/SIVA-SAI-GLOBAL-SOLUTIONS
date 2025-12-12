import React, { useState, useEffect } from 'react';
import heroBg1 from '../assets/hero-bg-1.png';
import heroBg2 from '../assets/hero-bg-2.png';
import heroBg3 from '../assets/hero-bg-3.png';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const backgroundImages = [heroBg1, heroBg2, heroBg3];

    // Auto-rotate background images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % backgroundImages.length
            );
        }, 5000);

    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Images Carousel */}
            <div className="absolute inset-0">
                {backgroundImages.map((image, index) => (
                    <div
                        key={index}
                        className="absolute inset-0 transition-opacity duration-1000"
                        style={{
                            opacity: currentImageIndex === index ? 1 : 0,
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                ))}
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>

            <div className="container relative z-10 py-20">
                <div className="text-center animate-fade-in">
                    {/* SIVA SAI - Main Title */}
                    <h1
                        className="font-extrabold mb-0 animate-slide-up tracking-wider"
                        style={{
                            fontSize: 'clamp(3.5rem, 12vw, 9rem)',
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 900,
                            color: '#F5A623',
                            textShadow: `
                                3px 3px 0px #8B5A00,
                                6px 6px 0px #5D3A00,
                                9px 9px 15px rgba(0,0,0,0.5),
                                0 0 40px rgba(245, 166, 35, 0.4)
                            `,
                            letterSpacing: '0.02em',
                            lineHeight: 1.1,
                            WebkitTextStroke: '1px #D4880F'
                        }}
                    >
                        SIVA SAI
                    </h1>

                    {/* GLOBAL SOLUTIONS - Subtitle */}
                    <h2
                        className="font-bold mb-6 tracking-widest"
                        style={{
                            fontSize: 'clamp(1.2rem, 4vw, 3.5rem)',
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 700,
                            color: '#F5A623',
                            textShadow: `
                                2px 2px 0px #8B5A00,
                                4px 4px 0px #5D3A00,
                                6px 6px 10px rgba(0,0,0,0.4),
                                0 0 30px rgba(245, 166, 35, 0.3)
                            `,
                            letterSpacing: '0.2em',
                            lineHeight: 1.2
                        }}
                    >
                        GLOBAL SOLUTIONS
                    </h2>

                    {/* Decorative White Lines */}
                    <div className="flex justify-center items-center gap-6 md:gap-12 mb-10 mt-4">
                        {/* Left Lines */}
                        <div className="flex flex-col gap-1.5 items-end">
                            <div
                                className="rounded-full"
                                style={{
                                    width: 'clamp(50px, 12vw, 100px)',
                                    height: '4px',
                                    background: '#ffffff',
                                    boxShadow: '0 0 8px rgba(255,255,255,0.6)'
                                }}
                            />
                            <div
                                className="rounded-full"
                                style={{
                                    width: 'clamp(70px, 16vw, 130px)',
                                    height: '4px',
                                    background: '#ffffff',
                                    boxShadow: '0 0 8px rgba(255,255,255,0.6)'
                                }}
                            />
                        </div>

                        {/* Right Lines */}
                        <div className="flex flex-col gap-1.5 items-start">
                            <div
                                className="rounded-full"
                                style={{
                                    width: 'clamp(50px, 12vw, 100px)',
                                    height: '4px',
                                    background: '#ffffff',
                                    boxShadow: '0 0 8px rgba(255,255,255,0.6)'
                                }}
                            />
                            <div
                                className="rounded-full"
                                style={{
                                    width: 'clamp(70px, 16vw, 130px)',
                                    height: '4px',
                                    background: '#ffffff',
                                    boxShadow: '0 0 8px rgba(255,255,255,0.6)'
                                }}
                            />
                        </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto tracking-wide drop-shadow-lg">
                        Professional Lifting Equipment & Mechanical Maintenance Services
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <button
                            onClick={() => scrollToSection('services')}
                            className="btn btn-primary"
                            style={{
                                background: 'linear-gradient(135deg, #F5A623 0%, #D4880F 100%)',
                                color: '#1a1612',
                                fontWeight: 700
                            }}
                        >
                            Our Services
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn btn-secondary"
                            style={{
                                borderColor: '#F5A623',
                                color: '#F5A623'
                            }}
                        >
                            Get in Touch
                        </button>
                    </div>

                    {/* Image Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {backgroundImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentImageIndex === index
                                    ? 'w-8'
                                    : 'hover:bg-white/80'
                                    }`}
                                style={{
                                    background: currentImageIndex === index
                                        ? 'linear-gradient(135deg, #F5A623 0%, #D4880F 100%)'
                                        : 'rgba(255,255,255,0.5)'
                                }}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
