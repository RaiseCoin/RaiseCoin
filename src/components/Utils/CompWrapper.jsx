import React from 'react'

const CompWrapper = ({children}) => {
  return (
    <div className='w-full lg:w-[87%] mx-auto container'>{children}</div>
  )
}

export default CompWrapper