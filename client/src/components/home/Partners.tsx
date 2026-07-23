'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaLaptopCode } from 'react-icons/fa';

const Partners = () => {
    return (
        <section className="py-12 bg-white border-y border-gray-100">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 opacity-70 hover:opacity-100 transition-opacity">
                    <span className="text-gray-400 font-semibold uppercase tracking-widest text-sm">Strategic Partners:</span>

                    <a
                        href="https://mrecai.com/about/company"
                        className="flex items-center space-x-3 group"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="w-10 h-10 bg-navy-900 rounded flex items-center justify-center text-white group-hover:bg-primary-600 transition-colors">
                            <FaShieldAlt />
                        </div>
                        <div className="text-left">
                            <div className="text-xs text-gray-400 font-bold uppercase tracking-tighter">Powered By</div>
                            <div className="text-lg font-black text-navy-900 group-hover:text-primary-600 transition-colors">Grober Imbey</div>
                        </div>
                    </a>

                    <div className="w-px h-8 bg-gray-200 hidden md:block"></div>

                    <a
                        href="https://novaedgesolutions.co/"
                        className="flex items-center space-x-3 group"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="w-10 h-10 bg-primary-600 rounded flex items-center justify-center text-white group-hover:bg-navy-900 transition-colors">
                            <FaLaptopCode />
                        </div>
                        <div className="text-left">
                            <div className="text-xs text-gray-400 font-bold uppercase tracking-tighter">Technology Partner</div>
                            <div className="text-lg font-black text-navy-900 group-hover:text-primary-600 transition-colors">NovaEdge Solutions</div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Partners;
