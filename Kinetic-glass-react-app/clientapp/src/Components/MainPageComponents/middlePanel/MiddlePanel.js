import React from 'react'
import ReactLivePreview from '../LivePreview/ReactLivePreview'
function MiddlePanel({children}) {
  return (
    <div className="w-full h-full items-center pt-12">
      {children}
    </div>
  )
}

export default MiddlePanel