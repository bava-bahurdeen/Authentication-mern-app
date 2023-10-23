import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
export default function Signup() {
  const [formData,setformData]=useState({})
  const [error,setError]=useState(false)
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const handleChange=(e)=>{
setformData({...formData,[e.target.id]:e.target.value})

}

const handleSubmit=async(e)=>{
  e.preventDefault()
try{

  setLoading(true)
  const res= await fetch('/api/auth/signin',
  {
  method:'POST',
  headers:{
    'Content-Type':'application/json',
  },
  body:JSON.stringify(formData),
  }
  )
    // Handle a successful response
    const data = await res.json();
    console.log(data);
    setLoading(false)
    if(data.success==false){
      setError(true)
      return
    }
    setError(false)
navigate("/")
 
}

catch(error){
  setLoading(false)
    setError(true)
  console.log(error.message);
}
  }
 
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold my-7'>Sign-up
    </h1>
    <form action=""  className='flex flex-col gap-4' onSubmit={handleSubmit}>
     
      <input type='email' placeholder='Email' id='email' className='bg-slate-100 rounded-lg p-3 ' onChange={handleChange}/>

      <input type='password' placeholder='password' id='password' className='bg-slate-100 rounded-lg p-3 '  onChange={handleChange} tabIndex='0'/>
      <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg hover:opacity-95'>{loading?"Loading...":"SIGN UP"}</button>
      </form>
     ,
      <div className='flex gap-2'>
        <p>Dont Have an account ?</p>
        <Link to="/Sign-in">
            <span className='text-blue-800'>
          Sign Up
            </span>
        </Link>

      <p className='text-red-700'>{error&&"Oops!!! Something went wrong"}</p>
      </div>
    </div>
  )
}
