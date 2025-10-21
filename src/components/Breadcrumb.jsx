import React from 'react'
import { Link } from 'react-router'
import { HiChevronRight } from "react-icons/hi2";

const Breadcrumb = ({currentPageTitle, links}) => {
  return (
    <nav className="flex mb-5" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link to={'/'} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 ">
            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </Link>
        </li>
        {links && links.map((link,index) => (
          <li key={index} >
          <div className="flex items-center">
            <HiChevronRight />
            <Link to={link.path} className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2">
              {link.title}
            </Link>
          </div>
        </li>
        ))}
        <li aria-current="page">
          <div className="flex items-center">
            <HiChevronRight />
            <Link  className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2">
              {currentPageTitle}
            </Link>
          </div>
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumb