import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({ item }) => {
  return (
    <Link className='' href={`/jobs/${item._id}`}>
      <li>
        <div class="group relative py-5 sm:rounded-2xl">
          <div class="absolute -inset-x-4 -inset-y-px  bg-blue-50 opacity-0 group-hover:opacity-100 sm:-inset-x-6 rounded-2xl lg:-inset-x-8 duration-200">
          </div>
          <div class="relative flex items-center">
            <div class="relative h-[3.125rem] w-[3.125rem] sm:h-[3.75rem] sm:w-[3.75rem] flex-none">
              <Image height={50} width={50} class="absolute inset-0 h-full w-full rounded-full object-cover" src={item.business_image} alt={item.business_name} />

              <div class="absolute inset-0 rounded-full ring-1 ring-inset ring-black/[0.08]">
              </div>
            </div> <dl class="ml-4 flex flex-auto flex-wrap gap-y-1 gap-x-2 overflow-hidden sm:ml-6 sm:grid sm:grid-cols-[auto_1fr_auto_auto] sm:items-center">

              <div class="col-span-2 mr-2.5 flex-none sm:mr-0">
                <dt class="sr-only">Company</dt> <dd class="text-xs font-semibold leading-6 text-slate-500">{item.business_name}</dd>

              </div> <div class="col-start-3 row-start-2 -ml-2.5 flex-auto sm:ml-0 sm:pl-6"> <dt class="sr-only">Location</dt> <dd class="flex items-center text-xs leading-6 text-slate-500"> <svg viewBox="0 0 2 2" aria-hidden="true" class="mr-2 h-0.5 w-0.5 flex-none fill-slate-400 sm:hidden"> <circle cx="1" cy="1" r="1"></circle> </svg> {item.location}</dd>

              </div>
              <div class="col-span-2 col-start-1 w-full flex-none">
                <dt class="sr-only">Title</dt>
                <dd class="text-lg font-semibold leading-6 text-slate-900"> <p>
                  <span class="absolute -inset-x-4 inset-y-[calc(-1*(theme(spacing.6)+1px))] sm:-inset-x-6 sm:rounded-2xl lg:-inset-x-8"></span> {item.job_title} </p> </dd>
              </div> <div class="col-start-1 mr-2.5 flex-none"> <dt class="sr-only">Type</dt> <dd class="text-xs leading-6 text-slate-500"> Remote </dd>
              </div> <div class="col-span-3 -ml-2.5 flex-none">

                <dt class="sr-only">Posted On</dt> <dd class="flex items-center text-xs leading-6 text-slate-500"> <svg viewBox="0 0 2 2" aria-hidden="true" class="mr-2 h-0.5 w-0.5 flex-none fill-slate-400"> <circle cx="1" cy="1" r="1"></circle>
                </svg> {item.salary.value}$</dd>
              </div> </dl>
          </div>

        

        </div>
      </li>
    </Link>
  )
}

export default Card