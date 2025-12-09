import React from 'react';
import serviceImg1 from '../assets/service-1.png';
import serviceImg2 from '../assets/service-2.png';
import serviceImg3 from '../assets/service-3.png';
import serviceImg4 from '../assets/service-4.png';
import serviceImg5 from '../assets/service-5.png';

const Services = () => {
    const services = [
        {
            icon: '🏗',
            title: 'Cranes for Hire',
            description: 'Telescopic Mobile Cranes, Crawler Cranes, Boomlifts, and a wide range of lifting equipment from 30 tons to over 300 tons.',
            image: serviceImg1,
            features: [
                'Telescopic Mobile Cranes',
                'Crawler Cranes',
                'Boomlifts',
                '30-300+ Ton Capacity',
                'Well-Maintained Fleet'
            ]
        },
        {
            icon: '🔧',
            title: 'Mechanical Maintenance Services',
            description: 'Complete support for industrial equipment with our experienced team of mechanical engineers.',
            image: serviceImg2,
            features: [
                'Industrial Equipment Support',
                'Preventive Maintenance',
                'Emergency Repairs',
                'Equipment Optimization',
                'Performance Monitoring'
            ]
        },
        {
            icon: '⚓',
            title: 'Crane Services',
            description: 'Skilled operation and maintenance of Harbour Mobile Cranes, Mobile Cranes, Ship Unloaders, and other port equipment.',
            image: serviceImg3,
            features: [
                'Harbour Mobile Cranes',
                'Ship Unloaders',
                'Port Equipment',
                'Skilled Operators',
                'Safety Compliance'
            ]
        },
        {
            icon: '💧',
            title: 'Hydraulic Maintenance',
            description: 'Advanced solutions to maintain the efficiency and reliability of hydraulic systems.',
            image: serviceImg4,
            features: [
                'Hydraulic System Analysis',
                'Component Replacement',
                'System Optimization',
                'Leak Detection & Repair',
                'Performance Testing'
            ]
        },
        {
            icon: '🎯',
            title: 'Custom Equipment Solutions',
            description: 'We are ready to add additional equipment based on your specific operational requirements, ensuring you receive tailored solutions that align with your project needs.',
            image: serviceImg5,
            features: [
                'Custom Equipment Sourcing',
                'Project-Specific Solutions',
                'Flexible Rental Terms',
                'Expert Consultation',
                'Scalable Options'
            ]
        }
    ];

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="services" className="section relative bg-black">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our <span className="text-gradient">Services</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Comprehensive lifting equipment and maintenance solutions tailored to your operational needs
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => (
                        <div key={index} className="service-card group overflow-hidden">
                            {/* Service Image */}
                            <div className="relative h-48 mb-6 -m-8 mb-6">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gradient transition-colors">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 mb-6 flex-grow">
                                {service.description}
                            </p>

                            {/* Features List */}
                            <ul className="space-y-2 mb-6">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-gray-300">
                                        <span className="text-primary-500 mr-2">✓</span>
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Learn More Button */}
                            <button
                                onClick={scrollToContact}
                                className="btn btn-secondary w-full text-sm"
                            >
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="card-glass max-w-3xl mx-auto p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                        Need a Custom Solution?
                    </h3>
                    <p className="text-gray-300 mb-6">
                        We're ready to discuss your specific requirements and provide tailored equipment solutions
                        for your project.
                    </p>
                    <button onClick={scrollToContact} className="btn btn-primary">
                        Get in Touch
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;
