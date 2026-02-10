import React, { useState } from 'react';

const Partnerships = () => {
  // Form State Management
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    type: 'Media Production',
    vision: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inquiry Sent:', formData);
    alert('Thank you! Your inquiry has been sent.');
  };

  return (
    <div id="partnerships" className="bg-background-light dark:bg-background-dark font-display">

      {/* --- Hero Section --- */}
      <section className="relative bg-[#101622] py-20 px-6 lg:px-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#1152d433_0%,_transparent_70%)]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-white text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
            Building the Kingdom <span className="text-[#d4af37]">Together</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-10">
            We believe in the power of unity. Discover how your ministry or organization can partner with us to create impactful media and technology for Christ.
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center justify-center bg-[#d4af37] hover:bg-[#c4a02d] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl hover:shadow-[#d4af37]/20"
          >
            Start a Collaboration
            <span className="material-symbols-outlined ml-2">handshake</span>
          </a>
        </div>
      </section>

      {/* --- Partners Grid (Logos) --- */}
      <section className="py-20 px-6 lg:px-20 bg-white dark:bg-gray-900/50">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="w-12 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">Trusted Ministry Partners</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-12">
            Working alongside leading organizations to expand the reach of the Gospel.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['church', 'auto_awesome', 'castle', 'festival', 'fort'].map((icon, i) => (
              <div key={i} className="flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
                <span className="material-symbols-outlined text-4xl text-gray-400">{icon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Why Partner Section --- */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[400px]">
            <img
              alt="Team collaborating"
              className="absolute inset-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
            />
            <div className="absolute inset-0 bg-[#1152d4]/20 backdrop-blur-[2px]"></div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold dark:text-white">Why Partner with Us?</h2>

            <div className="space-y-6">
              {[
                { title: 'Shared Mission', desc: 'Our foundation is Christ-centered. Every project is focused on the Great Commission.', icon: 'verified' },
                { title: 'Professional Synergy', desc: 'Combine your ministry vision with our technical expertise.', icon: 'groups' },
                { title: 'Expanded Impact', desc: 'Reach more souls and equip more worshipers globally.', icon: 'trending_up' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="size-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#d4af37]">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg dark:text-white">{item.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact Form Section --- */}
      <section className="py-24 px-6 lg:px-20" id="contact-form">
        <div className="max-w-[1000px] mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100 dark:border-gray-700">

          {/* Left Side Info */}
          <div className="md:w-2/5 bg-[#1152d4] p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
              <p className="text-blue-100 mb-8">Tell us about your ministry and how we can collaborate to serve the body of Christ.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm">
                  <span className="material-symbols-outlined">mail</span>
                  <span>partnerships@jschristian.org</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="material-symbols-outlined">schedule</span>
                  <span>Response within 48 hours</span>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-white/20 pt-6">
              <span className="text-[10px] uppercase tracking-widest text-blue-200 block mb-2">Our Commitment</span>
              <p className="text-sm italic text-blue-100">"Iron sharpens iron, and one man sharpens another." — Proverbs 27:17</p>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="md:w-3/5 p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-800 dark:text-gray-300">Full Name</label>
                  <input
                    required
                    placeholder='Enter your full name'
                    className="w-full bg-gray-50 dark:bg-gray-700 border-none rounded-lg focus:ring-2 focus:ring-[#1152d4] h-12 px-4 dark:text-white"
                    type="text"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-800 dark:text-gray-300">Ministry / Org</label>
                  <input
                    placeholder='Enter your organization'
                    className="w-full bg-gray-50 dark:bg-gray-700 border-none rounded-lg focus:ring-2 focus:ring-[#1152d4] h-12 px-4 dark:text-white"
                    type="text"
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-800 dark:text-gray-300">Email Address</label>
                <input
                  required
                  placeholder='hello@gmail.com'
                  className="w-full bg-gray-50 dark:bg-gray-700 border-none rounded-lg focus:ring-2 focus:ring-[#1152d4] h-12 px-4 dark:text-white"
                  type="email"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-800 dark:text-gray-300">Collaboration Type</label>
                <select
                  className="w-full bg-gray-50 dark:bg-gray-700 border-none rounded-lg focus:ring-2 focus:ring-[#1152d4] h-12 px-4 dark:text-white"
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                >
                  <option>Music Production</option>
                  <option>App & Web Development</option>
                  <option>Video Production</option>
                  <option>Media Consultation</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-800 dark:text-gray-300">Your Vision</label>
                <textarea
                  placeholder='Tell us about your vision'
                  rows={4}
                  className="w-full bg-gray-50 dark:bg-gray-700 border-none rounded-lg focus:ring-2 focus:ring-[#1152d4] px-4 py-3 dark:text-white"
                  onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#d4af37] hover:bg-[#c4a02d] text-white font-bold py-4 rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                Send Inquiry
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;