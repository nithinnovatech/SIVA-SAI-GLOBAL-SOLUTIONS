import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    // Email address for receiving contact form submissions
    const businessEmail = "sivasaiglobalsolutions@gmail.com";

    const handleSubmit = (e) => {
        e.preventDefault();

        // Get service label
        const serviceLabels = {
            'cranes': 'Cranes for Hire',
            'mechanical': 'Mechanical Maintenance',
            'crane-services': 'Crane Services',
            'hydraulic': 'Hydraulic Maintenance',
            'custom': 'Custom Equipment Solutions'
        };
        const serviceText = formData.service ? serviceLabels[formData.service] : 'Not specified';

        // Create email subject
        const subject = `New Inquiry from ${formData.fullName} - ${serviceText}`;

        // Create email body with form data
        const body = `
New Contact Form Submission
============================

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Service Interest: ${serviceText}

Message:
${formData.message}

============================
Sent from Siva Sai Global Solutions Website
        `.trim();

        // Create mailto link
        const mailtoLink = `mailto:${businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open email client
        window.location.href = mailtoLink;

        // Show confirmation
        alert('Opening your email client... Please send the email to complete your inquiry.');

        // Reset form
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            service: '',
            message: ''
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: '📱',
            title: 'Phone',
            value: '+91 9908617723 / 9617373999',
            link: 'tel:+919908617723'
        },
        {
            icon: '✉',
            title: 'Email',
            value: 'sivasaiglobalsolutions@gmail.com',
            link: 'mailto:sivasaiglobalsolutions@gmail.com'
        },
        {
            icon: '📍',
            title: 'Office Address',
            value: 'Flat No.110, Anjanadri - D block, Suvarna Srinivasam Apartments, Tungalam, Autonagar, Visakhapatnam - 530012',
            link: null
        },
        {
            icon: '🕐',
            title: 'Business Hours',
            value: '24/7 Service - 365 Days',
            link: null
        }
    ];

    const socialLinks = [
        { icon: '📘', name: 'Facebook', url: '#' },
        { icon: '📸', name: 'Instagram', url: '#' },
        { icon: '💼', name: 'LinkedIn', url: '#' }
    ];

    return (
        <section id="contact" className="section relative bg-gradient-to-b from-gray-900 to-black">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get in <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Ready to discuss your project? Contact us today for a consultation
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="card">
                        <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                    className="input"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                    className="input"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                    Phone *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Your phone number"
                                    required
                                    className="input"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                                    Service Interest
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="select"
                                >
                                    <option value="">Select a service</option>
                                    <option value="cranes">Cranes for Hire</option>
                                    <option value="mechanical">Mechanical Maintenance</option>
                                    <option value="crane-services">Crane Services</option>
                                    <option value="hydraulic">Hydraulic Maintenance</option>
                                    <option value="custom">Custom Equipment Solutions</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project..."
                                    rows="5"
                                    required
                                    className="textarea"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-full">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        <div className="card">
                            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                                        <div className="text-3xl">{info.icon}</div>
                                        <div className="flex-1">
                                            <div className="text-sm text-gray-400 mb-1">{info.title}</div>
                                            {info.link ? (
                                                <a href={info.link} className="text-white hover:text-primary-500 transition-colors font-medium">
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <div className="text-white font-medium">{info.value}</div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="card">
                            <h3 className="text-xl font-bold mb-4 text-white">Connect With Us</h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-600 transition-all transform hover:scale-110"
                                        title={social.name}
                                    >
                                        <span className="text-2xl">{social.icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Why Choose Section */}
                        <div className="card-glass">
                            <h3 className="text-xl font-bold mb-4 text-gradient">Why Choose Us?</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center text-gray-300">
                                    <span className="text-primary-500 mr-2">✓</span>
                                    Experienced technical workforce
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <span className="text-primary-500 mr-2">✓</span>
                                    In-house engineering team
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <span className="text-primary-500 mr-2">✓</span>
                                    Well-maintained equipment
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <span className="text-primary-500 mr-2">✓</span>
                                    24/7 availability
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
