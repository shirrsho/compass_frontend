import React from 'react'

function Loading() {
    return (
        <div className="w-full h-full flex items-center justify-center align-middle">
          <div className="py-2 px-5 rounded-lg flex items-center flex-col">
            <div className="loader-dots block relative w-20 h-5 mt-2">
              <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-cyan-900"></div>
              <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-cyan-900"></div>
              <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-cyan-900"></div>
              <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-cyan-900"></div>
            </div>
            <div className="text-gray-500 text-s font-light mt-2 text-center">
              Loading items...
            </div>
          </div>
          </div>
    )
}

export default Loading