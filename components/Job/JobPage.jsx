import React from 'react'
import { useRouter } from 'next/router'
import { MdArrowForward, MdCardTravel, MdLocationCity, MdLocationPin } from 'react-icons/md'
import { FaMapLocationDot } from "react-icons/fa6";

import { FaExternalLinkAlt } from "react-icons/fa";


import Image from 'next/image'
import { ImCross } from "react-icons/im";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";
import Head from 'next/head';



const JobPage = ({ jobx }) => {
  console.log(jobx)
  const router = useRouter()
  const shareUrl = `${process.env.NEXT_PUBLIC_HOST}jobs/${router.query.job}`;
  const title = `Apply for ${jobx.job_title} position at ${jobx.business_name || ""} `;

  return (
    <>
      <Head>
        <title>{jobx.job_title}</title>
        <meta name="description" content={jobx.job_description} />
      </Head>
      <div className='max-w-7xl  md:py-12 px-3 lg:px-10 '>
        <div className="container mt-10">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-8 md:col-span-6">
              <div className="md:flex items-center p-2  bg-secondary rounded-2xl ">
                <Image className='rounded-full h-22 w-22 p-2  ' height={100} width={100} src="https://shreethemes.in/jobstack/layouts/assets/images/company/lenovo-logo.png" alt={jobx.business_name} />
                <div className="md:ml-4 md:mt-0 mt-6">
                  <h5 className="text-xl font-semibold">{jobx.job_title}</h5>
                  <div className="">
                  {/* <CiTempHigh className='inline-block text-[#000000] ' /> */}
                    {jobx.category.map(item => (<>
                    <span className=" text-md font-medium mx-1 inline-block">{item},</span>
                    </>))}
                 
                  </div>
                  <div className="mt-2">
                    <span className=" text-lg font-medium me-2 inline-block"><MdLocationCity className='inline-block text-primary mx-1' />{jobx.business_name}</span>
                    <span className=" font-medium me-2 inline-block"><i className="uil uil-map-marker text-[18px]  mx-1"></i><FaMapLocationDot  className='inline-block text-primary' /> {jobx.location}</span>
                  </div>
                </div>
              </div>

              <h5 className="text-lg font-semibold mt-6">Job Description:</h5>

              <p className=" mt-4">{jobx.job_description}</p>


              <div className="mt-5 ">
                {/* <a className="xs:flex-shrink-0 group relative w-full xs:w-auto flex xs:inline-flex items-center justify-center h-10 px-4 py-px font-bold text-gray-900 bg-primary rounded-lg transition-all duration-300 focus:outline-none" href="/contact"><div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-yellowGreen-900 animate-pulse group-hover:ring-0 transition duration-300"></div>
          <span className="ml-2">Apply now </span></a> */}
                <a href={`${jobx.apply_link}?ref=frontendjobs`} target='_blank' rel='noreferrer' className="btn rounded-md bg-primary hover:bg-[#1d4ed8] border-primary hover:border-emerald-700 text-white md:ms-2 w-full md:px-24 text-lg ">Apply Now<FaExternalLinkAlt  className='inline-block' /></a>
              </div>

              {/* share button */}
              <div>
                <h5 className="text-lg  py-10 font-semibold mt-6">Share job posting:</h5>

                <div className="columns-4 lg:columns-11 px-5">
                  <div className="Demo__some-network">
                    <FacebookShareButton
                      url={shareUrl}
                      className="Demo__some-network__share-button"
                    >
                      <FacebookIcon size={45} round />
                    </FacebookShareButton>

                    <div>
                      <FacebookShareCount
                        url={shareUrl}
                        className="Demo__some-network__share-count"
                      >
                        {(count) => count}
                      </FacebookShareCount>
                    </div>
                  </div>

                  <div className="Demo__some-network">
                    <FacebookMessengerShareButton
                      url={shareUrl}
                      appId="521270401588372"
                      className="Demo__some-network__share-button"
                    >
                      <FacebookMessengerIcon size={45} round />
                    </FacebookMessengerShareButton>
                  </div>

                  <div className="Demo__some-network">
                    <TwitterShareButton
                      url={shareUrl}
                      title={title}
                      className="Demo__some-network__share-button"
                    >
                      <XIcon size={45} round />
                    </TwitterShareButton>
                  </div>

                  <div className="Demo__some-network">
                    <TelegramShareButton
                      url={shareUrl}
                      title={title}
                      className="Demo__some-network__share-button"
                    >
                      <TelegramIcon size={45} round />
                    </TelegramShareButton>
                  </div>

                  <div className="Demo__some-network">
                    <WhatsappShareButton
                      url={shareUrl}
                      title={title}
                      separator=":: "
                      className="Demo__some-network__share-button"
                    >
                      <WhatsappIcon size={45} round />
                    </WhatsappShareButton>
                  </div>

                  <div className="Demo__some-network">
                    <LinkedinShareButton
                      url={shareUrl}
                      className="Demo__some-network__share-button"
                    >
                      <LinkedinIcon size={45} round />
                    </LinkedinShareButton>
                  </div>

                  <div className="Demo__some-network">
                    <RedditShareButton
                      url={shareUrl}
                      title={title}
                      windowWidth={660}
                      windowHeight={460}
                      className="Demo__some-network__share-button"
                    >
                      <RedditIcon size={45} round />
                    </RedditShareButton>


                  </div>

                  <div className="Demo__some-network">
                    <EmailShareButton
                      url={shareUrl}
                      subject={title}
                      body="body"
                      className="Demo__some-network__share-button"
                    >
                      <EmailIcon size={45} round />
                    </EmailShareButton>
                  </div>






                </div>
              </div>
              {/* share button */}

              <ul className='hidden md:block list pt-10'>
                <li className=" text center mt-4 list-item"><ImCross className='inline-block mr-2 text-warning' />
                  When applying for jobs, you should NEVER have to pay to apply. </li>
                <li className=" mt-4 list-item"><ImCross className='inline-block mr-2 text-warning' />
                  You should also NEVER have to pay to buy equipment which they then pay you back for later.</li>
                <li className=" mt-4 list-item"><ImCross className='inline-block mr-2 text-warning' />
                  Also never pay for trainings you have to do. Those are scams! NEVER PAY FOR ANYTHING! </li>
              </ul>
            </div>

            <div className="lg:col-span-4 md:col-span-6">
              <div className="shadow bg-secondary rounded-2xl  sticky top-20">
                <div className="p-6">
                  <h5 className="text-lg font-semibold">Job Information</h5>
                </div>
                <div className="p-6 border-t border-slate-100 dark:border-t-gray-700">
                  <ul className="list-none">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-check h-5 w-5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>

                      <div className="ml-4">
                        <p className="font-medium">Employee Type:</p>
                        <span className=" font-medium text-sm">Full Time</span>
                      </div>
                    </li>

                    <li className="flex items-center mt-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin h-5 w-5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>

                      <div className="ml-4">
                        <p className="font-medium">Location:</p>
                        <span className=" font-medium text-sm">{jobx.location}</span>
                      </div>
                    </li>

                    <li className="flex items-center mt-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-monitor h-5 w-5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>

                      <div className="ml-4">
                        <p className="font-medium">Job Type:</p>
                        <span className=" font-medium text-sm">Back-end Developer</span>
                      </div>
                    </li>

                    <li className="flex items-center mt-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase h-5 w-5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>

                      <div className="ml-4">
                        <p className="font-medium">Experience:</p>
                        <span className=" font-medium text-sm">2+ years</span>
                      </div>
                    </li>

                    <li className="flex items-center mt-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book h-5 w-5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>

                      <div className="ml-4">
                        <p className="font-medium">Qualifications:</p>
                        <span className=" font-medium text-sm">MCA</span>
                      </div>
                    </li>

                    <li className="flex items-center mt-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign h-5 w-5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>

                      <div className="ml-4">
                        <p className="font-medium">Salary:</p>
                        {/* <span className=" font-medium text-sm">{jobx.salary.value}{jobx.salary.currency}</span> */}
                      </div>
                    </li>

                    <li className="flex items-center mt-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock h-5 w-5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>

                      <div className="ml-4">
                        <p className="font-medium">Date posted:</p>
                        <span className=" font-medium text-sm">28th Feb, 2023</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ul className='block md:hidden list pt-10'>
              <li className=" text center mt-4 list-item"><ImCross className='inline-block mr-2 text-warning' />
                When applying for jobs, you should NEVER have to pay to apply. </li>
              <li className=" mt-4 list-item"><ImCross className='inline-block mr-2 text-warning' />
                You should also NEVER have to pay to buy equipment which they then pay you back for later.</li>
              <li className=" mt-4 list-item"><ImCross className='inline-block mr-2 text-warning' />
                Also never pay for trainings you have to do. Those are scams! NEVER PAY FOR ANYTHING! </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default JobPage