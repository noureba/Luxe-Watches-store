import React from 'react'

function ContactForm() {
  return (
    <>
    <div>
        <h3 className='text-2xl my-10 text-gray-700 font-bold'>Contact us</h3>
        <form className='flex flex-col gap-4' action="">
            <div className='flex flex-col gap-2'>
                <label className='text-xl font-medium' htmlFor="fullName">Full name</label>
                <input className='rounded border border-gray-700 text-gray-700 p-2 w-[400px]' type="text" name='fullName' placeholder='Jhon...' required/>
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-xl font-medium' htmlFor="email">Email</label>
                <input className='rounded border border-gray-700 text-gray-700 p-2 w-[400px]' type="email" name='email' placeholder='example@gmail.ocm' required/>
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-xl font-medium' htmlFor="message">Message</label>
                <textarea className='rounded border border-gray-700 text-gray-700 p-2 w-[400px]' type="text" name='message' placeholder='Type here...'/>
            </div>
            <input className='bg-gray-700 text-white py-2 px-4' type="submit" value="Send message" />
        </form>
    </div>
    </>
  )
}

export default ContactForm