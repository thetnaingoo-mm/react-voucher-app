import React from 'react'
import { Link } from 'react-router'

const ModuleBtn = ({name,icon,url}) => {
  return (
    <Link to={url} className=' flex flex-col items-center gap-3 bg-blue-600 text-white p-5 rounded-lg'>
        {icon}
        {name}
    </Link>
  )
}

export default ModuleBtn