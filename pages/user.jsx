import { create } from 'zustand'

const User = () => {
  const useStore = create((set) => ({
    bears: 554,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
  }))
  const bears = useStore((state) => state.bears)

  return (
    <main class="h-screen">
      <div class="page-container relative mt-10 h-full flex flex-auto flex-col px-4 sm:px-6 md:px-8 py-4 sm:py-6">
        <div class="container mx-auto">
          <div class=" mb-4">
            <h3 className='text-2xl'>Accounts{bears}</h3>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
            <div class="border border-secondary rounded-2xl drop-shadow-lg">
              <div class="card-body">
                <div class="flex justify-between items-center">
                  <div class="flex items-center gap-4">
                    <span class="avatar avatar-rounded text-2xl" data-avatar-size="55" >
                      <span class="avatar-icon">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                          </path>
                        </svg>
                      </span>
                    </span>
                    <div>
                      <span>Create New Account</span>
                      <h3>
                        <span>2,420</span>
                      </h3>
                    </div>
                  </div>
                  <div class="tag gap-1 font-bold border-0 rounded-md text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/20">

                    <span className='p-1'>Crypto / Forex</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="border border-secondary rounded-2xl drop-shadow-lg">
              <div class="card-body">
                <div class="flex justify-between items-center">
                  <div class="flex items-center gap-4">
                    <span class="avatar avatar-rounded text-2xl" data-avatar-size="55" >
                      <span class="avatar-icon">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                          </path>
                        </svg>
                      </span>
                    </span>
                    <div>
                      <span>Total Customers</span>
                      <h3>
                        <span>2,420</span>
                      </h3>
                    </div>
                  </div>
                  <div class="tag gap-1 font-bold border-0 text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/20">
                    <span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <span>17.2%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="border border-secondary rounded-2xl drop-shadow-lg">
              <div class="card-body">
                <div class="flex justify-between items-center">
                  <div class="flex items-center gap-4">
                    <span class="avatar avatar-rounded !bg-blue-500 text-2xl" data-avatar-size="55" >
                      <span class="avatar-icon">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                          </path>
                        </svg>
                      </span>
                    </span>
                    <div>
                      <span>Active Customers</span>
                      <h3>
                        <span>1,897</span>
                      </h3>
                    </div>
                  </div>
                  <div class="tag gap-1 font-bold border-0 text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/20">
                    <span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <span>32.7%</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  )
}

export default User