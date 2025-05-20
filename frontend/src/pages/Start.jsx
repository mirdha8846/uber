import React from 'react';
import { Link } from 'react-router-dom';

function Start() {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="flex-grow flex flex-col justify-between bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1585393948915-011d724d4c2e?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <img
          className="w-20 ml-8 mt-4 lg:w-28"
          src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo-700x394.png"
          alt="Uber Logo"
        />
        <div className="bg-white py-6 px-6 flex flex-col items-center shadow-lg rounded-t-lg md:py-8 w-auto ">
          <h2 className="text-2xl font-bold text-center lg:text-3xl">
            Get Started with Uber
          </h2>
          <Link  to={'/login'} className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Start;
