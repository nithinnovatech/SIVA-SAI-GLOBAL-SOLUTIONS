import React from 'react';

const About = () => {
    const companyStats = [
        {
            icon: '🏗',
            number: '30-300+',
            label: 'Ton Capacity Range'
        },
        {
            icon: '🕐',
            number: '24/7',
            label: 'Service Availability'
        },
        {
            icon: '✓',
            number: '100%',
            label: 'Equipment Reliability'
        },
        {
            icon: '⚙',
            number: '3',
            label: 'Engineering Disciplines'
        }
    ];

    const features = [
        {
            icon: '👷',
            title: 'Experienced Workforce',
            description: 'Although newly established, we operate with highly experienced technical professionals.'
        },
        {
            icon: '🔧',
            title: 'In-House Engineering Team',
            description: 'Dedicated Hydraulic, Electrical, and Mechanical Engineers ensure equipment excellence.'
        },
        {
            icon: '🎯',
            title: 'Safety-Focused',
            description: 'All operations prioritize safety with well-maintained equipment and trained operators.'
        },
        {
            icon: '🚀',
            title: 'Scalable Solutions',
            description: 'Ready to add equipment based on your specific operational requirements.'
        }
    ];

    return (
        <section id="about" className="section relative bg-gradient-to-b from-black to-gray-900">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="text-gradient">Siva Sai Global Solutions</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        A professionally driven organization offering comprehensive solutions in lifting equipment hire
                        and mechanical maintenance services.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {companyStats.map((stat, index) => (
                        <div key={index} className="card-glass text-center hover-lift">
                            <div className="text-4xl mb-3">{stat.icon}</div>
                            <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold mb-6 text-center">
                        <span className="text-gradient">Professional Excellence</span> in Industrial Services
                    </h3>
                    <div className="max-w-4xl mx-auto space-y-4 text-lg text-gray-300">
                        <p>
                            We are pleased to introduce our firm as a professionally driven organization offering comprehensive
                            solutions in the hire of lifting equipment and mechanical maintenance services.
                        </p>
                        <p>
                            Although newly established, we operate with a highly experienced technical workforce, enabling us to
                            deliver reliable, efficient, and safety-focused services across diverse industrial operations.
                        </p>
                        <p>
                            Our in-house team of qualified engineers ensures all equipment is maintained in excellent working
                            condition at all times.
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <div key={index} className="card hover-lift text-center">
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h4 className="text-xl font-bold mb-3 text-white">{feature.title}</h4>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Mission Statement */}
                <div className="card-glass max-w-4xl mx-auto p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-gradient">Our Mission</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        To provide tailored lifting and maintenance solutions that ensure operational excellence, minimize downtime,
                        and deliver consistent performance on every project through our well-maintained equipment and expert
                        engineering support.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
