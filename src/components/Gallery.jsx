import React, { useState } from 'react';

const Gallery = () => {
    const images = [
        {
            src: '/photos/IMG-20251210-WA0004.jpg',
            alt: 'Heavy Lifting Project 1'
        },
        {
            src: '/photos/IMG-20251210-WA0008.jpg',
            alt: 'Heavy Lifting Project 2'
        },
        {
            src: '/photos/IMG-20251210-WA0009.jpg',
            alt: 'Heavy Lifting Project 3'
        },
        {
            src: '/photos/IMG-20251210-WA0010.jpg',
            alt: 'Heavy Lifting Project 4'
        },
        {
            src: '/photos/IMG-20251210-WA0011.jpg',
            alt: 'Heavy Lifting Project 5'
        },
        {
            src: '/photos/IMG-20251210-WA0012.jpg',
            alt: 'Heavy Lifting Project 6'
        }
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="gallery" className="section relative bg-black">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our Work <span className="text-gradient">Gallery</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Glimpses of our challenging projects and heavy lifting operations
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
                            onClick={() => setSelectedImage(image)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <svg
                                        className="w-10 h-10 text-primary-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fade-in"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-primary-500 transition-colors z-50"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-scale-up"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;
