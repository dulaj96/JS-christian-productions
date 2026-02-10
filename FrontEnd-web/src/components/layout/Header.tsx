import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('#'); // දැනට ඉන්න section එක track කරන්න

    useEffect(() => {
        const handleScroll = () => {
            // හෙඩර් එකේ shadow එක පාලනය කිරීම
            setScrolled(window.scrollY > 20);

            // --- Scroll Spy Logic ---
            const sections = ['about', 'projects', 'services', 'media', 'partnerships'];

            // පේජ් එකේ උඩම ඉන්නවා නම් 'Home' (#) active කරන්න
            if (window.scrollY < 100) {
                setActiveSection('#');
                return;
            }

            sections.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Section එක viewport එකේ මැද හරියට ආවම ඒක active කරනවා
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(`#${id}`);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');

        if (targetId === '') {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveSection('#');
        } else {
            const element = document.getElementById(targetId);
            if (element) {
                const headerOffset = 85;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
                setActiveSection(href);
            }
        }
        setIsOpen(false);
    };

    const navItems = [
        { name: 'Home', href: '#' },
        { name: 'About Us', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Services', href: '#services' },
        { name: 'Media', href: '#media' },
        { name: 'Partnerships', href: '#partnerships' },
    ];

    return (
        <header className={`flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7ebf3] dark:border-b-gray-800 px-6 lg:px-20 py-4 bg-white dark:bg-gray-900 sticky top-0 z-50 transition-all ${scrolled ? 'shadow-md py-3' : 'py-4'}`}>
            <Link to="/" className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                    <div className="size-10 flex items-center justify-center overflow-hidden">
                        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <h2 className="text-[#0d121b] dark:text-white text-xl font-extrabold leading-tight tracking-tight">
                        JS Christian Productions
                    </h2>
                </div>
            </Link>

            <div className="flex flex-1 justify-end gap-8 items-center">
                <nav className="hidden xl:flex items-center gap-8 h-full">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleScrollTo(e, item.href)}
                            className={`text-sm font-bold transition-all duration-300 relative py-2 group ${activeSection === item.href
                                ? 'text-blue-600'
                                : 'text-[#0d121b] dark:text-gray-200 hover:text-blue-600'
                                }`}
                        >
                            {item.name}
                            {/* යටින් යන නිල් පාට ඉර */}
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${activeSection === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}></span>
                        </a>
                    ))}
                </nav>

                <div className="flex gap-3">
                    <button className="hidden md:flex bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90">Bookshop</button>
                    <button className="hidden md:flex bg-[#e7ebf3] dark:bg-gray-800 text-[#0d121b] dark:text-white px-4 py-2 rounded-lg text-sm font-bold">Training</button>
                    <button className="hidden md:flex bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold">Payments</button>

                    <button className="xl:hidden text-[#0d121b] dark:text-white" onClick={() => setIsOpen(!isOpen)}>
                        <span className="material-symbols-outlined text-3xl">{isOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`xl:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen border-b shadow-lg' : 'max-h-0'}`}>
                <nav className="flex flex-col p-6 gap-4">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleScrollTo(e, item.href)}
                            className={`text-lg font-bold transition-colors ${activeSection === item.href ? 'text-blue-600' : 'text-[#0d121b] dark:text-white'
                                }`}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;