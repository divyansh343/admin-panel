import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { toastify } from '../../utils/handleCookies'

const CreateUser = () => {
  const [email, setEmail] = useState("")
  const [password, setPass] = useState("")

  const handleCreateUser = (e) => {
    e.preventDefault()
    var data = {
      "email": email,
      "password": password
    }
    var config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_HOST}api/user/register`,
      data: data
    };

    axios(config)
      .then(function (response) {
        // console.log(response.data);
        toastify(response.data.message)
        setEmail("")
        setPass("")
      })
      .catch(function (error) {
        toastify("Try again")
        // console.log(error);
      });
  }

  return (
    <div data-theme="light" >
      <form onSubmit={handleCreateUser} className='grid place-items-center'>
        <div className='mt-9'>
          <p className='text-xl font-semibold'>Create New User</p>
        </div>

        <div className="form-control w-full max-w-xs mt-16">
          <label className="label">
            <span className="label-text font-medium text-base">Email</span>
          </label>
          <input type="email" minLength={6} onChange={e => setEmail(e.target.value)} value={email} placeholder="new username" className="input input-bordered input-primary  w-full max-w-xs" required />
        </div>
        
        <div className="form-control w-full max-w-xs mt-5">
          <label className="label">
            <span className="label-text font-medium text-base">Password</span>
          </label>
          <input type="text" minLength={6} onChange={e => setPass(e.target.value)} value={password} placeholder="new username" className="input input-bordered input-primary  w-full max-w-xs" required />
        </div>
      
        <div className='mt-8'>
          <button type='submit' className="btn btn-wide font-medium tracking-wide">Create User</button>
        </div>
        <Link href="/admin">
          <button className="btn btn-wide font-medium tracking-wide mt-4"> Go Back</button>
        </Link>
      </form>
    </div>
  )
}

export default CreateUser