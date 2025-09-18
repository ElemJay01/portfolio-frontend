import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-6 mt-12">
      <div className="container mx-auto px-4">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          © 2025 James Lucy. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mb-4">
          {/* Navigation Links */}
          <a href="#home" className="hover:text-blue-500">
            Home
          </a>
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
          <a href="#gallery" className="hover:text-blue-500">
            Gallery
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </div>
        <div className="flex justify-center gap-4">
          {/* Social icons here */}
          <div className="flex justify-center gap-5 mb-12 text-xl text-gray-600 dark:text-gray-300">
            <a
              href="https://wa.me/254798364620"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaBehance />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaDribbble />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
