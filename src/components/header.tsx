// import style from './styles.module.css';

import Link from "next/link";

export default function HeaderSection() {
    return (
        <header className="flex items-center justify-between w-full max-w-7xl px-4 py-6 mx-auto bg-slate-500 mb-4">
            <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-white">
                    <span className="text-sky-400">Omni</span> Ectic
                </Link>
            </div>
            <nav className="flex items-center space-x-4">

                <Link href="/" className="text-lg font-medium text-black">
                    <p className="font-semibold text-2xl m-3 relative text-slate-700 one hover:text-white">
                        <span>Home</span>
                        {/* <span className="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-yellow-400"></span> */}
                    </p>
                </Link>

                <Link href="/cybersecurity" className="text-lg font-medium text-black">
                    <p className="font-semibold text-2xl m-3 relative text-slate-700 one hover:text-white">
                        <span>CyberSecurity</span>
                        {/* <span className="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-yellow-400"></span> */}
                    </p>
                </Link>

                <Link href="/ai" className="text-lg font-medium text-black">
                    <p className="font-semibold text-2xl m-3 relative text-slate-700 one hover:text-white">
                        <span>Artificial Intelligence</span>
                        {/* <span className="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-yellow-400"></span> */}
                    </p>
                </Link>

                <Link href="/bookreview" className="text-lg font-medium text-black">
                    <p className="font-semibold text-2xl m-3 relative text-slate-700 one hover:text-white">
                        <span>Book Reviews</span>
                        {/* <span className="absolute -bottom-1 left-0 w-0 transition-all h-1 bg-yellow-400"></span> */}
                    </p>
                </Link>

            </nav>

            <style jsx>{`

                .one:hover span:last-child {
                width: 100%;
                }

                .two:hover span {
                width: 50%;
                }

                .three:hover span {
                height: 100%;
                }
            `}</style>
        </header>
    );
}

/* ==================== About Header Not Implemented ====================

                <Link href="/about" className="text-lg font-medium text-black">
                    <p className="font-semibold text-2xl m-3 relative text-slate-700 one hover:text-white">
                        <span>About</span>
                       
                    </p>
                </Link>

*/