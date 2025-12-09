import React from 'react';

const Stats = () => {
    const statistics = [
        {
            icon: '🏗',
            title: '30-300+ Tons',
            description: 'Complete range of lifting equipment'
        },
        {
            icon: '⚙',
            title: 'Expert Team',
            description: 'Qualified Hydraulic, Electrical & Mechanical Engineers'
        },
        {
            icon: '🕐',
            title: '24/7 Service',
            description: 'Available 365 days a year'
        }
    ];

    return (
        <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {statistics.map((stat, index) => (
                        <div
                            key={index}
                            className="card-glass text-center hover-lift p-8 group"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-gradient">
                                {stat.title}
                            </h3>
                            <p className="text-lg text-gray-300">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
