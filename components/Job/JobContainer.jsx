import axios from 'axios'
import { useState, useRef, useEffect } from 'react'
import JobCard from './JobCard'
import { Watch } from 'react-loader-spinner'
import { CgCardClubs } from "react-icons/cg";

const JobContainer = () => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const stickyRef = useRef(null);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_HOST}api/jobs`)
      .then((res) => res)
      .then((data) => {
        console.log(data.data)
        setData(data.data.response)
        setCurrentPage(data.data.currentPage);
        setTotalPages(data.data.totalPages);
        setLoading(false)
      })
  }, [])


  if (isLoading) return <div className='grid justify-center'>
    <Watch
      visible={true}
      height="80"
      width="80"
      radius="48"
      color="#0d51ff"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
    <p className='m-2 text-xl font-semibold'>Loading...</p>
  </div>
  if (!data) return <p>No profile data</p>
  return (
    <div>
      <div>
      <div  ref={stickyRef} className="sticky top-0 md:top-2 bg-[#f9fafb] border md:border-primary border-dashed shadow-inherit  z-50  py-3 md:m-3 md:rounded-3xl "><div className="tabs  font-bold fontSpecial">
          <p  className="tab tab-lg tab-active tab-bordered tab-primary flex-1" href="#hot"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path></svg> <span disabled={currentPage === 1}>Latest</span> </p>

          <p  disabled={currentPage === totalPages} className="tab tab-lg tab-bordered tab-active text-primary flex-1  " ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>Next </p>
        </div>
        </div>

        <div className='btn btn-sm m-3  btn-secondary'><CgCardClubs  /> Page <span className='text-primary'>{currentPage}</span>  of {totalPages}</div>
        {
          data.map((item) => (

            <div key={item._id} className='my-3' >
              <JobCard item={item} />
            </div>
          ))

        }
      </div>
    </div>
  )
}

export default JobContainer