import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userDataContext } from '../context/UserContext';

function Userlogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useContext(userDataContext);


  const formHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });


      if (response.status === 200) {
        console.log('User received:', response.data.user);
        localStorage.setItem('token', response.data.token);
        setUser(response.data.user);
         localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/home');
      }
    } catch (error) {
      console.error('Login failed:', error.response?.data?.message || error.message);
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center relative py-8">
      {/* Fixed and Responsive Logo */}
      <div className="fixed top-6 left-6">
        <img
          className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32"
          src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo-700x394.png"
          alt="Uber Logo"
        />
      </div>

      {/* Responsive Login Form */}
      <form
        onSubmit={(e) => formHandler(e)}
        className="bg-white shadow-2xl rounded-lg p-8 sm:p-10 w-full max-w-md mt-16"
      >
        <h3 className="text-3xl font-semibold mb-6 text-gray-800">Welcome Back User!</h3>

        {/* Email Input */}
        <div className="mb-6">
          <label htmlFor="email" className="text-lg text-gray-700 mb-2 block">
            What's your email?
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="email@example.com"
            aria-label="Email address"
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label htmlFor="password" className="text-lg text-gray-700 mb-2 block">
            What's your password?
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            aria-label="Password"
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>

        {/* New Account Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          New here?{' '}
          <Link
            to="/signup"
            className="text-blue-500 hover:text-blue-600 font-medium transition duration-200"
          >
            Create new Account
          </Link>
        </p>
      </form>

      {/* Login as Captain Link */}
      <div className="mt-6 w-full max-w-md">
        <Link
          to="/captainlogin"
          className="block  w-full text-center bg-yellow-500 text-white py-4 rounded-lg text-lg hover:bg-yellow-600 transition duration-300"
        >
          Login as Captain
        </Link>
      </div>
    </div>
  );
}

export default Userlogin;
