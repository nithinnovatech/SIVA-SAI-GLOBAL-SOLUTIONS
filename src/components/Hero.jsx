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

            <div className="container relative z-10 py-32">
                <div className="text-center animate-fade-in">
                    {/* Main Heading */}
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-slide-up drop-shadow-2xl">
                        SIVA SAI GLOBAL SOLUTIONS
                    </h1>

                    {/* Tagline */}
                    <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto drop-shadow-lg">
                        Professional Lifting Equipment & Mechanical Maintenance Services
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <button onClick={() => scrollToSection('services')} className="btn btn-primary">
                            Our Services
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
                            Get in Touch
                        </button>
                    </div>


                    {/* Image Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {backgroundImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentImageIndex === index
                                    ? 'bg-primary-500 w-8'
                                    : 'bg-white/50 hover:bg-white/80'
                                    }`}
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
