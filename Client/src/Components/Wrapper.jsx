import React from 'react'

function Wrapper({children,extraCss}) {
  return (
    <div className={`max-w-7xl   m-auto ${extraCss}`}>
      {children}
    </div>
  )
}

export default Wrapper

