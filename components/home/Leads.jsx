import React, { useState } from 'react';

const Leads = () => {
  const jobRoles = [
    'All Jobs',
    'Engineer',
    'Backend',
    'Frontend',
    'Marketing',
    'AI/ML',
    'Senior',
    'Sales',
    'Copywriter',
    'Designer',
    'Fullstack',
    'Quality Assurance',
    'Project Manager',
    'Product Manager',
    'Mobile',
  ];

  const [selectedJob, setSelectedJob] = useState('All Jobs');
  const [email, setEmail] = useState('');

  const handleJobSelect = (event) => {
    setSelectedJob(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for form submission here
    console.log('Selected Job:', selectedJob);
    console.log('Email:', email);
  };

  return (
    <div>
      <div className="hidden sm:visible md:flex m-auto mt-2 p-4 w-full sm:w-[80%] rounded-2xl ring-1 ring-inset ring-gray-500/20 bg-secondary">
        <form className="flex gap-2 px-14 items-center w-full" onSubmit={handleSubmit}>
          <p className="text-lg">Get new</p>
          <select
            value={selectedJob}
            onChange={handleJobSelect}
            className="dropdown w-56 input input-bordered bg-inherit items-center justify-between  my-1 sm:max-w-sm capitalize gap-2 border border-neutral-700"
          >
            {jobRoles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          <p className="text-lg">listings sent to</p>
          <input
            required
            placeholder="you@example.com"
            className="input input-bordered bg-secondary w-56 placeholder:text-gray-500"
            type="email"
            value={email}
            name="email"
            onChange={handleEmailChange}
          />
          <p className="text-lg">every week!</p>
          <button
            type="submit"
            className="flex transition w-36 ease-in-out md:ml-12 duration-200 cursor-pointer items-center justify-center rounded-md bg-zinc-800 px-3 py-3 text-white hover:bg-zinc-900 focus:outline-none"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Leads;
