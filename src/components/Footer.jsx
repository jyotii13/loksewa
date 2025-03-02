import React from 'react';
import { AiOutlineMail, AiOutlinePhone, AiOutlineDownload } from 'react-icons/ai';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-secondary1 text-white py-8 mt-8 px-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                {/* About us section */}
                <div>
                    <h4 className="font-bold text-lg mb-2">About Us</h4>
                    <p>
                        <span className="font-bold">Lok Sewa Tayari App</span> - Nepal's trusted platform for PSC preparation. Get study materials, mock tests, and daily current affairs in one place. Track your progress and stay ahead with expert guidance. Achieve your government job dreams with us!
                    </p>
                </div>

                {/* sewa services */}

                <div>
                    <h4 className="font-bold text-lg mb-2">Sewa Services</h4>
                    <ul className="space-y-1">
                        <li>Public Service commission</li>
                        <li>Nepal Police</li>
                        <li>Nepal Army</li>
                        <li>Engineering</li>
                        <li>Teachers Service Commission</li>
                        <li>Nepal Health Service</li>
                        <li>Department of Security Services and Investigations</li>
                        <li>Banking</li>
                    </ul>
                </div>

                {/* Quick Links */}

                <div>
                    <h4 className="font-bold text-lg mb-2">Quicks Links</h4>
                    <ul className="space-y-1">
                        <li>About</li>
                        <li>Banking</li>
                        <li>Privacy Policy</li>
                        <li>Pricing</li>
                        <li>Contact Us</li>
                        <li>News</li>
                        <li>Forum</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-bold text-lg mb-2">Contact</h4>
                    <ul className="space-y-1">
                        <li>
                            <AiOutlineMail /> loksewatayariapp@gmail.com
                        </li>
                        <li>
                            <AiOutlinePhone className="mr-1" /> +977 9815126740
                        </li>
                        <li>
                            <AiOutlineDownload className="mr-1" /> Download App
                        </li>
                    </ul>
                </div>
            </div>

            {/* divider line */}
            <hr className="border-black my-4 mx-4" />

            {/* social media links */}
            <div className="container mx-auto flex justify-between items-center px-16">
                <p className="text-sm">
                    © 2024 Loksewa Tayari App. All rights reserved | Powered By Nep Tech Pal
                </p>
                <div className="flex space-x-4">
                    <FaFacebook className="cursor-pointer hover:text-secondary" />
                    <FaTwitter className="cursor-pointer hover:text-secondary" />
                    <FaInstagram className="cursor-pointer hover:text-secondary" />
                </div>
            </div>
        </footer>
    )
}

export default Footer