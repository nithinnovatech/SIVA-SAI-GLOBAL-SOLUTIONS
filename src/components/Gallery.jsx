import React, { useState } from 'react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');

    // Gallery images using local photos from public/photos folder
    const galleryImages = [
        {
            id: 1,
            src: '/photos/IMG-20251210-WA0003.jpg',
            title: 'Lifting Equipment',
            category: 'lifting',
            description: 'Professional lifting equipment services'
        },
        {
            id: 2,
            src: '/photos/IMG-20251210-WA0004.jpg',
            title: 'Industrial Maintenance',
            category: 'maintenance',
            description: 'Scheduled maintenance of industrial equipment'
        },
        {
            id: 3,
            src: '/photos/IMG-20251210-WA0008.jpg',
            title: 'Equipment Installation',
            category: 'lifting',
            description: 'Heavy-duty equipment installation'
        },
        {
            id: 4,
            src: '/photos/IMG-20251210-WA0009.jpg',
            title: 'Mechanical Repair',
            category: 'maintenance',
            description: 'Precision mechanical repair services'
        },
        {
            id: 5,
            src: '/photos/IMG-20251210-WA0010.jpg',
            title: 'Safety Inspection',
            category: 'inspection',
            description: 'Thorough safety inspection of equipment'
        },
        {
            id: 6,
            src: '/photos/IMG-20251210-WA0011.jpg',
            title: 'Crane Services',
            category: 'lifting',
            description: 'Professional crane installation and maintenance'
        },
        {
            id: 7,
            src: '/photos/IMG-20251210-WA0012.jpg',
            title: 'Welding Services',
            category: 'maintenance',
            description: 'Industrial welding and fabrication'
        },
        {
            id: 8,
            src: '/photos/IMG-20251210-WA0013.jpg',
            title: 'Equipment Certification',
            category: 'inspection',
            description: 'Equipment safety certification process'
        },
        {
            id: 9,
            src: '/photos/IMG-20251210-WA0014.jpg',
            title: 'Hoist Installation',
            category: 'lifting',
            description: 'Professional hoist installation services'
        },
        {
            id: 10,
            src: '/photos/IMG-20251210-WA0016.jpg',
            title: 'Industrial Equipment',
            category: 'maintenance',
            description: 'Industrial equipment maintenance'
        },
        {
            id: 11,
            src: '/photos/IMG-20251210-WA0017.jpg',
            title: 'Safety Check',
            category: 'inspection',
            description: 'Comprehensive safety checks'
        },
        {
            id: 12,
            src: '/photos/IMG-20251210-WA0018.jpg',
            title: 'Machinery Repair',
            category: 'maintenance',
            description: 'Expert machinery repair services'
        },
        {
            id: 13,
            src: '/photos/IMG-20251210-WA0019.jpg',
            title: 'Lifting Solutions',
            category: 'lifting',
            description: 'Custom lifting solutions'
        },
        {
            id: 14,
            src: '/photos/IMG-20251210-WA0020.jpg',
            title: 'Equipment Service',
            category: 'maintenance',
            description: 'Regular equipment servicing'
        },
        {
            id: 15,
            src: '/photos/IMG-20251210-WA0021.jpg',
            title: 'Quality Inspection',
            category: 'inspection',
            description: 'Quality inspection services'
        },
        {
            id: 16,
            src: '/photos/IMG-20251210-WA0022.jpg',
            title: 'Heavy Equipment',
            category: 'lifting',
            description: 'Heavy equipment handling'
        },
        {
            id: 17,
            src: '/photos/IMG-20251210-WA0023.jpg',
            title: 'Mechanical Work',
            category: 'maintenance',
            description: 'Professional mechanical work'
        },
        {
            id: 18,
            src: '/photos/IMG-20251210-WA0024.jpg',
            title: 'Safety Audit',
            category: 'inspection',
            description: 'Complete safety audit services'
        },
        {
            id: 19,
            src: '/photos/IMG-20251210-WA0025.jpg',
            title: 'Equipment Setup',
            category: 'lifting',
            description: 'Professional equipment setup'
        },
        {
            id: 20,
            src: '/photos/WhatsApp Image 2025-12-10 at 10.03.41_fcaca642.jpg',
            title: 'Project Work',
            category: 'maintenance',
            description: 'Completed project work'
        },
        {
            id: 21,
            src: '/photos/WhatsApp Image 2025-12-10 at 10.30.02_060e5272.jpg',
            title: 'On-site Services',
            category: 'maintenance',
            description: 'Professional on-site services'
        }
    ];

    const categories = [
        { id: 'all', label: 'All Work' },
        { id: 'lifting', label: 'Lifting Equipment' },
        { id: 'maintenance', label: 'Maintenance' },
        { id: 'inspection', label: 'Inspection' }
    ];

    const filteredImages = activeCategory === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    return (
        <section id="gallery" className="section bg-gradient-to-b from-gray-900 to-black py-20">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{
                            background: 'linear-gradient(135deg, #F5A623 0%, #D4880F 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        Our Work Gallery
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Explore our portfolio of completed projects showcasing our expertise in lifting equipment and mechanical maintenance services.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === cat.id
                                ? 'text-gray-900'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                            style={{
                                background: activeCategory === cat.id
                                    ? 'linear-gradient(135deg, #F5A623 0%, #D4880F 100%)'
                                    : undefined
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredImages.map((image, index) => (
                        <div
                            key={image.id}
                            className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-500 hover:scale-105"
                            onClick={() => setSelectedImage(image)}
                            style={{
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            {/* Image */}
                            <div className="aspect-square overflow-hidden">
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>

                            {/* Overlay */}
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                            >
                                <h3
                                    className="text-lg font-bold mb-1"
                                    style={{ color: '#F5A623' }}
                                >
                                    {image.title}
                                </h3>
                                <p className="text-gray-300 text-sm">{image.description}</p>
                            </div>

                            {/* Border Glow on Hover */}
                            <div
                                className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-amber-500/50 transition-all duration-300"
                                style={{
                                    boxShadow: 'inset 0 0 0 0 rgba(245, 166, 35, 0)'
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white hover:text-amber-500 transition-colors"
                            onClick={() => setSelectedImage(null)}
                            aria-label="Close"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div
                            className="max-w-4xl max-h-[90vh] relative"
                            onClick={e => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                            />
                            <div className="mt-4 text-center">
                                <h3
                                    className="text-2xl font-bold mb-2"
                                    style={{ color: '#F5A623' }}
                                >
                                    {selectedImage.title}
                                </h3>
                                <p className="text-gray-400">{selectedImage.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;
