import Wrapper from "@/components/Wrapper";
import { useTradeStore } from "@/utils/appstore"
import { signOut } from "@/utils/handleCookies";
import axios from "axios";
import Link from "next/link";
import { BsCurrencyExchange } from "react-icons/bs";
import { useEffect, useState } from "react";
import { PiCurrencyBtcFill } from "react-icons/pi";

const User = () => {
  const [accounts, setAccounts] = useState([])

  useEffect(() => {
    let token = localStorage.getItem('token')
    console.log(token)
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_HOST}/api/acc/accounts`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    axios.request(config)
      .then((response) => {
        console.log(response.data.data)
        setAccounts(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });

  }, [])

  return (
    <Wrapper >
      <main class="">
        <div class="page-container relative mt-10 h-full flex flex-auto flex-col px-4 sm:px-2 md:px-8 py-4 sm:py-6">
          <div class="container mx-auto">
            <div class=" mb-4">
              <button onClick={signOut}>sign out</button>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">

              <Link href="/account/create">
                <div class="border border-dashed bg-clip-border rounded-2xl border-primary bg-light/30 drop-shadow-lg">
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

                        </div>
                      </div>
                      <div class="tag gap-1 font-bold border-0 rounded-md text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/20">

                        <span className='p-1'>Crypto / Forex</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              {
                accounts.map(item => (
                  <>
                  <Link href={`account/${item._id}`}>
                    <div class="border border-dashed bg-clip-border rounded-2xl border-primary bg-light/30 drop-shadow-lg">
                      <div class="card-body">
                        <div class="flex justify-between items-center">
                          <div class="flex items-center gap-4">
                            <span class="avatar avatar-rounded text-2xl" data-avatar-size="55" >
                              <span class="avatar-icon">
                              {item.account_type === "forex" ? <BsCurrencyExchange /> :<PiCurrencyBtcFill />

}
                              </span>
                            </span>
                            <div>
                              <span>{item.account_name}</span>
                              <h3>
                                <span>{item.account_size}</span>
                              </h3>
                            </div>
                          </div>
                          <div class="tag gap-1 font-bold border-0 text-emerald-600 dark:text-emerald-400 px-1 rounded-md bg-emerald-100 dark:bg-emerald-500/20">
                            <span>
                             
                            </span>
                            <span>{item.account_type === "forex" ? <>Forex</> : <>Crypto</>}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  </>
                ))
              }


            </div>

          </div>
        </div>
      </main>
    </Wrapper>

  )
}

export default User