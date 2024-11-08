import React from 'react'

const Navbar = () => {
  return (
    <div className='border-b-2 border-slate-500 flex justify-center items-center h-auto w-full py-4'>
      <div className='w-full text-center'>
        <input type="text" placeholder='Search Artical' className='w-[50%] h-10 indent-3 rounded-full outline-none font-mono text-lg bg-[var(--primary-bg-color-light)] text-[var(--primary-text-color)]' />
      </div>
    </div>
  )
}

export default Navbar