import PostJob from '@/components/Job/PostJob'
import { useState } from 'react'

const Post = () => {
  const [mode, setMode] = useState(false);
  const [pass, setPass] = useState("");
  const handleAuth = () => {
    if (pass === "0147852") {
      return setMode(true)
    }
    alert("wrong password")
  }
  return (
    <div>
      {
        !mode ?  
        <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            Admin Authntication
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">

                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" name="password"  placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primaryfocus:border-primaryblock w-full p-2.5 dark:bg-gray-700 dark:border-graydark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
                <p onClick={handleAuth} className="btn btn-primary btn-wide text-sm normal-case">Sign in</p>
              </form>
            </div>
          </div>
        </div>
      </section> : <PostJob />
      }
    </div>
  )
}

export default Post