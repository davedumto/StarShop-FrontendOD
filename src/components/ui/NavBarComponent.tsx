"use client"

import { FC, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CircleUserRound, Menu, X } from 'lucide-react'

const navItems = [
    {
        name: "Dashboard",
        href: "/dashboard",
    },
    {
        name: "Products",
        href: "/products",
    },
    {
        name: "Settings",
        href: "/settings",
    },
]

const NavbarComponent: FC = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <nav className="flex items-center justify-between sm:px-10 lg:px-16">
            
        </nav>
    );
};

export default NavbarComponent;