import RequestCharts from '@/components/admin/RequestCharts'
import UsersChart from '@/components/admin/UsersChart'
import { signOut } from '@/utils/handleCookies'
import Link from 'next/link'

const index = () => {

  return (
    <div>
      {/* admin page */}
      <div className='lg:mx-12 mt-12'>
        <button onClick={signOut} className="group inline-block justify-center ml-4 md:ml-0 p-1 text-center text-sm  font-text-primary" href="/admin/post">
          <div className="inline-flex items-stretch h-10 p-0.5 text-white rounded-lg bg-primary">
            <div className="flex items-center px-4  group-hover:bg-opacity-40 rounded-md "><span> Sign Out</span>
            </div>
          </div>
        </button>
        <Link className="group inline-block justify-center ml-4 md:ml-0 p-1 text-center text-sm  font-text-primary" href="/admin/create">
          <div className="inline-flex items-stretch h-10 p-0.5 text-white rounded-lg bg-primary">
            <div className="flex items-center px-4  group-hover:bg-opacity-40 rounded-md "><span> Create New users</span>
            </div>
          </div>
        </Link>
      </div>
      <UsersChart />
      <div className='mx-8 md:mx-24'>
        <p className='text-2xl'>
          Requests 
        </p>
      </div>
      <RequestCharts />
    </div>
  )
}

export default index