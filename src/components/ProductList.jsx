import React from 'react'
import { HiPlus, HiSearch } from 'react-icons/hi'
import useSWR from 'swr';
import ProductListLoader from './ProductListLoader';
import ProductRow from './ProductRow';
import ProductRowEmptyState from './ProductRowEmptyState';

const fetcher = (url) => fetch(url).then(res => res.json());

const ProductList = () => {

  const { data, isLoading, error } = useSWR(import.meta.env.VITE_API_URL + "/products", fetcher);


  return (
    <div className="relative overflow-x-auto">
      <div className="pb-4 flex justify-between items-center">
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <HiSearch className=' text-gray-500' />
          </div>
          <input type="text" id="table-search" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search products" />
        </div>
        <div className="">
          <button className=' flex gap-2 items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>
            <HiPlus /> Add New
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
              Product Name
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              Price
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              Created At
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              Action
            </th>
          </tr>
        </thead>
        <tbody onSubmit={(e) => e.preventDefault()}>
          {isLoading ? (<ProductListLoader />) : 
          (
              data.length === 0 ? <ProductRowEmptyState /> : 
              data.map(product =>  <ProductRow key={product.id} product={product} />)
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList