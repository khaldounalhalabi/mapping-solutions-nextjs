"use client"
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import './navbar.css';
import {BiSearch} from "@react-icons/all-files/bi/BiSearch";
import {BiMenu} from "@react-icons/all-files/bi/BiMenu";

const Navbar = () => {
    return (
        <div className={`bg-gray-50 py-2 p-0 m-0`}>
            <nav className={`mx-3 flex justify-between items-center`}>
                <div>
                    <Image className={`mx-5 px-5`} src={`/images/logo.png`} alt={`logo`} width={180} height={50}/>
                </div>
                <BiMenu className={`text-4xl cursor-pointer lg:hidden`}/>
                <div className={`md:hidden lg:block`}>
                    <ul className={`flex justify-center items-center space-x-3`}>
                        <li className={`nav-item`}><Link href={`#`}>Home</Link></li>
                        <li className={`nav-item`}><Link href={`#`}>Products</Link></li>
                        <li className={`nav-item`}><Link href={`#`}>Applications</Link></li>
                        <li className={`nav-item`}><Link href={`#`}>Services</Link></li>
                        <li className={`nav-item`}><Link href={`#`}>Research & Development</Link></li>
                        <li className={`nav-item`}><Link href={`#`}>Training</Link></li>
                        <li className={`nav-item`}><Link href={`#`}>Downloads</Link></li>
                        <li className={`nav-item`}><Link href={`#`}>Events</Link></li>
                    </ul>
                </div>
                <div className={`md:hidden lg:flex justify-center items-center space-x-2`}>
                    <input className={`outline-third border-2 border-primary h-10 rounded-xl text-center`}
                           placeholder={`Search`}/>
                    <BiSearch className={`text-2xl cursor-pointer`}/>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;