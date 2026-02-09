import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    // --- Smooth Scroll Logic ---
    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);

        if (element) {
            const headerOffset = 85; 
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            setIsOpen(false); 
        }
    };

    const navItems = [
        { name: 'Home', href: '#' },
        { name: 'About Us', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Services', href: '#services' },
        { name: 'Media', href: '#media' },
        { name: 'Partnerships', href: '#partnerships' },
    ];

    const isActive = (path: string) => {
        if (path.startsWith('#')) return false;
        return location.pathname === path;
    };

    return (
        <header className={`flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7ebf3] dark:border-b-gray-800 px-6 lg:px-20 py-4 bg-white dark:bg-gray-900 sticky top-0 z-50 transition-all ${scrolled ? 'shadow-md' : ''}`}>
            <Link 
                to="/" 
                className="flex items-center gap-4 text-blue-600"
                >
                <div className="size-8 flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl">church</span>
                </div>
                <h2 className="text-[#0d121b] dark:text-white text-xl font-extrabold leading-tight tracking-[-0.015em]">
                    JS Christian Productions
                </h2>
            </Link>

            <div className="flex flex-1 justify-end gap-8 items-center">
                <nav className="hidden xl:flex items-center gap-8">
                    {navItems.map((item) => (
                        item.href.startsWith('#') ? (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleScrollTo(e, item.href)}
                                className="text-sm font-semibold text-[#0d121b] dark:text-gray-200 hover:text-blue-700 transition-colors"
                            >
                                {item.name}
                            </a>
                        ) : (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`text-sm transition-colors ${isActive(item.href)
                                    ? 'text-primary font-bold border-b-2 border-blue-600'
                                    : 'text-[#0d121b] dark:text-gray-200 font-semibold hover:text-primary'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        )
                    ))}
                </nav>

                <div className="flex gap-3">
                    <button className="hidden md:flex min-w-25 cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-blue-700 text-white text-sm font-bold tracking-[0.015em] hover:opacity-90 transition-opacity">
                        <span>Bookshop</span>
                    </button>
                    <button className="hidden md:flex min-w-25 cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#e7ebf3] dark:bg-gray-800 text-[#0d121b] dark:text-white text-sm font-bold tracking-[0.015em] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                        <span>Training</span>
                    </button>

                    <button className="xl:hidden text-[#0d121b] dark:text-white" onClick={() => setIsOpen(!isOpen)}>
                        <span className="material-symbols-outlined text-3xl">{isOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`xl:hidden absolute top-full left-0 w-full bg-white dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="flex flex-col p-6 gap-4">
                    {navItems.map((item) => (
                        item.href.startsWith('#') ? (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-lg font-semibold text-[#0d121b] dark:text-white hover:text-primary transition-colors"
                                onClick={(e) => handleScrollTo(e, item.href)}
                            >
                                {item.name}
                            </a>
                        ) : (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`text-lg font-semibold transition-colors ${isActive(item.href) ? 'text-primary' : 'text-[#0d121b] dark:text-white hover:text-primary'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        )
                    ))}
                    <button className="md:hidden w-full bg-primary text-white py-3 rounded-lg font-bold">Bookshop</button>
                    <button className="md:hidden w-full bg-[#e7ebf3] dark:bg-gray-800 text-[#0d121b] dark:text-white py-3 rounded-lg font-bold">Training</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
