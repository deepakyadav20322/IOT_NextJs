import React from 'react'
import Link from 'next/link';
const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-[90vh]">
      <div className="text-center">
        <h1 className=" text-9xl font-bold text-red-500 mb-4 ">404</h1>
        <p className="text-lg font-bold text-gray-700 mb-2">Oops! Page not found.</p>
        <p className="text-gray-500 mb-6">Sorry, the page you were looking for in this website does not exist.</p>
        <Link href={"/"} className="text-blue-500 font-bold hover:underline">Go back to home</Link>
      </div>
    </div>
  )
}

export default NotFoundPage