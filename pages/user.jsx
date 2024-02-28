import Wrapper from "@/components/Wrapper";
import { useTradeStore } from "@/utils/appstore"
import { signOut } from "@/utils/handleCookies";
import axios from "axios";
import Link from "next/link";
import { BsCurrencyExchange } from "react-icons/bs";
import { useEffect, useState } from "react";
import { PiCurrencyBtcFill } from "react-icons/pi";
import Image from "next/image";

const User = () => {
  const [accounts, setAccounts] = useState([])

  useEffect(() => {
    let token = localStorage.getItem('token')
    // console.log(token)
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
        // console.log(response.data.data)
        setAccounts(response.data.data)
      })
      .catch((error) => {
        // console.log(error);
      });

  }, [])

  return (
    <Wrapper >
      <main className="">
        <div className="page-container relative mt-10 h-full flex flex-auto flex-col px-4 sm:px-2 md:px-8 py-4 sm:py-6">
          <div className="container mx-auto">
            <div className=" mb-4">
              <button onClick={signOut}>sign out</button>
            </div>
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">

              <Link href="/account/create">
                <div className="border border-dashed bg-clip-border rounded-2xl border-primary bg-light/30 drop-shadow-lg">
                  <div className="card-body">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <span className="avatar avatar-rounded text-2xl" data-avatar-size="55" >
                          <span className="avatar-icon">
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
                      <div className="tag gap-1 font-bold border-0 rounded-md text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/20">

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
                      <div className="border border-dashed bg-clip-border rounded-2xl border-primary bg-light/30 drop-shadow-lg">
                        <div className="card-body">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                              <span className="avatar avatar-rounded text-2xl" data-avatar-size="55" >
                                <span className="avatar-icon">
                                  {item.account_type === "forex" ? <BsCurrencyExchange /> : <PiCurrencyBtcFill />

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
                            <div className="tag gap-1 font-bold border-0 text-emerald-600 dark:text-emerald-400 px-1 rounded-md bg-emerald-100 dark:bg-emerald-500/20">
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
            </div> */}
            <div className="flex flex-col">
              <h2 className="mb-4 text-2xl font-bold">Active Accounts</h2>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Link href="/account/create">
                  <div className="flex items-start rounded-xl bg-base-100 p-4 shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                    <svg width="199px" height="199px" viewBox="0 -0.5 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">

                              <g id="SVGRepo_bgCarrier" stroke-width="0" />

                              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                              <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M33.2538 16.1292C33.2538 25.0371 26.0329 32.2584 17.1255 32.2584C8.21799 32.2584 0.99707 25.0371 0.99707 16.1292C0.99707 7.22128 8.21799 0 17.1255 0C26.0329 0 33.2538 7.22128 33.2538 16.1292ZM21.0002 10.1366C23.2438 10.9071 24.8849 12.0607 24.5629 14.2077C24.3291 15.7799 23.4543 16.5403 22.2921 16.8065C23.8866 17.6335 24.4301 19.2029 23.9251 21.1005C22.9664 23.8314 20.6874 24.0613 17.6562 23.4905L16.9202 26.4261L15.1434 25.9844L15.8693 23.0882C15.4087 22.9742 14.9379 22.8522 14.4529 22.7221L13.724 25.6325L11.9492 25.1908L12.6842 22.2491L9.10534 21.3496L9.98817 19.3226C9.98817 19.3226 11.2982 19.6685 11.28 19.6433C11.7832 19.7673 12.0069 19.4406 12.095 19.2238L14.0895 11.256C14.1117 10.8798 13.9811 10.4059 13.2613 10.2264C13.2886 10.2072 11.9705 9.90669 11.9705 9.90669L12.4433 8.01585L16.0272 8.90026L16.7562 5.99188L18.532 6.43358L17.8182 9.28448C18.2961 9.39238 18.776 9.5023 19.2427 9.61828L19.9514 6.78553L21.7282 7.22724L21.0002 10.1366ZM16.7488 14.9882C17.9591 15.3091 20.5928 16.0074 21.0519 14.1765C21.5202 12.3033 18.9615 11.7376 17.7087 11.4606L17.7086 11.4606L17.7085 11.4606C17.5666 11.4292 17.4414 11.4015 17.3393 11.3761L16.4545 14.9117C16.5388 14.9325 16.6378 14.9588 16.7488 14.9882ZM15.3775 20.6807C16.8271 21.0626 19.9976 21.8977 20.5021 19.8803C21.0185 17.8175 17.9445 17.1305 16.4446 16.7952L16.4441 16.7951C16.2767 16.7577 16.129 16.7247 16.008 16.6946L15.032 20.5913C15.1311 20.6158 15.2472 20.6464 15.3771 20.6806L15.3775 20.6807Z" fill="#000000" /> </g>

                            </svg>
                    </div>

                    <div className="ml-4">
                      <h2 className="font-semibold">Add New Account</h2>
                      <p className="mt-2 text-sm text-gray-500">Last opened 4 days ago</p>
                    </div>
                  </div>
                </Link>

                {
                  accounts.map(item => (
                    <>
                      <Link href={`account/${item._id}`}>
                        <div className="flex items-start rounded-xl bg-base-100 p-4 shadow-lg">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">

                            {item.account_type === "forex" ? <BsCurrencyExchange /> : <svg width="199px" height="199px" viewBox="0 -0.5 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">

                              <g id="SVGRepo_bgCarrier" stroke-width="0" />

                              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                              <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M33.2538 16.1292C33.2538 25.0371 26.0329 32.2584 17.1255 32.2584C8.21799 32.2584 0.99707 25.0371 0.99707 16.1292C0.99707 7.22128 8.21799 0 17.1255 0C26.0329 0 33.2538 7.22128 33.2538 16.1292ZM21.0002 10.1366C23.2438 10.9071 24.8849 12.0607 24.5629 14.2077C24.3291 15.7799 23.4543 16.5403 22.2921 16.8065C23.8866 17.6335 24.4301 19.2029 23.9251 21.1005C22.9664 23.8314 20.6874 24.0613 17.6562 23.4905L16.9202 26.4261L15.1434 25.9844L15.8693 23.0882C15.4087 22.9742 14.9379 22.8522 14.4529 22.7221L13.724 25.6325L11.9492 25.1908L12.6842 22.2491L9.10534 21.3496L9.98817 19.3226C9.98817 19.3226 11.2982 19.6685 11.28 19.6433C11.7832 19.7673 12.0069 19.4406 12.095 19.2238L14.0895 11.256C14.1117 10.8798 13.9811 10.4059 13.2613 10.2264C13.2886 10.2072 11.9705 9.90669 11.9705 9.90669L12.4433 8.01585L16.0272 8.90026L16.7562 5.99188L18.532 6.43358L17.8182 9.28448C18.2961 9.39238 18.776 9.5023 19.2427 9.61828L19.9514 6.78553L21.7282 7.22724L21.0002 10.1366ZM16.7488 14.9882C17.9591 15.3091 20.5928 16.0074 21.0519 14.1765C21.5202 12.3033 18.9615 11.7376 17.7087 11.4606L17.7086 11.4606L17.7085 11.4606C17.5666 11.4292 17.4414 11.4015 17.3393 11.3761L16.4545 14.9117C16.5388 14.9325 16.6378 14.9588 16.7488 14.9882ZM15.3775 20.6807C16.8271 21.0626 19.9976 21.8977 20.5021 19.8803C21.0185 17.8175 17.9445 17.1305 16.4446 16.7952L16.4441 16.7951C16.2767 16.7577 16.129 16.7247 16.008 16.6946L15.032 20.5913C15.1311 20.6158 15.2472 20.6464 15.3771 20.6806L15.3775 20.6807Z" fill="#000000" /> </g>

                            </svg>

                            }
                          </div>

                          <div className="ml-4">
                            <h2 className="font-semibold">{item.account_name}</h2>
                            <p className="mt-2 text-sm text-gray-500">{item.account_size}</p>
                          </div>
                        </div>
                      </Link>
                    </>
                  ))
                }

              </div>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>

  )
}

export default User