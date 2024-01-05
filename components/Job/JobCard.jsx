import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { MdLocationCity } from 'react-icons/md';
import { FaMapLocationDot } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";

const JobCard = ({ item }) => {
  const givenDate = new Date(item.posted_on);
  const currentDate = new Date();
  const timeDifference = currentDate - givenDate;
  const daysDifference = Math.round(timeDifference / (1000 * 60 * 60 * 24));
  return (
    <Link className='' href={`/jobs/${item._id}`}>
      {/* <div className={`mx-3 px-2 md:mx-36 rounded-xl ${item.isInternship ? "bg-[#fde047]" : "bg-[#bfdbfe]"} border-primary border-dashed  cursor-pointer  hover:scale-[1.02]" hover:border-primary  border-2 border-transparent focus:outline-none transition duration-100`}> */}
      <div className={`mx-3 px-3 md:mx-36 rounded-xl ${item.isInternship ? "bg-[#fde047]" : "bg-[#bfdbfe]"} border-primary border-dashed drop-shadow  cursor-pointer  hover:scale-[1.02]" hover:border-primary text-accent border-2 border-transparent focus:outline-none transition duration-100`}>
        <div className='lg:col-span-8 md:col-span-6'>
          <div className="group relative overflow-hidden lg:flex justify-between items-center rounded  pt-3 md:pb-3">
            <div className="flex items-center">
              <div className="w-22 h-22 flex items-center drop-shadow justify-center">
                <Image height={50} width={50} className='rounded-2xl' src={item.business_image} alt={item.business_name} />
                {/* <Image height={50} width={50} src="https://shreethemes.in/jobstack/layouts/assets/images/company/lenovo-logo.png" alt={item.business_name} /> */}
                {/* <img src="assets/images/company/facebook-logo.png" class="h-8 w-8" alt=""> */}
              </div>
              <div>
                <p className="text-xl hover:text-accentfont-bold transition-all duration-500 ms-3 ml-3 min-w-[150px]">{item.job_title}</p>
                <p className="text-md hover:text-accenttransition-all duration-500 ms-3 ml-3 min-w-[150px]"><MdLocationCity className='inline-block text-accent mr-1 animate-pulse' />{item.business_name}

                </p>



              </div>
            </div>

            <div className="lg:block flex justify-between lg:mt-0 mt-4">
              <div className='grid grid-flow-col'>
              <span className="block  text-sm md:mt-1 mt-0"><i className="uil uil-clock"></i>{item.category.map(item => {item})}</span>
               
                {item.isInternship ? <><span className="block"><span className="bg-base-100 ml-2 inline-block text-accent text-xs px-2.5 py-0.5 font-semibold rounded-full">Intern</span>
                </span></> : null}
              </div>

            </div>

            <div className="lg:block flex justify-start lg:mt-0 mt-2">
              <span className=""><i className="uil uil-map-marker"></i><FaMapLocationDot className='inline-block text-accent' /> {item.location}</span>
              {/* <span className="block font-semibold lg:mt-1 mt-0"> {item.salary.value} $/yr</span> */}
            </div>

            <div className="lg:mt-0 mt-4">
              <span className='inline-block'>
                <a href="" className=" lg:relative absolute top-28 md:top-0 end-0 lg:m-0 m-3">
                  <IoTimeOutline className='inline-block mx-1 text-lg' />
                  <span className='text-sucess pr-1 '>{daysDifference}d</span>
                  ago
                </a>
              </span>
              {/* <div className='hidden md:block'>
                <div className=" btn btn-icon btn-md rounded-full bg-secondary group-hover:bg-secondary border border-primary"><MdArrowForward
                  className='text-lg text-accent' />
                </div>

              </div> */}
              {/* <a href="job-apply.html" className="btn rounded-md bg-base-100 hover:bg-emerald-700 border-base-100 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">Apply Now</a> */}
            </div>
            <span className="w-24 bg-yellow-400 text-white text-center absolute  -start-[30px] top-1"><i className="uil uil-star"></i></span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default JobCard