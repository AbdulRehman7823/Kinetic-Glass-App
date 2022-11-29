import React from 'react'
import SideBarNavigation from '../MainPageComponents/Navigation/SideBarNavigation/SideBarNavigation'
import TopNavigation from '../MainPageComponents/Navigation/TopNavigation/TopNavigation'
import MainPanel from '../MainPageComponents/mainPanel/MainPanel'


function MainPage() {
  return (
    <>

    <SideBarNavigation>
    <TopNavigation></TopNavigation>
     <MainPanel>
     </MainPanel>
    </SideBarNavigation>
    </>
  )
}

export default MainPage