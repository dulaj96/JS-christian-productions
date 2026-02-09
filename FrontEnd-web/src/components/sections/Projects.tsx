import { useState } from 'react';

interface Project {
    id: number;
    title: string;
    category: 'Apps' | 'Music' | 'Video' | 'Consultations';
    description: string;
    image: string;
    icon: string;
}

// Mock Data 
const projectsData: Project[] = [
    {
        id: 1,
        title: 'The Rock of Praise',
        category: 'Apps',
        description: 'A comprehensive mobile application designed for global worship leaders to access chord charts and lyrics.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400',
        icon: 'tablet_mac'
    },
    {
        id: 2,
        title: 'Light for the Journey',
        category: 'Video',
        description: 'Cinematic daily devotional series featuring landscape meditation and scriptural teachings.',
        image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=400',
        icon: 'movie'
    },
    {
        id: 3,
        title: 'Sovereign Grace Live',
        category: 'Music',
        description: 'Professional multi-track recording and mixing for the 2023 regional worship conference.',
        image: 'https://images.unsplash.com/photo-1514525253361-b83f859b73c0?auto=format&fit=crop&q=80&w=400',
        icon: 'album'
    },
    {
        id: 4,
        title: 'Stewardship Tracker',
        category: 'Apps',
        description: 'Financial management tool for small ministries to track tithes and operational expenses.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400',
        icon: 'tablet_mac'
    },
    {
        id: 5,
        title: 'Grace Community Audit',
        category: 'Consultations',
        description: 'A 6-month strategic overhaul of a local church\'s digital presence and broadcast infrastructure.',
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400',
        icon: 'hub'
    }
];

const Projects = () => {
    const [activeTab, setActiveTab] = useState('All');

    // Filtering Logic
    const filteredProjects = activeTab === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === activeTab);

    const tabs = ['All', 'Apps', 'Music', 'Video', 'Consultations'];

    return (
        <section id="projects" className="bg-background-light dark:bg-background-dark min-h-screen">
            {/* Hero Section */}
            <div className="bg-[#0a1432] text-white py-16 px-6 lg:px-20 border-b border-[#d4af37]/20">
                <div className="max-w-[1200px] mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-4">Ministry Projects Portfolio</h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Explore our diverse body of work dedicated to advancing the Kingdom through technology, art, and strategic consultation.
                    </p>
                </div>
            </div>

            {/* Sticky Filter Tabs */}
            <div className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-[72px] z-40">
                <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === tab
                                    ? 'bg-[#d4af37] text-white shadow-md'
                                    : 'bg-[#0a1432] text-white/80 hover:bg-[#0a1432]/90 hover:text-white'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Project Grid */}
            <main className="max-w-[1200px] mx-auto w-full px-6 lg:px-10 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-transparent hover:border-[#d4af37] transition-all duration-300"
                        >
                            <div
                                className="w-full aspect-[4/3] bg-center bg-cover relative"
                                style={{ backgroundImage: `url(${project.image})` }}
                            >
                                <div className="absolute inset-0 bg-[#0a1432]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="bg-white text-[#0a1432] px-4 py-2 rounded font-bold text-sm cursor-pointer">
                                        View Details
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="material-symbols-outlined text-sm text-[#d4af37]">{project.icon}</span>
                                    <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mt-2 mb-1 dark:text-white">{project.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 bg-[#1152d4]/5 dark:bg-[#1152d4]/10 rounded-2xl p-10 text-center border border-[#1152d4]/20">
                    <h3 className="text-2xl font-bold mb-4">Have a Vision for Your Ministry?</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
                        We are ready to partner with you to bring your creative projects to life with excellence and spiritual depth.
                    </p>
                    <button className="bg-[#1152d4] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#1152d4]/90 transition-all flex items-center gap-2 mx-auto">
                        <span>Start Your Project</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </div>
            </main>
        </section>
    );
};

export default Projects;