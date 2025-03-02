import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const toogleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <nav className="bg-white shadow-md w-full sticky top-0 left-0 z-50 px:1 md:px-28">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-2xl font-bold flex items-center">
                    <img src="logo.png" alt="Lok Sewa Logo" className="w-15 h-10 mr-2" />
                </div>

                <div className="md:hidden" onClick={toogleNav}>
                    {navOpen ? (
                        <AiOutlineClose size={30} />
                    ) : (
                        <AiOutlineMenu size={30} />
                    )}
                </div>
                <ul className={`flex flex-col md:flex-row md:space-x-6 absolute md:static w-full md:w-auto bg-white md:bg-transparent ${navOpen ? 'top-16 left-0' : 'top-[-490px]'} `}>
                    <li className="px-2 py-2 md:py-0 hover:text-secondary text-center">Home</li>
                    <li className="px-2 py-2 md:py-0 hover:text-secondary text-center">Exam</li>
                    <li className="px-2 py-2 md:py-0 hover:text-secondary text-center">
                        <Link to="/gorkhapatra">GorkhaPatra</Link>
                    </li>
                    <li className="px-2 py-2 md:py-0 hover:text-secondary text-center">
                        <Link to="/notice">Notice</Link>
                    </li>
                    <li className="px-2 py-2 md:py-0 hover:text-secondary text-center">Blog</li>
                    <li className="px-2 py-2 md:py-0 hover:text-secondary text-center">Forum</li>
                    <li className="px-2 py-2 md:py-0 hover:text-secondary text-center">Pricing</li>
                    <li className="px-2 py-2 md:py-0 hover:text-secondary text-center">News</li>
                    <li className="px-2 py-2 md:py-0 hover:text-secondary text-center">Sewa Services</li>
                    <li className="px-2 py-2 md:py-0 md:hidden">
                        <button className="border-2 border-primary text-primary py-1 px-4 rounded hover:bg-white hover:text-primary transition">
                            Login
                        </button>
                    </li>
                    <li className="px-4 py-2 md:py-0 md:hidden">
                        <button className="bg-primary text-white py-1 px-4 rounded hover:bg-blue-600 transition">
                            Sign Up
                        </button>
                    </li>
                </ul>
                <div className="hidden md:flex space-x-4">
                    <button className="border-2  border-primary text-primary py-1 px-4 rounded hover:bg-white hover:text-primary transition">
                        Login
                    </button>
                    <button className="bg-primary text-white py-1 px-4 rounded hover:bg-primary transition">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar