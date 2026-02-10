interface ServiceItem {
    id: number;
    title: string;
    image: string;
    description: string;
    icon: string;
    features: string[];
    buttonText: string;
    isReversed: boolean; // to decide picture should be left or right side
}

// Services Data
const servicesData: ServiceItem[] = [
    {
        id: 1,
        title: 'Music Production',
        image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop',
        description: 'Elevate your worship sound with our world-class recording and mastering services. We specialize in capturing the spiritual essence of your music while maintaining professional industry standards.',
        icon: 'album',
        features: ['Professional Multi-track Recording', 'Advanced Mixing & Mastering', 'Live Worship Capture', 'Vocal Tuning & Editing'],
        buttonText: 'Request Quote',
        isReversed: false
    },
    {
        id: 2,
        title: 'App & Web Development',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop',
        description: 'Connect with your congregation wherever they are. We build custom, intuitive digital platforms—from mobile apps that house your media to robust church websites.',
        icon: 'smartphone',
        features: ['iOS & Android Custom Apps', 'Responsive Church Websites', 'Member Management Portals', 'Integrated Giving Systems'],
        buttonText: 'Inquire',
        isReversed: true // picture on the right side
    },
    {
        id: 3,
        title: 'Video Production',
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop',
        description: 'Visual storytelling is a powerful tool for ministry. We produce high-quality sermon videos, ministry documentaries, and promotional content with cinematic clarity.',
        icon: 'videocam',
        features: ['4K Sermon Recording & Editing', 'Live Stream Setup & Management', 'Ministry Impact Documentaries', 'Motion Graphics & Title Design'],
        buttonText: 'Request Quote',
        isReversed: false
    },
    {
        id: 4,
        title: 'Media Consultation',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
        description: 'Our experts provide strategic guidance for church media departments. We help you audit your current equipment, train your volunteers, and design a long-term media strategy.',
        icon: 'forum',
        features: ['Tech Infrastructure Audits', 'Volunteer Team Training', 'Budget Planning & Gear Advice', 'Content Strategy Workshops'],
        buttonText: 'Inquire',
        isReversed: true
    }
];

const Services = () => {
    return (
        <section id="services" className="bg-white dark:bg-background-dark font-display overflow-x-hidden">

            {/* --- Header Section --- */}
            <section className="bg-[#0a1432] text-white py-16 lg:py-24">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
                        Our Professional Services
                    </h1>
                    <p className="text-blue-100 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                        We bridge the gap between faith and technology, providing high-impact media solutions designed specifically for modern worship and ministry outreach.
                    </p>
                </div>
            </section>

            {/* --- Services Loop --- */}
            <main>
                {servicesData.map((service, index) => (
                    <section
                        key={service.id}
                        className={`py-20 border-b border-gray-100 dark:border-gray-800 ${index % 2 !== 0 ? 'bg-gray-50 dark:bg-gray-900/30' : ''
                            }`}
                    >
                        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                            {/* Icon Circle (Image area) */}
                            <div className={`lg:col-span-5 flex justify-center ${service.isReversed ? 'lg:order-2' : ''}`}>
                                <div className="relative group/img size-64 md:size-80 transition-transform hover:scale-105 duration-500">
                                    <div className="absolute inset-0 rounded-full border-4 border-[#d4af37]/20 group-hover/img:border-[#d4af37]/50 transition-colors duration-500"></div>
                                    <div className="absolute inset-4 rounded-full overflow-hidden bg-blue-50 dark:bg-gray-800/50 flex items-center justify-center shadow-xl">
                                        {service.image ? (
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                                            />
                                        ) : (
                                            <span className="material-symbols-outlined text-9xl text-[#1152d4]">{service.icon}</span>
                                        )}
                                        <div className="absolute inset-0 bg-[#0a1432]/20 group-hover/img:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-white dark:bg-[#0a1432] p-4 rounded-full shadow-lg border border-gray-100 dark:border-gray-700 z-10 group-hover/img:rotate-12 transition-transform">
                                        <span className="material-symbols-outlined text-[#1152d4] text-2xl">{service.icon}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className={`lg:col-span-7 ${service.isReversed ? 'lg:order-1' : ''}`}>
                                <h2 className="text-3xl font-bold mb-6 text-[#0a1432] dark:text-white flex items-center gap-4">
                                    <span className="w-8 h-1 bg-[#d4af37] rounded-full"></span>
                                    {service.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features List */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-400">
                                            <span className="material-symbols-outlined text-[#d4af37] text-xl">check_circle</span>
                                            <span className="text-sm md:text-base font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Action Button */}
                                <a
                                    href="#contact-form"
                                    className="inline-block text-center bg-[#d4af37] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#c4a02d] transition-all transform hover:-translate-y-1 shadow-md uppercase tracking-wider text-sm cursor-pointer"
                                >
                                    {service.buttonText}
                                </a>
                            </div>

                        </div>
                    </section>
                ))}
            </main>
        </section>
    );
};

export default Services;