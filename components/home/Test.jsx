import React from 'react'

const Test = () => {
  return (

    <div>

      <div class="relative">
        <div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20">
          <div class="blur-[106px] h-20 bg-gradient-to-br to-purple-400 from-blue-700">

          </div>
          <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600">
          </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div class="relative pt-10 ml-auto">
            <div class="lg:w-2/3 text-center mx-auto">
              {/* <div class="flex justify-center mb-8">
                <div>
                  <a href="https://www.producthunt.com/posts/boilercode?utm_source=badge-top-post-badge&amp;utm_medium=badge&amp;utm_souce=badge-boilercode" target="_blank">
                   
                  </a>

                </div>
              </div> */}
              <h1 class="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">Boilerplate Code for <br /><span class="text-primary">NextJs Saa</span></h1><p class="mt-8 text-gray-700 dark:text-gray-300 text-3xl">Ship your <span class="font-bold text-primary underline">SaaS</span> Super Fast</p>
              <div class="mt-12 flex flex-wrap justify-center gap-y-4 pb-8 gap-x-4">
                <a href="#features" class="relative flex h-9 w-full items-center justify-center px-8 before:absolute 
                              before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 
                              hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                  <span class="relative text-sm font-semibold text-white">Explore Boilerplates</span></a><a href="/blog/nextjs-saas" class="relative flex h-9 w-full items-center justify-center px-8 before:absolute 
                              before:inset-0 before:rounded-full before:bg-gray-500 before:transition before:duration-300 
                              hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"><span class="relative text-sm font-semibold text-white">View Documentation</span>
                </a>
              </div>
              {/* <div class="py-8 mt-16 border-y border-gray-800 sm:flex flex-col sm:flex-row justify-between items-center">
                <div class="text-center flex-1 mb-4 sm:mb-0"><h6 class="text-lg font-semibold text-gray-700 dark:text-white">User Auth</h6><p class="mt-2 text-gray-500">User Auth including <span class="text-primary">Social Login</span> and <span class="text-primary">Magic Link Login</span></p>
                </div>
                <div class="text-center flex-1 mb-4 sm:mb-0"><h6 class="text-lg font-semibold text-gray-700 dark:text-white">Payments</h6><p class="mt-2 text-gray-500">Support Integration with <span class="text-primary">Stripe</span> and <span class="text-primary">LemonSqueezy</span> dynamically</p>
                </div>
                <div class="text-center flex-1"><h6 class="text-lg font-semibold text-gray-700 dark:text-white">SEO First</h6><p class="mt-2 text-gray-500">Manage your SEO super easy by a config file</p>
                </div>
              </div>
              <div class="mt-12 flex flex-wrap justify-center gap-x-4">
                <div class="p-4 transition duration-200 flex flex-col items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-gray-800 dark:text-white mb-2" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path><path d="M15 12v-3"></path></svg><p class="text-gray-700 text-sm">NextJs</p>
                </div>
                <div class="p-4 transition duration-200 flex flex-col items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-gray-800 dark:text-white mb-2" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0"></path><path d="M12.556 6c.65 0 1.235 .373 1.508 .947l2.839 7.848a1.646 1.646 0 0 1 -1.01 2.108a1.673 1.673 0 0 1 -2.068 -.851l-.46 -1.052h-2.73l-.398 .905a1.67 1.67 0 0 1 -1.977 1.045l-.153 -.047a1.647 1.647 0 0 1 -1.056 -1.956l2.824 -7.852a1.664 1.664 0 0 1 1.409 -1.087l1.272 -.008z"></path></svg><p class="text-gray-700 text-sm">User Auth</p>
                </div>
                <div class="p-4 transition duration-200 flex flex-col items-center"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="text-gray-800 dark:text-white mb-2" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M165 144.7l-43.3 9.2-.2 142.4c0 26.3 19.8 43.3 46.1 43.3 14.6 0 25.3-2.7 31.2-5.9v-33.8c-5.7 2.3-33.7 10.5-33.7-15.7V221h33.7v-37.8h-33.7zm89.1 51.6l-2.7-13.1H213v153.2h44.3V233.3c10.5-13.8 28.2-11.1 33.9-9.3v-40.8c-6-2.1-26.7-6-37.1 13.1zm92.3-72.3l-44.6 9.5v36.2l44.6-9.5zM44.9 228.3c0-6.9 5.8-9.6 15.1-9.7 13.5 0 30.7 4.1 44.2 11.4v-41.8c-14.7-5.8-29.4-8.1-44.1-8.1-36 0-60 18.8-60 50.2 0 49.2 67.5 41.2 67.5 62.4 0 8.2-7.1 10.9-17 10.9-14.7 0-33.7-6.1-48.6-14.2v40c16.5 7.1 33.2 10.1 48.5 10.1 36.9 0 62.3-15.8 62.3-47.8 0-52.9-67.9-43.4-67.9-63.4zM640 261.6c0-45.5-22-81.4-64.2-81.4s-67.9 35.9-67.9 81.1c0 53.5 30.3 78.2 73.5 78.2 21.2 0 37.1-4.8 49.2-11.5v-33.4c-12.1 6.1-26 9.8-43.6 9.8-17.3 0-32.5-6.1-34.5-26.9h86.9c.2-2.3.6-11.6.6-15.9zm-87.9-16.8c0-20 12.3-28.4 23.4-28.4 10.9 0 22.5 8.4 22.5 28.4zm-112.9-64.6c-17.4 0-28.6 8.2-34.8 13.9l-2.3-11H363v204.8l44.4-9.4.1-50.2c6.4 4.7 15.9 11.2 31.4 11.2 31.8 0 60.8-23.2 60.8-79.6.1-51.6-29.3-79.7-60.5-79.7zm-10.6 122.5c-10.4 0-16.6-3.8-20.9-8.4l-.3-66c4.6-5.1 11-8.8 21.2-8.8 16.2 0 27.4 18.2 27.4 41.4.1 23.9-10.9 41.8-27.4 41.8zm-126.7 33.7h44.6V183.2h-44.6z"></path></svg><p class="text-gray-700 text-sm">Payments</p>
                </div>
                <div class="p-4 transition duration-200 flex flex-col items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-gray-800 dark:text-white mb-2" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12.5 2c3.113 0 5.309 1.785 5.863 4.565c1.725 1.185 2.637 3.152 2.637 5.435c0 2.933 -2.748 5.384 -5.783 5.496l-.217 .004h-1.754l-.466 2.8a1.998 1.998 0 0 1 -1.823 1.597l-.157 .003h-2.68a1.5 1.5 0 0 1 -1.182 -.54a1.495 1.495 0 0 1 -.348 -1.07l.042 -.29h-1.632c-1.004 0 -1.914 -.864 -1.994 -1.857l-.006 -.143l.01 -.141l1.993 -13.954l.003 -.048c.072 -.894 .815 -1.682 1.695 -1.832l.156 -.02l.143 -.005h5.5zm5.812 7.35l-.024 .087c-.706 2.403 -3.072 4.436 -5.555 4.557l-.233 .006h-2.503v.05l-.025 .183l-1.2 5a1.007 1.007 0 0 1 -.019 .07l-.088 .597h2.154l.595 -3.564a1 1 0 0 1 .865 -.829l.121 -.007h2.6c2.073 0 4 -1.67 4 -3.5c0 -1.022 -.236 -1.924 -.688 -2.65z" stroke-width="0" fill="currentColor"></path></svg><p class="text-gray-700 text-sm">Paypal</p>
                </div>
                <div class="p-4 transition duration-200 flex flex-col items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-gray-800 dark:text-white mb-2" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M17 12a2 2 0 1 0 4 0a9 9 0 1 0 -2.987 6.697"></path><path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg><p class="text-gray-700 text-sm">Emails</p>
                </div>
                <div class="p-4 transition duration-200 flex flex-col items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-gray-800 dark:text-white mb-2" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"></path><path d="M4 6v6a8 3 0 0 0 16 0v-6"></path><path d="M4 12v6a8 3 0 0 0 16 0v-6"></path></svg><p class="text-gray-700 text-sm">Database</p>
                </div>
                <div class="p-4 transition duration-200 flex flex-col items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-gray-800 dark:text-white mb-2" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"></path></svg><p class="text-gray-700 text-sm">Tailwind</p>
                </div>
                <div class="p-4 transition duration-200 flex flex-col items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-gray-800 dark:text-white mb-2" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11.217 19.384a3.501 3.501 0 0 0 6.783 -1.217v-5.167l-6 -3.35"></path><path d="M5.214 15.014a3.501 3.501 0 0 0 4.446 5.266l4.34 -2.534v-6.946"></path><path d="M6 7.63c-1.391 -.236 -2.787 .395 -3.534 1.689a3.474 3.474 0 0 0 1.271 4.745l4.263 2.514l6 -3.348"></path><path d="M12.783 4.616a3.501 3.501 0 0 0 -6.783 1.217v5.067l6 3.45"></path><path d="M18.786 8.986a3.501 3.501 0 0 0 -4.446 -5.266l-4.34 2.534v6.946"></path><path d="M18 16.302c1.391 .236 2.787 -.395 3.534 -1.689a3.474 3.474 0 0 0 -1.271 -4.745l-4.308 -2.514l-5.955 3.42"></path></svg><p class="text-gray-700 text-sm">AI</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Test