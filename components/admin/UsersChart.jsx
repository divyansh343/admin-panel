import { toastify } from '@/utils/handleCookies';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const UsersChart = () => {
  const [users, setusers] = useState([])
  let [update, setup] = useState(0)

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_HOST}api/admin/users`,
    };

    axios.request(config)
      .then((response) => {
        setusers(response.data.data)
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [update])

  const handleDelete = (idk) => {
    let data = JSON.stringify({
      "userid": idk
    });

    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_HOST}api/admin/delete`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toastify("user deleted")
        setup(update += 1)
      })
      .catch((error) => {
        console.log(error);
      });

  }

  return (
    <div>
      <section className="container mx-auto pt-5 p-4 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">UserId</th>
                  <th className="px-4 py-3">Username</th>
                  <th className="px-4 py-3">Image</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Actions({update})</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {users.map((item) => (
                  <tr key={item._id} className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                          {/* <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" /> */}
                          <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                          <p className=" font-semibold text-black">{item._id}</p>
                          {/* <p className="text-xs text-gray-600">{b.brand}</p> */}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm  border">{item.username}</td>
                    <td className="px-4 py-3 text-xs border">
                     
                        {item?.image?.url ? <>
                          <Image className='rounded-full ml-4 lg:ml-10 ' src={item.image.url} height={50} width={50} alt='' />
                        </> :  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">img </span>}
                      
                    </td>
                    <td className="px-4 py-3 text-sm border">{item.email}</td>
                    <td className="px-4 py-3 text-sm border">
                      <p className='text-warning font-bold cursor-pointer' onClickCapture={() => handleDelete(item._id)}>delete</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UsersChart