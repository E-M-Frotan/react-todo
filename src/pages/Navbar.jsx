import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-lg font-bold">
            BrandName
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/services" className="hover:text-gray-300">
            Services
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            id="menu-button"
            className="focus:outline-none bg-red-500"
          ></button>
        </div>
      </div>

      {/* <!-- Mobile Menu --> */}
      <div id="mobile-menu" className="hidden">
        <div className="flex flex-col bg-gray-700 px-4 py-2 space-y-2">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
          <a href="#" className="hover:text-gray-300">
            Services
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <script>
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  menuButton.addEventListener('click', () => {
    mobileMenu.classNameList.toggle('hidden');
  });
</script> */
}
