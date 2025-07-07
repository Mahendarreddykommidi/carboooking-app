import React from 'react'

const Title = ({title,Subtitle}) => {
  return (
    <div>
        <h1 className='font-medium'>{title}</h1>
        <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-156'>{Subtitle}</p>
    </div>
  )
}

export default Title