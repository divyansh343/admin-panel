import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { MdArrowForward,  MdLocationCity, MdLocationPin } from 'react-icons/md';
import { HiCurrencyDollar } from "react-icons/hi";

const JobCard = ({ item }) => {
  return (
    <Link href={`/jobs/${item._id}`}>
      <div className={`mx-3 px-2 md:mx-36 rounded-xl bg-secondary/80 cursor-pointer border-gray-700 hover:scale-[1.02]" hover:border-primary  border border-transparent focus:outline-none transition duration-100`}>
        <div className='lg:col-span-8 md:col-span-6'>
          <div className="group relative overflow-hidden lg:flex justify-between items-center rounded shadow hover:shadow-mdtransition-all duration-500 py-3">
            <div className="flex items-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-md">
                <Image height={50} width={50} src="https://shreethemes.in/jobstack/layouts/assets/images/company/lenovo-logo.png" alt={item.business_name} />
                {/* <img src="assets/images/company/facebook-logo.png" class="h-8 w-8" alt=""> */}
              </div>
              <div>
                <p className="text-lg hover:text-emerald-600 font-bold transition-all duration-500 ms-3 ml-3 min-w-[150px]">{item.job_title}</p>
                <p className="text-xs hover:text-emerald-600 transition-all duration-500 ms-3 ml-3 min-w-[150px]"><MdLocationCity className='inline-block text-primary mr-1 animate-pulse' />{item.business_name}</p>

              </div>
            </div>

            <div className="lg:block flex justify-between lg:mt-0 mt-4">
              <div className='grid grid-flow-col'>
                {item.isRemote ? <><span className="block"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Remote</span>
                </span></> : null}
                {item.isInternship ? <><span className="block"><span className="bg-emerald-600/10 ml-2 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Intern</span>
                </span></> : null}
              </div>

              {/* <span className="block"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Full Time</span>
              </span> */}
              <span className="block text-slate-400 text-sm md:mt-1 mt-0"><i className="uil uil-clock"></i> 2 day ago</span>
            </div>

            <div className="lg:block flex justify-between lg:mt-0 mt-2">
              <span className="text-slate-400"><i className="uil uil-map-marker"></i><MdLocationPin className='inline-block text-primary' /> {item.location}</span>
              <span className="block font-semibold lg:mt-1 mt-0"><HiCurrencyDollar  className='inline-block text-lg' /> {item.salary.value}</span>
            </div>

            <div className="lg:mt-0 mt-4">
              {/* <a href="" className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white lg:relative absolute top-0 end-0 lg:m-0 m-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark h-4 w-4"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg></a> */}
              <div className='hidden md:block'>
                <div className=" btn btn-icon btn-md rounded-full bg-secondary group-hover:bg-[#059669] border border-primary"><MdArrowForward
                  className='text-lg text-primary' />
                </div>

              </div>
              {/* <a href="job-apply.html" className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">Apply Now</a> */}
            </div>
            <span className="w-24 bg-yellow-400 text-white text-center absolute  -start-[30px] top-1"><i className="uil uil-star"></i></span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default JobCard