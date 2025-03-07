import React from 'react';
import {
    IconBrandFacebook,
    IconBrandTwitter,
    IconBrandInstagram,
    IconBrandGithub,
    IconUser,
} from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-ruby text-white py-8 px-25">
            {/* Container utama dengan grid responsif */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* 1. Company Info */}
                <div>
                    <h3 className="text-xl font-bold">RubiTalent</h3>
                    <p className="mt-2 text-sm text-gray-100">
                        Your trusted partner in acquiring high quality talent for your business.
                    </p>
                </div>

                {/* 2. Quick Links */}
                <div>
                    <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
                    <ul className="space-y-1">
                        <li>
                            <NavLink to={"/"} className="hover:underline">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"} className="hover:underline">
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/services"} className="hover:underline">
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"} className="hover:underline">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* 3. Our Solutions */}
                <div>
                    <h4 className="font-semibold text-lg mb-2">Our Solutions</h4>
                    <ul className="space-y-1">
                        <li>
                            <NavLink to={"/"} className="hover:underline">
                                High Quality Talent
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className="hover:underline">
                                Recruitment Innovation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className="hover:underline">
                                Personalized Approach
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className="hover:underline">
                                Global Professional Network
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* 4. Newsletter */}
                <div>
                    <h4 className="font-semibold text-lg mb-2">Newsletter</h4>
                    <p className="text-sm text-gray-100">
                        Stay updated with our latest talent solutions.
                    </p>
                    <div className="mt-2 flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="rounded-l-md p-2 text-white focus:outline-none w-full"
                        />
                        <button className="bg-gray-900 text-white rounded-r-md px-4 py-2 transition-colors">
                            Subscribe
                        </button>
                    </div>
                    {/* Social Media Icons */}
                    <div className="mt-4 flex space-x-3 text-gray-100">
                        <a href="https://github.com/FikryRamadhan" className="hover:text-white transition-colors">
                            <IconBrandGithub size={20} />
                        </a>
                        <a href="https://fikryrdev.vercel.app" className="hover:text-white transition-colors">
                            <IconUser size={20} />
                        </a>
                        <a href="https://www.instagram.com/" className="hover:text-white transition-colors">
                            <IconBrandInstagram size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
                © 2025 PT Naga Rubi Inovasi. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
