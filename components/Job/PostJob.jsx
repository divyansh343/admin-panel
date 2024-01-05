import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
const axios = require('axios');

const PostJob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState({
    value: 0,
    currency: "",
    per: ""
  });
  const [isRemote, setIsRemote] = useState(false);
  const [isInternship, setIsInternship] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [businessImage, setBusinessImage] = useState("");
  const [applyLink, setApplyLink] = useState("");
  const [categories, setCategories] = useState(['', '', '']);
  const currenciesArray = ['INR', 'USD', 'EUR', 'GBP', 'Crypto'];
  const frequencyOptions = ["month", "year", "hour"];
  const handleInputChange = (index, value) => {
    const updatedCategories = [...categories];
    updatedCategories[index] = value;
    setCategories(updatedCategories);
  };

  let data = {
    "job_title": jobTitle,
    "job_description": jobDescription,
    "location": location,
    "salary": {
      "value": salary.value,
      "currency": salary.currency,
      "per": salary.per
    },
    "isRemote": isRemote,
    "categories": categories,
    "isInternship": isInternship,
    "business_name": businessName,
    "business_image": businessImage,
    "apply_link": applyLink
  }

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_HOST}api/jobs/add`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };


  const resetForm = () => {
    setJobTitle("");
    setJobDescription("");
    setLocation("");
    setCity("");
    setSalary({
      value: 0,
      currency: "",
      per: ""
    });
    setIsRemote(false);
    setIsInternship(false);
    setBusinessName("");
    setBusinessImage("");
    setApplyLink("");
    setCategories(['', '', ''])
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.request(config)
      .then((response) => {
       console.log()
       response.data.sucess === true ? toast.success("Job listed Sucessful")
       : toast.error("Error")
      })
      .catch((error) => {
        console.log(error)
      });
    resetForm()
    console.log(data)
  }



  return (
    <div className='w-screen grid justify-center'>
      <section className="bg-base-100 lg:py-24 py-16">
        <div className="container">
          <div className="lg:flex">
            <div className="">
              <div className="p-5 bg-secondary rounded-md">
                <form className="text-left">
                  <div className="grid grid-cols-1">
                    <h5 className="text-lg font-semibold">Job Details:</h5>
                  </div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className=" font-semibold">Job Title:</span>
                    </div>
                    <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="Job title" className="input input-sm w-full max-w-xs" />
                  </label>


                  <div className="grid grid-cols-12 gap-4 mt-4">

                    <div className="col-span-12">
                      <div className="label">
                        <label htmlFor="comments" className="font-semibold">Job Description:</label>
                      </div>
                      <textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>

                      <label className="font-semibold" htmlFor="RegisterName"></label>
                      {/* <input type="text" className="input input-bordered input-primary input-sm max-w-xs ml-3" placeholder="Web Developer" /> */}
                    </div>


                    {/* <div className="col-span-12">
                      <label htmlFor="comments" className="font-semibold">Country:</label>
                      <select className="select select-primary w-full max-w-xs select-sm block" value={location} onChange={(e) => setLocation(e.target.value)}>
                        <option value="" disabled>Select a country</option>
                        {countries.map((country, index) => (
                          <option key={index} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div> */}

                    <div className="col-span-12">
                      <div className="label">
                        <label htmlFor="comments" className="font-semibold">Location:</label>
                      </div>
                      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="City Name" className="input input-sm w-full max-w-xs" />
                    </div>
                    {/* salary */}
                    <div className="md:col-span-6 col-span-12">
                      <label className="font-semibold ">Salary:</label>
                      <input type="text" value={salary.value}
                        onChange={(e) => setSalary({ ...salary, value: e.target.value })} className="input input-bordered input-sm w-full ml-2 max-w-xs" />

                    </div>

                    <div className="md:col-span-3 col-span-12">
                      <label className="font-semibold  md:invisible md:block hidden">Min:</label>
                      <select className="select select-primary w-full max-w-xs select-sm ml-2" value={salary.currency} onChange={(e) => setSalary({ ...salary, currency: e.target.value })}>
                        {currenciesArray.map((curr, index) => (
                          <option key={index} value={curr}>
                            {curr}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-3 col-span-12">
                      <label className="font-semibold md:invisible md:block hidden">Per:</label>
                      <select className="select select-primary w-full max-w-xs select-sm ml-2" value={salary.per} onChange={(e) => setSalary({ ...salary, per: e.target.value })}>
                        {frequencyOptions.map((freq, index) => (
                          <option key={index} value={freq}>
                            {freq === "month" ? "month" : <>{freq === "year" ? "year" : "hour"  }</>}
                          </option>
                        ))}
                      </select>

                    </div>
                    {/* salary */}

                    <div className="md:col-span-6 col-span-12">
                      <div className='grid grid-flow-row gap-2'>
                      <label className="font-semibold">Job Categories:</label>
                      <input type="text"
                        value={categories[0]}
                        onChange={(e) => handleInputChange(0, e.target.value)} placeholder="category 1" className="input input-sm w-full max-w-xs" />
                      <input type="text"
                        value={categories[1]}
                        onChange={(e) => handleInputChange(1, e.target.value)} placeholder="category 2" className="input input-sm w-full max-w-xs" />
                      <input type="text"
                        value={categories[2]}
                        onChange={(e) => handleInputChange(2, e.target.value)} placeholder="category 3" className="input input-sm w-full max-w-xs" />
                      </div>
                    </div>

                    <div className="md:col-span-6 col-span-12">
                      <label className="font-semibold">Remote (work from home): <span className='font-normal'>{isRemote ? "yes" : "no"}</span></label>
                      <div className="toggle-switch">
                        <input
                          className="toggle"
                          type="checkbox"
                          id="remoteSwitch"
                          checked={isRemote}
                          onChange={() => setIsRemote(!isRemote)}
                        />
                        <label htmlFor="remoteSwitch"></label>
                      </div>

                      <label className="font-semibold">Internship: <span className='font-normal'>{isInternship ? "yes" : "no"}</span> </label>
                      <div className="toggle-switch">

                        <input type="checkbox" className="toggle" id="internshipSwitch"
                          checked={isInternship}
                          onChange={() => setIsInternship(!isInternship)} />

                        <label htmlFor="internshipSwitch"></label>
                      </div>
                    </div>

                  </div>

                  <div className="grid grid-cols-1 mt-8">
                    <h5 className="text-lg font-semibold">About Company:</h5>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className=" font-semibold">Busienss Name:</span>
                      </div>
                      <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="Business name" className="input input-sm w-full max-w-xs" />
                    </label> <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className=" font-semibold">Business Logo:</span>
                      </div>
                      <input type="text" value={businessImage} onChange={(e) => setBusinessImage(e.target.value)} placeholder="Image link" className="input input-sm w-full max-w-xs" />
                    </label> <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className=" font-semibold">Apply Link:</span>
                      </div>
                      <input type="text" value={applyLink} onChange={(e) => setApplyLink(e.target.value)} placeholder="Apply link" className="input input-sm w-full max-w-xs" />
                    </label>
                  </div>



                  <div className="grid grid-cols-1 gap-4 mt-4">
                    <div>
                      <a onClick={handleSubmit} className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white">Post Now</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PostJob