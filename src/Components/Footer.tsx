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
        <footer className="bg-ruby text-white py-8 lg:px-25 md:px-10 px-5">
            {/* Container utama dengan grid responsif */}
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* 1. Company Info */}
                <div>
                    <h3 className="text-xl font-bold">RubiTalent</h3>
                    <p className="mt-2 text-sm text-gray-200">
                        Your trusted partner in acquiring high quality talent for your business.
                    </p>
                </div>

                {/* 2. Quick Links */}
                <div>
                    <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
                    <ul className="space-y-1">
                        <li>
                            <NavLink to={"/"} className="hover:underline text-gray-200">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"} className="hover:underline text-gray-200">
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/services"} className="hover:underline text-gray-200">
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"} className="hover:underline text-gray-200">
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
                            <NavLink to={"/"} className="hover:underline text-gray-200">
                                High Quality Talent
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className="hover:underline text-gray-200">
                                Recruitment Innovation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className="hover:underline text-gray-200">
                                Personalized Approach
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className="hover:underline text-gray-200">
                                Global Professional Network
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* 4. Newsletter */}
                <div>
                    <h4 className="font-semibold text-lg mb-2">Newsletter</h4>
                    <p className="text-sm text-gray-200">
                        Stay updated with our latest talent solutions.
                    </p>
                    
                    {/* Social Media Icons */}
                    <div className="mt-4 flex space-x-3 text-gray-200">
                        <a href="https://github.com/FikryRamadhan" className="hover:text-white transition-colors">
                            <IconBrandGithub size={20} />
                        </a>
                        <a href="https://fikryrdev.vercel.app" className="hover:text-white transition-colors">
                            <IconUser size={20} />
                        </a>
                        <a href="https://www.instagram.com/_fkryyrmdhan._" className="hover:text-white transition-colors">
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
