import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Company Name</h3>
            <p className="text-sm">123 Street Name, City, State, 12345</p>
          </div>
          <div>
            <h4 className="text-md font-semibold">Follow Us</h4>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
          &copy; 2024 Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
