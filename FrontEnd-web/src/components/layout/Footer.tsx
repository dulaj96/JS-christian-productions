import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 py-12 px-6 lg:px-20">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <Link to="/" className="flex items-center gap-3 group">
                    <span className="material-symbols-outlined text-2xl text-primary group-hover:scale-110 transition-transform">church</span>
                    <span className="font-bold text-lg text-[#0d121b] dark:text-white">JS Christian Productions</span>
                </Link>
                <p className="text-gray-500 text-sm">© {new Date().getFullYear()} JS Christian Productions. All rights reserved.</p>
                <div className="flex gap-6">
                    <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                        <span className="material-symbols-outlined">public</span>
                    </a>
                    <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                        <span className="material-symbols-outlined">mail</span>
                    </a>
                    <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                        <span className="material-symbols-outlined">share</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
