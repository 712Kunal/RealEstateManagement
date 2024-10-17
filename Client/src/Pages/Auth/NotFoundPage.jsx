import React from 'react'

function NotFoundPage() {
  return (
    <div className='w-full h-screen overflow-hidden'>
        <h1 className='font-bold font-exo text-9xl text-slate-200'>404</h1>

        <div className="space-y-4">
          <h2 className="text-4xl font-semibold text-slate-500">
            Property Not Found
          </h2>
          <p className="text-slate-500 max-w-md mx-auto">
            The property you're looking for seems to have moved to a different location or doesn't exist anymore.
          </p>
        </div>

        <img src="src/assets/not Found.png" alt="imafd" />

    </div>
  )
}

export default NotFoundPage