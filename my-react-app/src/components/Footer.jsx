import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm text-yellow-400 hover:text-yellow-600"> Copyright &copy; 2024- STUDENT'S UNION - FACULTY OF COMPUTING</p>
        <div className="flex gap-7">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-600">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-600">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-600">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
