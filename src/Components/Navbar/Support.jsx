import React, { useState } from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Header from './Header';

const Support = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  return (
    <>
      <div className='w-screen h-full'>
        <Header />
        <main className='p-10 w-full pt-40'>
          <div className='flex flex-col items-center w-full'>
            <div className='flex flex-col items-center justify-center'>
              <h2 className='text-3xl text-center font-semibold'>Contact Us</h2>
              <p className='text-xl text-center'>We would love to hear from you! please fill out the form below or follow us on social media to stay connected</p>
            </div>
            <div className='flex flex-row gap-10 items-center justify-center pt-20'>
              <form className='flex flex-col rounded-3xl shadow-xl p-10 gap-y-5'>
                <h3 className='text-lg font-semibold'>Name</h3>
                <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-4 py-2 border rounded-md w-[720px]"
                required
              />
              <h3 className='text-lg font-semibold'>Email</h3>
                <input
                type="email"
                placeholder="Enter your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 border rounded-md w-[720px]"
                required
              />
              <h3 className='text-lg font-semibold'>Message</h3>
              <input
                type="text"
                placeholder="Type your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="px-4 py-2 border rounded-md w-[720px] h-[200px]"
                required
              />
              </form>
              <div className='flex flex-col gap-y-10'>
                <div className='flex flex-col rounded-xl shadow-xl p-5 gap-y-2'>
                  <h3 className='font-semibold text-2xl'>Contact Details</h3>
                  <p className='font-normal'>Email: contact@expense.com</p>
                  <p className='font-normal'>Phone: +91 1234567899</p>
                </div>
                <div className='flex flex-col rounded-xl shadow-xl p-5 gap-y-5'>
                  <h3 className='font-semibold text-2xl'>Follow Us</h3>
                  <div className='flex -flex-row gap-4'>
                    <FaFacebookF className="text-[#8BCB7D] text-2xl hover:opacity-80 cursor-pointer" />
                    <FaTwitter className="text-[#8BCB7D] text-2xl hover:opacity-80 cursor-pointer" />
                    <FaLinkedinIn className="text-[#8BCB7D] text-2xl hover:opacity-80 cursor-pointer" />
                    <FaInstagram className="text-[#8BCB7D] text-2xl hover:opacity-80 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Support
