import React from 'react'
import Pic1 from '../../assets/home2.png'
import Pic2 from '../../assets/home3.jpg'
import Header from './Header'

const Home = () => {
  return (
    <>
      <div className='w-full h-full'>
      <Header />
        <main className='p-10 w-full pt-40'>
          <div className='flex items-center justify-center'>
              <div className='flex flex-row gap-[18%] items-center p-6 bg-[repeating-linear-gradient(to_right,#e5e5e5_0px,#e5e5e5_1px,transparent_1px,transparent_80px)] overflow-hidden'>
                <div className='flex items-center justify-center w-[50%] h-[30%] rounded-3xl overflow-hidden ml-16'>
                <img src={Pic1} className='w-full h-full object-cover'/>
                </div>
                <div className='flex flex-col border-2 border-[#5bb450] rounded-3xl shadow-lg p-10'>
                  <h2 className='font-semibold text-3xl'>Track your expenses,<br className='text-center'/>Faster and Safer</h2>
                  <p className='text-xl'>Take control of your money —<br/>track your expenses, faster and<br/>safer.
                   Stay on top of every rupee<br/>with real-time insights.</p>
                </div>
              </div>
          </div>
          <div className='flex items-center justify-center pt-32'>
            <div className='flex flex-row gap-[18%] items-center p-6 bg-[#90cb6392]'>
                <div className='flex flex-col border-2 border-[#5bb450] rounded-3xl shadow-lg p-10 ml-16'>
                  <h2 className='font-semibold text-3xl'>Stay updated with real-time insights,</h2>
                  <p className='text-xl'> keep your goals on track— because every detail<br/> matters. Stay in control of your plans with<br/> seamless updates that help you stay
                   focused,<br/>productive, and always one step ahead.</p>
                </div>
                <div className='flex items-center justify-center w-[50%] h-[30%] rounded-3xl overflow-hidden'>
                <img src={Pic2} className='w-full h-full object-cover'/>
                </div>
              </div>
          </div>
        </main>
        <footer className='bg-[#90cb63] text-white p-6 w-full flex flex-row items-center justify-between'>
          <div className='text-left text-2xl'>
            <p className='text-3xl font-medium'>Xpense</p>
            <p className='text-lg font-normal'>Your go-to solution for finance management</p>
          </div>
          <div className='text-right text-2xl'>
            © 2025 Xpense
          </div>
        </footer>
    </div>
    </>
  )
}

export default Home
