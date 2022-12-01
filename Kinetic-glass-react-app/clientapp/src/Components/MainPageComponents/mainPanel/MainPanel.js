import React from 'react'
import MiddlePanel from '../middlePanel/MiddlePanel'
import RightPanel from '../rightPanel/RightPanel'
function MainPanel({children}) {
  return (
        <div className="h-screen p-4 flex flex-row">
           {children}
           <RightPanel className=""></RightPanel>
        </div>
  )
}

export default MainPanel