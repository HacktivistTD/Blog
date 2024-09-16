import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from "../components/HeroSections";
function Home() {
  return (
    <div>
    <HeroSection/>
    <div className="flex flex-wrap justify-center gap-4 p-8">
      
      <div className="border border-gray-300 rounded-lg p-4 w-60 text-center bg-gray-800 shadow-md transition-transform transform hover:scale-105">
        <Link to="/category/Love" className="text-yellow-600 hover:text-yellow-400">
          <h2 className="text-2xl font-semibold">Love</h2>
          <p className="mt-2 text-lg">Explore articles about Love.</p>
        </Link>
      </div>
      <div className="border border-gray-300 rounded-lg p-4 w-60 text-center bg-gray-800 shadow-md transition-transform transform hover:scale-105">
        <Link to="/category/War" className="text-yellow-600 hover:text-yellow-400">
          <h2 className="text-2xl font-semibold">War</h2>
          <p className="mt-2 text-lg">Explore articles about War.</p>
        </Link>
      </div>
      <div className="border border-gray-300 rounded-lg p-4 w-60 text-center bg-gray-800 shadow-md transition-transform transform hover:scale-105">
        <Link to="/category/Peace" className="text-yellow-600 hover:text-yellow-400">
          <h2 className="text-2xl font-semibold">Peace</h2>
          <p className="mt-2 text-lg">Explore articles about Peace.</p>
        </Link>
      </div>
    </div>

    </div>
  );
}

export default Home;
