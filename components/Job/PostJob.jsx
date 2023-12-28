import React, { useState, useEffect } from 'react';
const axios = require('axios');

const PostJob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
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

  const [countries, setCountries] = useState([]);
  const [category, setCategory] = useState("");
  const categoriesArray = [
    "UI", "UX", "React", "Angular", "Vue.js", "JS", "HTML/CSS",
    "Web", "Testing", "Mobile", "Accessibility", "Performance", "Architecture", "Cross-Browser"
  ];

  const currenciesArray = ["US Dollar", "Euro", "Indian Rupee", "British Pound", "crypto"];

  const frequencyOptions = ["monthly", "yearly"];




  let data = JSON.stringify({
    "job_title": jobTitle,
    "job_description": jobDescription,
    "location": location,
    "salary": {
      "value": salary.value,
      "currency": salary.currency,
      "per": salary.per
    },
    "isRemote": isRemote,
    "isInternship": isInternship,
    "business_name": businessName,
    "business_image": businessImage,
    "apply_link": applyLink
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/api/jobs/add',
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
    setCountries([]);
    setCategory("");
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    resetForm()
    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(data)
  }


  useEffect(() => {
    // Fetch countries from the Restcountries API
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => {
        const countryNames = data.map(country => country.name.common);
        setCountries(countryNames);
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  return (
    <div className='w-screen grid justify-center'>
      <section className="bg-base-100 lg:py-24 py-16">
        <div className="container">
          <div className="lg:flex justify-center">
            <div className="lg:w-3/3">
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


                    <div className="col-span-12">
                      <label htmlFor="comments" className="font-semibold">Country:</label>
                      <select className="select select-primary w-full max-w-xs select-sm block" value={location} onChange={(e) => setLocation(e.target.value)}>
                        <option value="" disabled>Select a country</option>
                        {countries.map((country, index) => (
                          <option key={index} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-span-12">
                      <div className="label">
                        <label htmlFor="comments" className="font-semibold">City:</label>
                      </div>
                      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City Name" className="input input-sm w-full max-w-xs" />
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
                      <select className="select select-primary w-full max-w-xs select-sm ml-2" value={salary.frequency} onChange={(e) => setSalary({ ...salary, frequency: e.target.value })}>
                        {frequencyOptions.map((freq, index) => (
                          <option key={index} value={freq}>
                            {freq === "monthly" ? "Monthly" : "Yearly"}
                          </option>
                        ))}
                      </select>

                    </div>
                    {/* salary */}

                    <div className="md:col-span-6 col-span-12">
                      <label className="font-semibold">Job Categories:</label>
                      <select className="select select-primary w-full max-w-xs select-sm" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="" disabled>Select a category</option>
                        {categoriesArray.map((cat, index) => (
                          <option key={index} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
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