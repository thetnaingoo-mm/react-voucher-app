import React from 'react'
import {
  HiComputerDesktop,
  HiMiniTrash,
  HiOutlinePencil,
  HiOutlineTrash,
  HiPlus,
  HiTrash,
} from "react-icons/hi2";
import { HiDesktopComputer, HiSearch } from 'react-icons/hi'
import useSWR from "swr";
// import { debounce, throttle } from "lodash";

import VoucherListRow from './VoucherListRow'

const fetcher = (url) => fetch(url).then((res) => res.json());

const VoucherList = () => {
  // const [search, setSearch] = useState("");

  // const searchInput = useRef("");
  // console.log(searchInput);
  // console.log(search);

  const { data, isLoading, error } = useSWR(`${import.meta.env.VITE_API_URL}/vouchers`,
    fetcher
  );
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

                      {isLoading ? (
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 hidden last:table-row">
                <td colSpan={5} className="px-6 py-4 text-center">
                  Loading ...
                </td>
              </tr>
            ) : (
              data?.map((voucher, index) => (
                <VoucherListRow key={index} voucher={voucher} />
              ))
            )}
        </tbody>
      </table>
    </div>
  )
}

export default VoucherList