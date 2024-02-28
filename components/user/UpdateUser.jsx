import axios from 'axios'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { getCookie, toastify, isAuth, signOut } from '../../utils/handleCookies'
import Image from 'next/image'
import user from '../../assets/images/clients/cl1.png'



const UpdateUser = () => {
  const [username, setusername] = useState("")
  const [avatar, setImage] = useState([]);
  const [ctoken, setustoken] = useState("")
  const [isAuthenticated, setAuthenticated] = useState(false)

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    // console.log(file);
  }

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    }
  }

  useEffect(() => {
    let token = localStorage.getItem('token')
    setustoken(token)
  }, [])

  useEffect(() => {
    isAuth() === true ? setAuthenticated(true) : setAuthenticated(false)
  }, [])

  const handleUpdateUser = (e) => {
    e.preventDefault()
    var data = {
      "username": username,
      avatar
    }

    var config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_HOST}api/user/request`,
      headers: {
        'Authorization': `Bearer ${ctoken}`
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        // console.log(response.data);
        toastify(response.data.message)
        setusername("")
        setImage([])
      })
      .catch(function (error) {
        toastify("Try again")
        // console.log(error);
      });
  }

    return (
      <div data-theme="light" >
        <button onClick={signOut} className="group inline-block justify-center ml-4 md:ml-0 p-1 text-center text-sm  font-text-primary" href="/">
          <div className="inline-flex items-stretch h-10 p-0.5 text-white rounded-lg bg-primary">
            <div className="flex items-center px-4  group-hover:bg-opacity-40 rounded-md "><span> Sign Out user</span>
            </div>
          </div>
        </button>
        <form onSubmit={handleUpdateUser} className='grid place-items-center'>
          <div className='mt-9'>
            <p className='text-xl font-semibold'>Update user details</p>
          </div>

          <div className="form-control w-full max-w-xs mt-16">
            <label className="label">
              <span className="label-text font-medium text-base">Username</span>
            </label>
            <input type="text" onChange={e => setusername(e.target.value)} value={username} placeholder="new username" className="input input-bordered input-primary  w-full max-w-xs" required />
          </div>

          <div className='grid grid-flow-col gap-3 mt-5 '>
            {
              avatar.length === 0 ?
                <Image className='rounded-full ml-4 lg:ml-10 ' src={user} height={50} width={50} alt='' />
                :
                <Image className='rounded-full ml-4 lg:ml-10 ' src={avatar} height={50} width={50} alt='' />
            }

            <input type="file" onChange={handleImage} id="formupload" name="avatar" className="file-input file-input-bordered text-primary text-sm  w-5/6 max-w-xs" required />
          </div>

          <div className='mt-8'>
            <button type='submit' className="btn btn-wide font-medium tracking-wide">Update </button>
          </div>
        </form>
      </div>
    )
}

export default UpdateUser