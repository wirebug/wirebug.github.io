import Link from 'next/link';
import React from 'react';

interface INavbarItemProps {
    label: string;
    link: string;
}

const NavbarItem: React.FC<INavbarItemProps> = ({ label, link }) => {
    return <Link href={link}><a className="inline-block px-4 py-2 mx-2 font-medium text-left text-indigo-700 md:text-white md:px-0 lg:mx-3 md:text-center">{label}</a></Link>
}

export default NavbarItem;
