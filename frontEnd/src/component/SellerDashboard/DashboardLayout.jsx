import React from 'react'
import SellerSidebar from './SellerSidebar'

const DashboardLayout = ({children}) => {
  return (
    <>
    <div className=' flex gap-4'>
        <SellerSidebar/>
        {children}
    </div>
    </>
  )
}

export default DashboardLayout