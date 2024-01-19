import UpdateUser from '@/components/user/UpdateUser'
import { signOut } from '@/utils/handleCookies'

const user = () => {
  return (
    <div className='lg:mx-12 mt-12'>
   
      <UpdateUser />
    </div>
  )
}

export default user