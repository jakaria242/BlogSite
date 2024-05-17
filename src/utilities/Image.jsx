import React from 'react'

const Image = ({className, source, alt, onClick}) => {
  return (
    <img onClick={onClick} className={className} src={source} alt={alt} />
  )
}

export default Image