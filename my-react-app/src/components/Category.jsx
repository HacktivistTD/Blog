import React from 'react'
import { Link } from 'react-router-dom';
function Category() {
  return (
    <div>
        
        <div className="flex flex-wrap justify-center gap-4 p-8">
      
<div className="border border-gray-300 rounded-lg p-4 w-60 text-center bg-gray-800 shadow-md transition-transform transform hover:scale-105">
  <Link to="/category/Poeam" className="text-yellow-600 hover:text-yellow-400">
    <h2 className="text-2xl font-semibold">Poeam</h2>
    <p className="mt-2 text-lg">Explore articles about Poeams</p>
  </Link>
</div>
<div className="border border-gray-300 rounded-lg p-4 w-60 text-center bg-gray-800 shadow-md transition-transform transform hover:scale-105">
  <Link to="/category/Quotes" className="text-yellow-600 hover:text-yellow-400">
    <h2 className="text-2xl font-semibold">Quotes</h2>
    <p className="mt-2 text-lg">Explore articles aboutQuotes.</p>
  </Link>
</div>

</div>
    </div>
  )
}

export default Category