import React from 'react'
import { HiDesktopComputer, HiPencil, HiPlus, HiSearch, HiTrash } from 'react-icons/hi'

const VoucherList = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
      <div className="pb-4 flex justify-between items-center">
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <HiSearch className=' text-gray-500' />
          </div>
          <input type="text" id="table-search" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search vouchers" />
        </div>
        <div className="">
          <button className=' flex gap-2 items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>
            <HiDesktopComputer /> Create Sale
          </button>
        </div>
      </div>


      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Customr Name
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              Created At
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200 hidden last:table-row">
            <td colSpan={5} className="px-6 py-4 text-center">
              There is no voucher
            </td>
          </tr>

          <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              1
            </th>
            <td className="p</th>x-6 py-4">
              Silver
            </td>
            <td className="px-6 py-4 text-end">
              $2999
            </td>
            <td className="px-6 py-4 text-end">
              <p className=' t</div>ext-xs'>7 sep 2025</p>
              <p className=' text-xs'>10:00 PM</p>
            </td>
            <td className="px-6 py-4 text-end">
              <div className="inline-flex rounded-md shadow-xs" role="group">
                <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                  <HiPencil className=' text-gray-500 text-lg' />
                </button>
                <button type="button" className="size-10 flex justify-center items-center text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                  <HiTrash className=' text-red-500 text-lg' />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default VoucherList