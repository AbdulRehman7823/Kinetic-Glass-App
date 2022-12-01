import React from 'react'
import ReactLivePreview from '../LivePreview/ReactLivePreview'
function MiddlePanel({children}) {
  return (
    <div className="w-full h-full items-center">
      {children}
    </div>
  )
}

export default MiddlePanel