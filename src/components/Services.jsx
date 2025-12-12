import React from 'react';
import serviceImg1 from '../assets/service-1.png';
import serviceImg2 from '../assets/service-2.png';
import serviceImg3 from '../assets/service-3.png';
import serviceImg4 from '../assets/service-4.png';
import serviceImg5 from '../assets/service-5.png';

const Services = () => {
    // Replace with your WhatsApp number (include country code without +)
    const phoneNumber = "919876543210"; // Example: 91 for India + phone number

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
            ],
            whatsappMessage: 'Hi! I am interested in Cranes for Hire service. I would like to know more about Telescopic Mobile Cranes, Crawler Cranes, and Boomlifts availability.'
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
            ],
            whatsappMessage: 'Hi! I am interested in Mechanical Maintenance Services. I need support for industrial equipment maintenance.'
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
            ],
            whatsappMessage: 'Hi! I am interested in Crane Services for harbour and port equipment. Please provide more details.'
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
            ],
            whatsappMessage: 'Hi! I need Hydraulic Maintenance services. I would like to discuss hydraulic system analysis and repair options.'
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
            ],
            whatsappMessage: 'Hi! I am looking for Custom Equipment Solutions tailored to my project requirements. Please help me with a consultation.'
        }
    ];

    const handleWhatsAppBook = (message) => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
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

                            {/* WhatsApp Book Now Button */}
                            <button
                                onClick={() => handleWhatsAppBook(service.whatsappMessage)}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                                style={{
                                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                                    color: 'white',
                                    boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
                                }}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 fill-current"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Book on WhatsApp
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
                    <button
                        onClick={() => handleWhatsAppBook('Hi! I need a custom equipment solution for my project. Please help me with consultation.')}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                        style={{
                            background: 'linear-gradient(135deg, #F5A623 0%, #D4880F 100%)',
                            color: '#1a1612',
                            boxShadow: '0 4px 20px rgba(245, 166, 35, 0.4)'
                        }}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="w-5 h-5 fill-current"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Get in Touch
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;
