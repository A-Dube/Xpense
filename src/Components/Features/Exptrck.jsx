import React from 'react'
import axios from 'axios'
import Header from '../Navbar/Header'

const Exptrck = () => {
  return (
    <div className='w-full h-full'>
      <Header />
        <main className='p-16 w-full pt-40'>
          <div className='flex flex- row items-center justify-center gap-20'>
              <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-row items-center justify-center gap-10'>
                  <div className='flex flex-col rounded-lg bg-lime-200 p-5'>
                    <p className='text-black font-medium'>Current Balance</p>
                    <p className='text-slate-400 text-3xl'>$8200</p>
                  </div>
                  <div className='flex flex-col rounded-lg bg-lime-100 p-5'>
                    <p className='text-black font-medium'>Total Income</p>
                    <p className='text-slate-400 text-3xl'>$8200</p>
                  </div>
                  <div className='flex flex-col rounded-lg bg-lime-300/80 p-5'>
                    <p className='text-black font-medium'>Total Expenses</p>
                    <p className='text-slate-400 text-3xl'>$8200</p>
                  </div>
                </div>
                <div className='flex items-center border-2'>
                  
                </div>
              </div>
          </div>   
        </main>
    </div>
  )
}

export default Exptrck
