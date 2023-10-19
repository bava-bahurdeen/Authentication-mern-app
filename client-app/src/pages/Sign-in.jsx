import React from 'react'
import {Link} from "react-router-dom"
export default function Signin() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold my-7'>Sign-up
    </h1>
    <form action="" className='flex flex-col gap-4'>
      <input type='text' placeholder='username' id='username' className='bg-slate-100 rounded-lg p-3 '/>
      <input type='email' placeholder='Email' id='email' className='bg-slate-100 rounded-lg p-3 '/>
      <input type='password' placeholder='password' id='password' className='bg-slate-100 rounded-lg p-3 '/>
      <button className='bg-slate-700 text-white p-3 rounded-lg hover:opacity-95'>SIGNUP</button>
      </form>
      <div className='flex gap-2'>
        <p>Have an account ?</p>
        <Link to="/Sign-in">
            <span className='text-blue-800'>
          Sign in
            </span>
        </Link>
      </div>
    </div>
  )
}
