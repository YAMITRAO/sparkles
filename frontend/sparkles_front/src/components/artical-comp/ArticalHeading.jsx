import React, { useState } from 'react'

const ArticalHeading = ({ headingBg, headtingText, top, bottom, left, right }) => {
  
  const [topCss, setTopCss] = useState({
    top: top 
  })
  
  let testClass = `absolute top-[${topCss.top}] left-0 bg-[#197278]  max-w-[80%] px-2  text-[36px] font-semibold flex flex-wrap`
  return (
    <div className={testClass}>
      <h1>Hello This is Heading </h1>
    </div>
  )
}

export default ArticalHeading