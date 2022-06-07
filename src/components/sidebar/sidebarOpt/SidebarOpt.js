import React from 'react'
import './SidebarOpt.css'
const SidebarOpt = ({ Icon, title, number, selected }) => {
  return (
    <div className={`sidebarOpt ${selected && 'sidebarOpt--active'}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  )
}

export default SidebarOpt
