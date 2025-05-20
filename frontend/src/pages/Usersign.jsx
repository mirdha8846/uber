import React, { useState ,useContext} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {userDataContext} from '../context/UserContext';
function Usersignup() {
    const {setUser}=useContext(userDataContext);
  const [fullname, setFullname] = useState({ firstname: '', lastname: '' });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});
const navigate=useNavigate();
  const formHandler = async(e) => {
    e.preventDefault();
    setUserData({
      fullname: { ...fullname },
      email,
      password,
    });
    const response=await axios.post('http://localhost:5000/api/users/register',userData);
    if(response.status===201){
        const {user,token}=response.data;
        localStorage.setItem('token',token);
        setUser(user)


      navigate('/home');
    }

    // Clear input fields after submission
    setFullname({ firstname: '', lastname: '' });
    setEmail('');
    setPassword('');
  };

  const handleFullnameChange = (e) => {
    const { name, value } = e.target;
    setFullname((prev) => ({ ...prev, [name]: value }));
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

      {/* Responsive Signup Form */}
      <form
        onSubmit={(e) => formHandler(e)}
        className="bg-white shadow-2xl rounded-lg p-8 sm:p-10 w-full max-w-md mt-16"
      >
        <h3 className="text-3xl font-semibold mb-6 text-gray-800">Create an Account</h3>

        {/* First Name Input */}
        <div className="mb-6">
          <label htmlFor="firstname" className="text-lg text-gray-700 mb-2 block">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={fullname.firstname}
            onChange={handleFullnameChange}
            placeholder="First Name"
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Last Name Input */}
        <div className="mb-6">
          <label htmlFor="lastname" className="text-lg text-gray-700 mb-2 block">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={fullname.lastname}
            onChange={handleFullnameChange}
            placeholder="Last Name"
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label htmlFor="email" className="text-lg text-gray-700 mb-2 block">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label htmlFor="password" className="text-lg text-gray-700 mb-2 block">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
        >
          Signup
        </button>

        {/* Already have an account */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-blue-500 hover:text-blue-600 font-medium transition duration-200"
          >
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Usersignup;
