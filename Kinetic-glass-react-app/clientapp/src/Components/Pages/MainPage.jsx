import React from 'react'
import SideBarNavigation from '../MainPageComponents/Navigation/SideBarNavigation/SideBarNavigation'
import TopNavigation from '../MainPageComponents/Navigation/TopNavigation/TopNavigation'
import MainPanel from '../MainPageComponents/mainPanel/MainPanel'


function MainPage({children}) {
  return (
    <>

    <SideBarNavigation>
    <TopNavigation></TopNavigation>
    {children}
    </SideBarNavigation>
    </>
  )
}

export default MainPage