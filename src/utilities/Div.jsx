import React from 'react'

const Div = ({className, children, onMouseOver, onMouseLeave, style, onClick}) => {
  return (
    <div onClick={onClick} style={style} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} className={className}>{children}</div>
  )
}

export default Div