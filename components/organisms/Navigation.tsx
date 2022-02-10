import { useRouter } from 'next/router';
import React, { useState } from 'react';

type NavigationProps = {
    label: string;
    link: string;
}

interface INavigationProps {
    navigation: NavigationProps[];
}

const Navigation: React.FC<INavigationProps> = ({ navigation }) => {
    const router = useRouter();
    const [isExpanded, toggleExpansion] = useState<boolean>(false);

    return (
        
<section className="w-full px-3 antialiased bg-indigo-600 lg:px-6">
    <div className="mx-auto max-w-7xl">
        <nav className="flex items-center w-full h-24 select-none">
            <div className="relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center">
                <a href="#_" className="w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0">
                    <span className="p-1 text-xl font-black leading-none text-white select-none"><span>TITEL LOGO</span><span className="text-indigo-300">.</span></span>
                </a>
                <div className={`${isExpanded ? 'flex' : 'hidden' } fixed top-0 left-0 z-40 items-center w-full h-full p-3 text-xl bg-gray-900 bg-opacity-50 md:text-sm lg:text-base md:w-3/4 md:bg-transparent md:p-0 md:relative md:flex`}>
                    <div className="flex-col w-full h-full overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-aut">
                        <div className="flex flex-col items-center justify-center w-full h-full mt-12 text-center text-indigo-700 md:text-indigo-200 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                            <a href="#" className="inline-block px-4 py-2 mx-2 font-medium text-left text-indigo-700 md:text-white md:px-0 lg:mx-3 md:text-center">Home</a>
                            <a href="#" className="inline-block px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center">Features</a>
                            <a href="#" className="inline-block px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center">Blog</a>
                            <a href="#" className="inline-block px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center">Contact</a>
                        </div>
                    </div>
                </div>
                <div className='absolute right-0 z-50 flex flex-col`'>
                    <button type="button" className="w-10 h-10 p-2.5 text-black hover:text-primary-500 rounded-full cursor-pointer md:hidden hover:bg-gray-900 hover:bg-opacity-10" onClick={() => toggleExpansion(!isExpanded)}>
                        <svg className={`${isExpanded ? 'expanded' : ''} stroke-current stroke-6`} width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </button>
                </div>
                    {/* <div onClick={() => toggleExpansion(!isExpanded)}  className={`${isExpanded ? 'text-gray-900' : 'text-gray-100'} absolute right-0 z-50 flex flex-col items-end w-10 h-10 p-2 mr-4 rounded-full cursor-pointer md:hidden hover:bg-gray-900 hover:bg-opacity-10`}>
                    {isExpanded ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg> ):
                    (
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    )}
                </div> */}
            </div>
        </nav>



        </div>
        </section>
    )
}


export default Navigation;
