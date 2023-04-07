import React from "react";

function LandingPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-0 py-24 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row">
        <div className="sm:w-1/2 mx-0 ">
          <h1 className="text-6xl font-extrabold text-gray-900 sm:text-5xl mx-0 mt-100">
            Find insights into life and death.
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Discover trends and patterns in life expectancy and mortality rates
            based on factors such as smoking, alcohol consumption, and
            residence.
          </p>
          <div className="mt-8">
            <form className="flex flex-col sm:flex-row max-w-md mx-auto sm:max-w-xl space-x-4">
              <div className="flex flex-col sm:flex-row w-full">
                <label
                  htmlFor="name"
                  className="mt-4 sm:mt-0 text-gray-700 w-full sm:w-auto"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="py-3 px-4 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:flex-grow-0 sm:flex-shrink-0"
                />
              </div>
              <div className="flex flex-col sm:flex-row w-full">
                <label
                  htmlFor="age"
                  className="mt-4 sm:mt-0 text-gray-700 w-full sm:w-auto"
                >
                  Age:
                </label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  className="mt-4 sm:mt-0 py-3 px-4 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:flex-grow-0 sm:flex-shrink-0"
                />
              </div>
              <div className="flex flex-col sm:flex-row w-full">
                <label
                  htmlFor="sex"
                  className="mt-4 sm:mt-0 text-gray-700 w-full sm:w-auto"
                >
                  Sex:
                </label>
                <select
                  id="sex"
                  name="sex"
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:flex-grow-0 sm:flex-shrink-0"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex flex-col sm:flex-row w-full">
                <label
                  htmlFor="rural"
                  className="mt-4 sm:mt-0 text-gray-700 w-full sm:w-auto"
                >
                  Rural:
                </label>
                <input
                  type="checkbox"
                  id="rural"
                  name="rural"
                  className="mt-4 sm:mt-0 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:flex-grow-0 sm:flex-shrink-0"
                />
              </div>
              <div className="flex flex-col sm:flex-row w-full">
                <label
                  htmlFor="disability"
                  className="mt-4 sm:mt-0 text-gray-700 w-full sm:w-auto"
                >
                  Disability:
                </label>
                <input
                  type="checkbox"
                  id="disability"
                  name="disability"
                  className="mt-4 sm:mt-0 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:flex-grow-0 sm:flex-shrink-0"
                />
              </div>

              <button
                type="submit"
                className="mt-4 sm:mt-0 ml-0 sm:ml-4 px-6 py-3 border border-transparent rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        {/* <div className="sm:w-1/2 sm:ml-4 mt-8 sm:mt-0 mr-0">
          <img src="https://via.placeholder.com/500x500" alt="Placeholder" className="rounded-md shadow-lg" />
        </div> */}
      </div>
    </div>
  );
}

export default LandingPage;
