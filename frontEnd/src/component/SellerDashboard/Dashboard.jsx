import React from 'react'

const Dashboard = () => {
  return (
    <div className=' w-full'>
      <h1 className='text-center text-3xl flex justify-center items-center h-[100px] font-bold'>Welcome to Dashboard</h1>
  <div className="relative pt-32 pb-32 bg-lightBlue-500 w-full ">
  <div className="px-4 md:px-6 mx-auto w-full">
    <div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4 ">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1 ">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                    Traffic
                  </h5>
                  <span className="font-bold text-xl">350,897</span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                    <i className="far fa-chart-bar" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-blueGray-500 mt-4">
                <span className="text-emerald-500 mr-2">
                  <i className="fas fa-arrow-up" /> 3.48%
                </span>
                <span className="whitespace-nowrap">Since last month</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                    NEW USERS
                  </h5>
                  <span className="font-bold text-xl">2,356</span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">
                    <i className="fas fa-chart-pie" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-blueGray-500 mt-4">
                <span className="text-red-500 mr-2">
                  <i className="fas fa-arrow-down" /> 3.48%
                </span>
                <span className="whitespace-nowrap">Since last week</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                    SALES
                  </h5>
                  <span className="font-bold text-xl">924</span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
                    <i className="fas fa-users" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-blueGray-500 mt-4">
                <span className="text-orange-500 mr-2">
                  <i className="fas fa-arrow-down" /> 1.10%
                </span>
                <span className="whitespace-nowrap">Since yesterday</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                    PERFORMANCE
                  </h5>
                  <span className="font-bold text-xl">49,65%</span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-lightBlue-500">
                    <i className="fas fa-percent" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-blueGray-500 mt-4">
                <span className="text-emerald-500 mr-2">
                  <i className="fas fa-arrow-up" /> 12%
                </span>
                <span className="whitespace-nowrap">Since last month</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



    </div>
  )
}

export default Dashboard