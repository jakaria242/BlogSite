import React from 'react'
import { Link } from 'react-router-dom'

const List = ({className, style, to, text}) => {
  return (
    <li className={className}><Link className={style} to={to}>{text}</Link></li>
  )
}

export default List