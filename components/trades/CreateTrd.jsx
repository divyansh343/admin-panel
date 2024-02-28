import React from 'react'
import Wrapper from '../Wrapper'
import { MdArrowRightAlt } from 'react-icons/md'

const CreateTrd = () => {
  return (
   <Wrapper >
      <div className="lg:w-2/3 text-center mx-auto">
        <div className="flex justify-center mb-8"></div>
        <h1 className=" font-bold text-5xl md:text-5xl xl:text-5xl">
          Setup trading account<br />
        </h1>
        <p className="mt-8  text-lg">
          Crypto / Forex
          <span className="font-bold text-primary underline">AI</span>
        </p>
        <div className="my-8">
          <div className="p-4 w-5/5 md:w-4/5 mx-auto text-left border border-gray-400 rounded-2xl">
            <div className="mb-4 flex flex-col">
              <label htmlFor="account" className="font-bold mb-1 text-sm">
                Account Name
              </label>
              <input
                type="text"
                id="account"
                className="w-full p-2 border rounded-md text-sm text-primary"
                placeholder="E.g. Forex 1"
                value={accountName}
                onChange={handleAccountNameChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="numArticles" className="block font-bold mb-1 text-sm">
                Account Size
              </label>
              <input
                type="number"
                id="numArticles"
                className="w-full p-2 border rounded-md text-sm text-primary"
                value={accountSize}
                onChange={handleAccountSizeChange}
              />
            </div>
            <div className="flex flex-col sm:flex-row space-x-1">
              {/* ... (existing JSX) */}
              <div className="w-full sm:w-1/2 mb-4">
                <label htmlFor="type" className="block font-bold mb-1 text-sm">
                  Account Type
                </label>
                <select
                  id="type"
                  className="w-full p-2 border rounded-md text-sm text-primary"
                  value={accountType}
                  onChange={handleAccountTypeChange}
                >
                  <option value="crypto">crypto</option>
                  <option value="forex">forex</option>
                </select>
              </div>
              <div className="w-full sm:w-1/2 mb-4">
                <label htmlFor="task" className="block font-bold mb-1 text-sm">
                  Currency
                </label>
                <select
                  id="task"
                  className="w-full p-2 border rounded-md text-sm text-primary"
                  value={currency}
                  onChange={handleCurrencyChange}
                >
                  <option value="usd">USD</option>
                  <option value="usdt">USDT</option>
                </select>
              </div>
            </div>
            <button
              className="bg-white text-black border border-gray-600 font-bold py-2 px-4 rounded-lg text-sm ml-2"
              onClick={handleCreateAccount}
            >
              Create Account <MdArrowRightAlt className="inline-block text-xl" />
            </button>
            <p className="text-sm"></p>
            {/* <div
            className="border border-gray-400 rounded-lg px-2 py-2 mt-4 mb-4"
          >
            <p className="text-sm mb-1">
              Generating Articles -
              <span className="text-primary font-bold text-lg">0</span>/0
            </p>

            <ul className="mt-1"></ul>
            <div className="mt-auto"> </div>
          </div> */}
            <div className="border-t border-gray-300 mt-2">
              <p className="text-sm text-gray-500 mt-4">
                Output will come in markdown file format.
                <br />
                You can import these files direcly to Notion or your blog
                websites.
                <br />
                Or use Blog boilerplate code from
                <span className="underline">

                </span>
                to host your blog.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
   
  )
}

export default CreateTrd