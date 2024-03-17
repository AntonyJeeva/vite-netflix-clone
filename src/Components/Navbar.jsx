/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../API/AuthContext'

function Navbar() {

  const {user , logout} = UserAuth()
  const navigate = useNavigate()

  async function handleLogout(e) {
    e.preventDefault()
    console.log("form submission")
  

    try{
      await logout()
      navigate('/')
    }catch(err){
      console.log(err)
    }

  }
  
  return (
    <>
     <div className='absolute w-full flex justify-between items-center p-4 z-10'>
      <Link to= '/'>
        <h1 className='font-bold text-red-500 text-2xl font-sans '>Netflix</h1>
        </Link>


      {/* ternary operate -
      user {
        id:
        em,ail
        createdate
      } */}
        {user?.email ? (
          <div>
          <Link to='/profile'>
            <button className='pr-4'>Profile</button>
          </Link>
          
            <button onClick={handleLogout} className='pr-4 bg-red-600 rounded px-4 py-2'>Logout</button>
        
        </div>
        )  : (
          <div>
          <Link to='/login'>
            <button className='pr-4'>Login</button>
          </Link>
          <Link to='/signup'>
            <button className='pr-4 bg-red-600 rounded px-4 py-2'>Signup</button>
          </Link>
        </div>
        )}

       
      
     </div>
    </>
  )
}

export default Navbar