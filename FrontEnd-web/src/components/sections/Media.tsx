interface Video {
    id: number;
    title: string;
    duration: string;
    views: string;
    timeAgo: string;
    thumbnail: string;
}

// interface Track {
//     id: string;
//     number: string;
//     title: string;
//     duration: string;
// }

// 2. Mock Data
const videos: Video[] = [
    { id: 1, title: 'Global Worship Night: Highlights 2024', duration: '12:45', views: '24K', timeAgo: '2 days ago', thumbnail: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800' },
    { id: 2, title: 'How to Use: The Rock of Praise App', duration: '08:12', views: '10K', timeAgo: '1 week ago', thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800' },
    { id: 3, title: 'Light for the Journey: Morning Meditations', duration: '15:30', views: '18K', timeAgo: '3 weeks ago', thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800' }
];

// const playlist: Track[] = [
//     { id: '2', number: '02', title: 'Morning Star', duration: '4:20' },
//     { id: '3', number: '03', title: 'Oceans of Mercy', duration: '6:05' },
//     { id: '4', number: '04', title: 'The Redemption Song', duration: '3:58' }
// ];

const MediaHub = () => {
    return (
        <div id="media" className="bg-background-light dark:bg-background-dark font-display">

            {/* --- Page Header --- */}
            <section className="bg-[#0a1432] dark:bg-background-dark pt-12 pb-8 border-b border-gray-100 dark:border-gray-800">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <h1 className="text-4xl md:text-5xl font-black text-white dark:text-white mb-4">Media Hub</h1>
                    <p className="text-white dark:text-gray-400 max-w-2xl text-lg">
                        A central location for all digital worship content, ministry updates, and spiritual resources.
                    </p>
                </div>
            </section>

            {/* --- Video Section --- */}
            <section className="max-w-[1200px] mx-auto w-full px-6 lg:px-10 py-12">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-1 h-8 bg-[#d4af37] rounded-full"></div>
                        <h2 className="text-2xl font-bold dark:text-white">Recent Videos</h2>
                    </div>
                    <a href="#" className="text-[#1152d4] font-semibold flex items-center gap-1 hover:underline text-sm">
                        View all on YouTube <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((vid) => (
                        <div key={vid.id} className="group cursor-pointer">
                            <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-gray-200 shadow-sm">
                                <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-2 py-1 rounded">{vid.duration}</div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                    <div className="size-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="font-bold text-lg leading-tight mb-1 group-hover:text-[#1152d4] transition-colors dark:text-white">
                                {vid.title}
                            </h3>
                            <p className="text-sm text-gray-500">{vid.views} views • {vid.timeAgo}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Audio Player Section --- */}
            {/* <section className="bg-gradient-to-br from-[#0a1432] to-[#112255] py-20 text-white">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-1 h-8 bg-[#d4af37] rounded-full"></div>
                        <h2 className="text-3xl font-bold">Latest Worship Tracks</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"> */}
            {/* Album Art */}
            {/* <div className="lg:col-span-5">
                            <div className="relative group max-w-[400px] mx-auto lg:max-w-none">
                                <img
                                    src="https://images.unsplash.com/photo-1514525253361-b83f859b73c0?q=80&w=800"
                                    alt="Album Cover"
                                    className="w-full aspect-square object-cover rounded-2xl shadow-2xl ring-1 ring-white/10"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                                    <span className="material-symbols-outlined text-6xl">play_circle</span>
                                </div>
                            </div>
                        </div> */}

            {/* Controls & Playlist */}
            {/* <div className="lg:col-span-7 flex flex-col gap-8">
                            <div>
                                <span className="text-[#d4af37] font-bold tracking-widest uppercase text-xs">Now Playing</span>
                                <h3 className="text-4xl md:text-5xl font-black mt-2">Everlasting Grace</h3>
                                <p className="text-gray-400 text-xl mt-2 font-medium">JS Christian Productions ft. Worship Team</p>
                            </div> */}

            {/* Custom Player UI */}
            {/* <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex gap-6 items-center">
                                        <span className="material-symbols-outlined cursor-pointer hover:text-[#d4af37] text-gray-400">shuffle</span>
                                        <span className="material-symbols-outlined cursor-pointer hover:text-[#d4af37]">skip_previous</span>
                                        <div className="size-14 bg-[#d4af37] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg shadow-[#d4af37]/20">
                                            <span className="material-symbols-outlined text-white text-3xl">pause</span>
                                        </div>
                                        <span className="material-symbols-outlined cursor-pointer hover:text-[#d4af37]">skip_next</span>
                                        <span className="material-symbols-outlined cursor-pointer hover:text-[#d4af37] text-gray-400">repeat</span>
                                    </div>
                                    <span className="material-symbols-outlined cursor-pointer hover:text-[#d4af37]">volume_up</span>
                                </div>
                                <div className="relative w-full h-1.5 bg-white/10 rounded-full">
                                    <div className="absolute top-0 left-0 w-1/3 h-full bg-[#d4af37] rounded-full"></div>
                                </div>
                                <div className="flex justify-between mt-2 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                                    <span>1:45</span>
                                    <span>5:12</span>
                                </div>
                            </div> */}

            {/* Tracklist */}
            {/* <div className="flex flex-col gap-1">
                                {playlist.map((track) => (
                                    <div key={track.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                                        <div className="flex items-center gap-4">
                                            <span className="text-gray-500 font-bold text-xs w-4">{track.number}</span>
                                            <span className="font-semibold group-hover:text-[#d4af37]">{track.title}</span>
                                        </div>
                                        <span className="text-gray-500 text-xs font-bold">{track.duration}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* --- Gallery Section --- */}
            <section className="bg-white dark:bg-background-dark py-20">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                    <div className="flex items-center justify-between mb-12">
                        <div className="flex items-center gap-3">
                            <div className="w-1 h-8 bg-[#d4af37] rounded-full"></div>
                            <h2 className="text-3xl font-bold dark:text-white">Gallery</h2>
                        </div>
                        <button className="text-xs font-bold border-2 border-[#1152d4] text-[#1152d4] px-6 py-2 rounded-lg hover:bg-[#1152d4] hover:text-white transition-all">
                            View Full Gallery
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=600",
                            "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=600",
                            "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=600",
                            "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=600"
                        ].map((img, i) => (
                            <div key={i} className="aspect-square overflow-hidden rounded-xl shadow-sm">
                                <img src={img} alt="Ministry" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                            </div>
                        ))}
                        <div className="md:col-span-2 aspect-[2/1] overflow-hidden rounded-xl shadow-sm">
                            <img src="https://images.unsplash.com/photo-1514525253361-b83f859b73c0?q=80&w=800" alt="Large" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="md:col-span-2 aspect-[2/1] overflow-hidden rounded-xl shadow-sm">
                            <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800" alt="Large" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MediaHub;