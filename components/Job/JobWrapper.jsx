import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import JobPage from './JobPage'
import { Watch } from 'react-loader-spinner'

const JobWrapper = () => {
  const router = useRouter()
  const [jobx, setData] = useState()
  const [isLoading, setLoading] = useState(true)
  const idk = router.query.jobid
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_HOST}api/jobs/onejob?job=${router.query.jobid}`)
      .then((res) => res)
      .then((data) => {
        console.log(data)
        setData(data.data.response)
        setLoading(false)
      })
  }, [router])
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
  if (!jobx) return <p>No profile data</p>
  return (
    <div>
      <JobPage jobx={jobx} />
    </div>
  )
}

export default JobWrapper