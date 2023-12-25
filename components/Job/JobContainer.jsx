import axios from 'axios'
import { useState, useEffect } from 'react'
import JobCard from './JobCard'

const JobContainer = () => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_HOST}api/jobs`)
      .then((res) => res)
      .then((data) => {
        console.log(data.data)
        setData(data.data.response)
        setLoading(false)
      })
  }, [])


  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  return (
    <div>
      <div>
        {/* <div className='btn btn-sm  btn-secondary'> ...Page <span className='text-primary'>{currentPage}</span>  of {totalPages}</div> */}
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