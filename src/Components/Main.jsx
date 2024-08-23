import React from 'react'

const Main = ({toggle, handleClick}) => {
  return (
    <div onClick={() => {
      if (toggle ===true) {
        handleClick();
      } }}className='h-dvh flex justify-center items-center w-full '>
      <img className='opacity-70 h-full w-full object-cover flex items-center justify-center' src="mars.png" alt="image" />
    </div>
  )
}

export default Main