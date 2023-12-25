import JobPage from '@/components/Job/JobPage';
import JobWrapper from '@/components/Job/JobWrapper';
import axios from 'axios';
import React from 'react'

const index = () => {
  return (
    <div>
      <JobWrapper />
      {/* <JobPage  jobx={jobx} /> */}
    </div>
  )
}
// export async function getServerSideProps(context) {

//   const {
//     jobid
//   } = context.query  // Fetch data from external API


//   const result = await axios.get(
//     `${process.env.NEXT_PUBLIC_HOST}api/jobs/onejob?job=${jobid}`
//   );
//   const jobx = result.data.response

//   // Pass data to the page via props
//   return {
//     props: {
//       jobx
//     }
//   }
// }
export default index