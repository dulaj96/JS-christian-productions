const About = () => {
    return (
        <>
            {/* Story/Timeline Section */}
            <section className="bg-white dark:bg-gray-900/50 py-24">
                <div className="max-w-300 mx-auto px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-[#0d121b] dark:text-white text-4xl font-black mb-4">Our Story</h2>
                        <div className="w-20 h-1 bg-yellow-600 mx-auto rounded-full"></div>
                    </div>
                    <div className="relative ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2">
                        {[
                            { year: '2008', title: 'The Vision Begins', text: 'Founded as a small audio recording studio dedicated to capturing local worship sessions with excellence.', align: 'right' },
                            { year: '2014', title: 'Digital Expansion', text: 'Launched our first mobile application, bridging music production with interactive scripture engagement.', align: 'left' },
                            { year: '2020', title: 'Global Outreach', text: 'Developed online training platforms to equip media ministries worldwide during the global shift to digital worship.', align: 'right' }
                        ].map((item, index, array) => (
                            <div key={item.year} className={`mb-12 relative md:w-1/2 ${item.align === 'left' ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'} pl-8`}>
                                {index !== array.length - 1 && (
                        <div className={`absolute w-0.5 bg-gray-600/40
                            ${item.align === 'left' ? 'md:left-auto md:-right-px left-2.25' : '-left-0.5'} 
                            top-5 h-[calc(100%+3rem)]`}>
                        </div>
                    )}
                                <div className={`absolute -left-2.75 ${item.align === 'left' ? 'md:left-auto md:-right-2.75' : 'md:-left-2.75'} top-0 size-5 bg-yellow-600 rounded-full ring-4 ring-white dark:ring-background-dark`}></div>
                                <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                    <span className="text-yellow-600 dark:text-yellow-400 font-bold text-sm">{item.year}</span>
                                    <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="max-w-300 mx-auto w-full px-6 lg:px-10 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-[#0d121b] dark:text-white text-4xl font-black mb-4">Meet the Team</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-500 max-w-2xl mx-auto">The dedicated individuals behind our ministry efforts, united by a passion for Christ and creative excellence.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {[
                        { name: 'Joshua Simon', role: 'Founder & Lead Producer', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWxa5hpeApe2dw-64on5Vsrc-M-eIHZj1HmDKW6JzQ0h-c5Qz6v9bDxgN-ADwtq0wbVLaBr32iwWaDoB509Vvy7iknjnu9CIf4aoILeDVyDaYOJggeH2tWCxqRqpKXG4Vhm8QL2M0H69h6p9B0_LyCHFZNIU-O7NSs55bMJHVdGjemdKsX8mvzIxi9O990w4_2crNKlGLkcul6fcoF6NWCYStr6lIrLaqeZ2ytPXOuztD47-xQMzheFNQYBvf0eYh0ONh49Gur5hA' },
                        { name: 'Sarah Grace', role: 'Director of Development', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8BWyMAZQ6CvYq_0PVma-fbIkqi9iglshKJSXCN0IfYZM6GhQIt3CWUqsfDyGKGF341FB6vTHK6GA2QNsCcSBqYYpYsYuIxjrnAem2Hk7YvWzqjRRrT96ai4f5inm34_oFzxl65eli6NikoU9fZ2jPf5r0OY-sc6ZIOB0voMyrCaRaoGgIDqOutSKYhPr8bwGyswb9n5gMtM-nhbng9Xl8sv_JJVHgSu7IYEOIdkeg6EtSEE3Vz8r8l5KU6wjHSGj_V4LjIaz1xF4' },
                        { name: 'David Mark', role: 'Media Consultant', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYTLQXJM9Auqnz0__QuCSmj-0Z1-1LbCDQ4FjOpp2RLZ_K4CAmiz6gopbVhAT8ow8RmC6w9Sy3JIz1vxmZfmEVi4f2Mzy1mzUhdrk7RmuThCnVRLA8F8K0YzdKVOeeRdpMpCRdZ-w9sW97aLC-pb5oVOeqOqT8MF-2AZc6VABtR23FqE6kuClpbx8qlaKVRdYuuo8KeNH_kiSBv7sXUfLPApMX3iZAoGHIn-inGb5Rr2iGfG2mTK2iNNVD8_n_o2fkwAck1Vql2hI' },
                        { name: 'Rachel Hope', role: 'Worship Coordinator', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXs9Tek2wOgsNgVRKubepB3wlhyl8Smm9f32IAdTtApHcupdA9Iw3YH4gbTzztHQ0GeJTEcR75PYgfdcqDCE4dGlqQcfVHV1J5zRWmcKHX4zj5liKHsiHdCTUK1flIcj_ojhOUvOBet59D80HWOznO78_1sIlSpEPuwrwMKp5em4avt-_6Gwsa_F1IxiQEXc27YbFOt3kgwCxQyX5O8rS6LKiApMoMLwRQvJt3kv121iNx2jgFdj-eo18tAWSx_Z-syiINwCb6Byk' }
                    ].map((member) => (
                        <div key={member.name} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="size-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg mb-4 bg-gray-200 group-hover:scale-110 transition-transform duration-500">
                                <img alt={member.name} className="w-full h-full object-cover" src={member.img} />
                            </div>
                            <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{member.name}</h3>
                            <p className="text-accent text-sm font-semibold">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

             {/* CTA Section */}
            <section className="max-w-300 mx-auto w-full px-6 lg:px-10 pb-20">
                <div className="bg-blue-600 rounded-2xl p-8 lg:p-16 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <span className="material-symbols-outlined text-9xl">church</span>
                    </div>
                    <h2 className="text-3xl font-black mb-6 relative z-10">Join Our Mission</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                        Whether you are a ministry looking for media solutions or a creative wanting to volunteer your skills, we would love to hear from you.
                    </p>
                    <button className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-[#c4a02d] transition-colors shadow-lg relative z-10">
                        Get In Touch
                    </button>
                </div>
            </section>
        </>
    );
};

export default About;
