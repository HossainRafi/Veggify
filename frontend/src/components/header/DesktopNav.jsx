import React from 'react'

export const DesktopNav = ({menuItems, logo}) => {
  return (
    <div className='h-16 flex justify-between items-center px-6 lg:px-12'>
      <a href="/">
      <img src={logo} alt="" /></a>
    </div>
  )
}
