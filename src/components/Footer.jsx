import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      <div className="">
        <img src={assets.logo} className='mb-5 w-32' alt="" />
        <p className='w-full md:w-2/3 text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laudantium ab nesciunt accusantium fugit voluptate id officia qui eius velit facilis, dignissimos sequi officiis. Aut similique quaerat labore ad harum.
        </p>
      </div>
      <div className="">
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
         <li>Home</li>
         <li>About Us</li>
         <li>Delivery</li>
         <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="">
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
         <li>+1-212-456-7890</li>
         <li>contact@foreveryou.com</li>
        </ul>
      </div>
      </div>
      <div className="">
        <hr />
        <p className='py-5 text-sm text-center'> © 2024 forever.com - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
