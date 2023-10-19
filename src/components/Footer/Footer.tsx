import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-gray-100 w-full h-full py-5 px-10">
            <div className="container grid grid-cols-3 gap-40">
                <div>
                    <Image width={500} height={500} src={`/images/logo.png`} alt={''}/>
                </div>
                <nav className={`flex w-full`}>
                    <ul className={`mx-5`}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Applications</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>

                    <ul className={`mx-5`}>
                        <li><a href="#">Research&Development</a></li>
                        <li><a href="#">Training</a></li>
                        <li><a href="#">Downloads</a></li>
                        <li><a href="#">Events</a></li>
                    </ul>
                </nav>
                <div className="flex flex-col">
                    <p className={`font-bold`}>Email : Example@email.com</p>
                    <p className={`font-bold`}>Address : Some Address</p>
                    <p className={`font-bold`}>Phone : +123456789</p>
                    <p className={`font-bold`}>Fax : +123456789</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;