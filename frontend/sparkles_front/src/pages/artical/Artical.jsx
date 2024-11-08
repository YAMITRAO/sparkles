import React from 'react'
import ArticalHeading from '../../components/artical-comp/ArticalHeading'

const Artical = () => {
  return (
    <div className='p-1  min-h-[calc(100vh)] flex'>
      <div className='border rounded-lg w-full p-1 h-auto relative'>
       
        <ArticalHeading top={"110px"} />
      </div>
    </div>
  )
}

export default Artical