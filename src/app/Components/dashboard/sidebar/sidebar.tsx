'use client'
import React, { useState } from 'react'
import {Nav} from '../../dashboard/navbar/navbar'
import {
  ShoppingCart,UserRound,Settings,LayoutDashboard,ChevronRight
} from "lucide-react"

import { Button } from '@/components/ui/button'
import { useWindowWidth} from '@react-hook/window-size'





const sidebar = () => {

  const [isCollapsed,setIsCollapsed] = useState(false);
  const onlyWidth = useWindowWidth()
  const mobileWidth = onlyWidth < 786
  const toggleSidebar = () =>{
    setIsCollapsed(!isCollapsed)
  }

  return (
<>
<div className='relative pt-24 pb-10 min-w-[80px] min-h-[100%] border-r px-3'>

  {!mobileWidth && 
  <div className='absolute top-7 right-[-20px]'><Button variant='secondary' 
  onClick={toggleSidebar} className='rounded-full p-2'><ChevronRight/></Button></div>}
  

          <Nav
            isCollapsed={mobileWidth? true: isCollapsed}
            links={[
              {
                title: "Dashboard",
                label: "972",
                icon: LayoutDashboard,
                variant: "ghost",
                href:'/dashboard',
              },
              {
                title: "Users",
                label: "342",
                icon: UserRound,
                variant: "ghost",
                href: '/dashboard/users'

              },
              {
                title: "Orders",
                label: "128",
                icon:  ShoppingCart,
                variant: "ghost",
                href:'/dashboard/orders',
              },
              {
                title: "Settings",
                label: "8",
                icon: Settings,
                variant: "ghost",
                href:'/dashboard/settings',
              },
          
            ]}
          />
          </div>
</>
  )
}

export default sidebar;