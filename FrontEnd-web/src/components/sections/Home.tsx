const Home = () => {
    return (
        <>
            {/* Banner/Hero Section */}
            <section className="flex flex-col items-center justify-center">
                <div className="w-full">
                    <div className="p-0 md:p-6">
                        <div
                            className="flex min-h-[400px] flex-col gap-8 bg-cover bg-center bg-no-repeat md:rounded-xl items-center justify-center p-6 text-center shadow-2xl relative"
                            style={{
                                backgroundImage: `linear-gradient(rgba(10, 20, 50, 0.75) 0%, rgba(10, 20, 50, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0LMpi4YRaT7lmuXr560UWrxx3KMGa9L8NKKJZOFPljqwwR220Q_ms0Zty0Ma1h3xmQtLqfha6unYTSzJZxlt0m35utJYQcgbWLrHfIu0bywbTONL3SAVeBkBvqzJLMiRb4EQH0AZWaeqjn-TPHdN2XYet_nUw1o1S-cQoGBmB7KERDdmFfVzBVKyTvLRbiV6AiwyD_7Wnwb-kFc1-0SYEY9oBIBuLTmPy_RQ5gGXS4y_KED6GAYEOtZ1eoAeVah4xPXlvm7UoKjU")`
                            }}
                        >
                            <div className="flex flex-col gap-4 max-w-3xl animate-float">
                                <h4 className="text-yellow-500 font-bold uppercase tracking-widest text-sm">Our Heart & Ministry</h4>
                                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
                                    About JS Christian Productions
                                </h1>
                                <p className="text-gray-200 text-lg font-medium md:text-xl">
                                    Bridging the gap between sacred worship and modern technology to spread the Gospel across the globe.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Welcome Content Section */}
            <section className="max-w-[1200px] mx-auto w-full px-6 lg:px-10 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-1 h-8 bg-yellow-500 rounded-full"></div>
                            <h2 className="text-blue-600 dark:text-blue-400 text-3xl font-extrabold tracking-tight">Heart for Worship & Tech</h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                            At JS Christian Productions, we believe that technology is a divine gift designed to amplify the message of Christ. Our ministry was born out of a desire to provide churches and worship leaders with the tools they need to reach a digital-first generation.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                            From high-fidelity music production to custom-built ministry applications, our focus remains steadfast: ensuring that every piece of media we produce points back to the Creator. We are technologists with the heart of a worshipper.
                        </p>
                        <div className="flex gap-4 pt-4">
                            {[
                                { icon: 'auto_awesome', title: 'Spirituality' },
                                { icon: 'integration_instructions', title: 'Innovation' },
                                { icon: 'groups', title: 'Community' }
                            ].map((item) => (
                                <div key={item.title} className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 flex-1 hover:glow-border transition-all">
                                    <span className="material-symbols-outlined text-yellow-500 text-3xl mb-2">{item.icon}</span>
                                    <h5 className="font-bold">{item.title}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                            <img
                                alt="Technology in ministry"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc7rMvwEPspRwwF12KyuIvpOmOOilAeTT1JIaiXGaXewrlT2fbqN76Cbdbi84vVb_iqV81UC7DgbofKd6Z0Yfzjkr6ygMCAizFIJn5dNFSALSun34Vt8Aiv79xsRPxkLJsrAdOsgbmm2XRZSrU9eeCGGEcim6YQEgTj3bzsXJOjQ2Xsa2BnnZEyw1Gs8PDYjrL8Cw3JkAVuBuEU0X5-1ZVssTp2OpIIiCS3Ho9yla3GIcpN-TZhbu4w1S0vxSDy_Ltd_bbMdOZHD4"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-blue-600 p-6 rounded-xl shadow-xl text-white hidden md:block">
                            <p className="text-4xl font-bold">15+</p>
                            <p className="text-xs uppercase tracking-widest opacity-80">Years of Service</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
