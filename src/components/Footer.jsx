import React from 'react';
import logo from '../assets/logo.jpg';

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const quickLinks = [
        { name: 'Home', section: 'home' },
        { name: 'About', section: 'about' },
        { name: 'Services', section: 'services' },
        { name: 'Contact', section: 'contact' }
    ];

    const services = [
        'Cranes for Hire',
        'Mechanical Maintenance',
        'Crane Services',
        'Hydraulic Maintenance'
    ];

    const socialLinks = [
        { icon: '📘', name: 'Facebook', url: '#' },
        { icon: '📸', name: 'Instagram', url: '#' },
        { icon: '💼', name: 'LinkedIn', url: '#' }
    ];

    return (
        <footer className="bg-black border-t border-gray-800">
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <img src={logo} alt="Siva Sai Global Solutions" className="h-12 w-auto" />
                            <div>
                                <div className="text-lg font-bold text-gradient">SIVA SAI</div>
                                <div className="text-xs text-gray-400">GLOBAL SOLUTIONS</div>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-4 text-sm">
                            Professional lifting equipment and mechanical maintenance services with 24/7 availability.
                        </p>
                        <div className="flex space-x-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-lg hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-600 transition-all transform hover:scale-110"
                                    title={social.name}
                                >
                                    <span className="text-xl">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => scrollToSection(link.section)}
                                        className="text-gray-400 hover:text-primary-500 transition-colors flex items-center text-sm"
                                    >
                                        <span className="mr-2">→</span>
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={index} className="flex items-start text-gray-400 text-sm">
                                    <span className="text-primary-500 mr-2">✓</span>
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-2 text-sm">
                                <span className="text-xl">📱</span>
                                <div>
                                    <div className="text-gray-500 text-xs">Phone</div>
                                    <a href="tel:9617373999" className="text-gray-400 hover:text-primary-500 transition-colors">
                                        9617373999
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-2 text-sm">
                                <span className="text-xl">✉</span>
                                <div>
                                    <div className="text-gray-500 text-xs">Email</div>
                                    <a href="mailto:sivasaiglobalsolutions@gmail.com" className="text-gray-400 hover:text-primary-500 transition-colors break-all">
                                        sivasaiglobalsolutions@gmail.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-2 text-sm">
                                <span className="text-xl">🕐</span>
                                <div>
                                    <div className="text-gray-500 text-xs">Hours</div>
                                    <div className="text-gray-400">24/7 - 365 Days</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            © 2025 Siva Sai Global Solutions. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-sm text-center md:text-right">
                            Designed with <span className="text-red-500">♥</span> for Excellence
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
