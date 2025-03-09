import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { IconMenu, IconMenu2, IconShoppingBag, IconX } from '@tabler/icons-react';
import Cart from './Cart';

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

  const handleCheckOut = () => {
    const selectedItems = cart
      .filter((item) => item.selected)
      .map((item) => `*${item.name}* - Rp${item.price.toLocaleString()}`)
      .join('\n');

    const waMessage = `Halo, saya ingin membeli layanan berikut:\n${selectedItems}`;
    console.log(waMessage);
    const waUrl = `https://wa.me/6283823115994?text=${waMessage}`;
    window.open(waUrl, '_blank');

  };

  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const { cart, handleQuantityChange, handleSelectChange } = useCart();

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
            <button onClick={toggleCart} className="relative inline-block">
              <IconShoppingBag
                size={32}
                className="cursor-pointer text-white transition-colors"
              />
              {/* Badge Angka */}
              <span
                className="
                absolute
                -top-1
                -right-1
                bg-red-500
                text-white
                text-xs
                rounded-full
                w-4
                h-4
                flex
                items-center
                justify-center
              "
              >
                {cart.length}
              </span>
            </button>


            {/* Hamburger Menu Button (visible only on smaller screens) */}
            <button onClick={toggleMenu} className="lg:hidden text-gray-100 hover:text-gray-300 focus:outline-none">
              {isMenuOpen ? (
                <IconX className='cursor-pointer' />
              ) : (
                // Menu Icon
                <IconMenu2 className='cursor-pointer' />
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
                  <IconX className='text-gray-950' />
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

      {/* Sidebar Cart */}
      <div className="m-0 font-sans">
        <div
          className={`fixed h-full w-[300px] top-0 bg-white shadow-xl transition-all duration-500 z-50 p-6 flex flex-col ${isCartOpen ? "right-0" : "right-[-300px]"
            }`}
        >
          {/* Header - tetap di atas */}
          <div className="flex-none">
            <div className="flex items-center justify-between">
              <h4 className="text-lg">Service Cart</h4>
              <button onClick={toggleCart}>
                <IconX size={32} />
              </button>
            </div>
          </div>

          {/* Area Item - hanya bagian ini yang discroll */}
          <div className="flex-1 mt-6 overflow-y-auto">
            {cart.length === 0 ? (
              <div className="text-center text-lg text-gray-500">
                Service Is Empty
              </div>
            ) : (
              cart.map((cartItem) => (
                <Cart
                  key={cartItem.id}
                  {...cartItem}
                  onQuantityChange={handleQuantityChange}
                  onSelectChange={handleSelectChange}
                />
              ))
            )}
          </div>

          {/* Footer Checkout - selalu di bawah */}
          <div className="flex-none border-t pt-4">
            {(() => {
              const totalItems = cart.reduce(
                (acc, item) => acc + (item.selected ? 1 : 0),
                0
              );
              const totalPrice = cart.reduce(
                (acc, item) =>
                  acc + (item.selected ? item.price * 1 : 0),
                0
              );
              return (
                <>
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total Items:</span>
                    <span>{totalItems}</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total Price:</span>
                    <span>Rp {totalPrice.toLocaleString()}</span>
                  </div>
                </>
              );
            })()}

            <button onClick={handleCheckOut} className="w-full bg-ruby text-white py-2 rounded mt-4 cursor-pointer">
              Checkout
            </button>
          </div>
        </div>
        {isCartOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={toggleCart}
          ></div>
        )}
      </div>
    </nav>
  );
}
