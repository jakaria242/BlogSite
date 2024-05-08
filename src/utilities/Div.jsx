import React from 'react'

const Div = ({className, children, onMouseOver, onMouseLeave, style}) => {
  return (
    <div style={style} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} className={className}>{children}</div>
  )
}

export default Div