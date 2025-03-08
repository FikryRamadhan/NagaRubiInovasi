import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Mengurangi opacity secara dinamis:
      // Pada scrollY = 0, opacity = 1; saat scrollY mencapai 200, opacity minimal 0.5.
      const newOpacity = Math.max(1 - scrollY, 0.5);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    // Memanggil handleScroll untuk mengatur opacity awal bila halaman dimuat tidak di posisi teratas
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="shadow-md lg:px-25 md:px-10 px-5 fixed top-0 left-0 w-full z-50 bg-ruby"
    >
      {/* Desktop and Mobile Layout */}
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Left Section - Logo & Title */}
          <div className="flex-shrink-0 flex items-center">
            {/* Ganti '/path/to/logo.png' dengan path logo perusahaan Anda */}
            <img
              src="/logo-white.png"
              alt="PT. Naga Rubi Inovasi"
              className="md:h-15 h-10 w-auto mr-2"
            />
            <h1 className="text-sm font-medium text-gray-100 flex-row uppercase"><div>PT. Naga Rubi</div> <div>Inovasi</div></h1>
          </div>

          {/* Middle Section - Navigation Links (visible only on lg screens) */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-20">
            <div className="flex space-x-8">
              <NavLink to="/" className="text-gray-100 hover:text-gray-300 px-3 py-2 font-medium">
                Home
              </NavLink>
              <NavLink to="/Service" className="text-gray-100 hover:text-gray-300 px-3 py-2 font-medium">
                Service
              </NavLink>
              <NavLink to="/about" className="text-gray-100 hover:text-gray-300 px-3 py-2 font-medium">
                About Us
              </NavLink>
              <NavLink to="/Service" className="text-gray-100 hover:text-gray-300 px-3 py-2 font-medium">
                Contact
              </NavLink>
            </div>
          </div>

          {/* Right Section - Icons (visible on all screens) */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-100 hover:text-gray-300"></button>
            <button className="text-gray-100 hover:text-gray-300">
              {/* Shopping Cart Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>


            {/* Hamburger Menu Button (visible only on smaller screens) */}
            <button onClick={toggleMenu} className="lg:hidden text-gray-100 hover:text-gray-300 focus:outline-none">
              {isMenuOpen ? (
                // X Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Menu Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal (fixed on right side) */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black opacity-10 z-40 lg:hidden" onClick={toggleMenu}></div>

          {/* Modal Menu */}
          <div className="fixed top-0 right-0 h-full w-64 bg-gray-100 shadow-lg z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
            <div className="p-5">
              <div className="flex justify-between items-center mb-6">
                <button onClick={toggleMenu} className="text-gray-100 hover:text-gray-300 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col space-y-4">
                <NavLink to="/" className="text-gray-900 hover:text-gray-900 py-2 font-medium border-b border-gray-900">
                  Home
                </NavLink>
                <NavLink to="/service" className="text-gray-900 hover:text-gray-900 py-2 font-medium border-b border-gray-900">
                  Services
                </NavLink>
                <NavLink to="/about" className="text-gray-900 hover:text-gray-900 py-2 font-medium border-b border-gray-900">
                  About Us
                </NavLink>
                <NavLink to="/contact" className="text-gray-900 hover:text-gray-900 py-2 font-medium border-b border-gray-900">
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
