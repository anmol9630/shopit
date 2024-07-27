// LoginSignup.js

import React, { useState } from 'react';

const LoginSignup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Signup

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login (replace with actual login logic)
    alert(`Logging in with username: ${username} and password: ${password}`);
    // Clear form fields after successful login
    setUsername('');
    setPassword('');
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Validate password and confirm password match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Simulate signup (replace with actual signup logic)
    alert(`Signing up with username: ${username}, email: ${email}, and password: ${password}`);
    // Clear form fields after successful signup
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <ul className="flex justify-center">
            <li className={`mr-6 cursor-pointer ${isLogin ? 'text-blue-500 font-bold' : 'text-gray-500'}`} onClick={() => setIsLogin(true)}>Login</li>
            <li className={`cursor-pointer ${!isLogin ? 'text-blue-500 font-bold' : 'text-gray-500'}`} onClick={() => setIsLogin(false)}>Signup</li>
          </ul>
        </div>

        {isLogin ? (
          <form onSubmit={handleLogin}>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded w-full"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded w-full"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignup}>
            <h2 className="text-2xl font-bold mb-4">Signup</h2>

            {error && <p className="text-red-500 mb-2">{error}</p>}
            
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded w-full"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded w-full"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
