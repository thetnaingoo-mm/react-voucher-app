import React from 'react'
import { useForm } from 'react-hook-form'

const ProductCreateCard = () => {
    const {register, handleSubmit} = useForm();
    const hanldeCreateProduct = () => {
        
    }
    return (
        <div className='w-full md:w-1/2'>
            <h1 className=' text-2xl font-bold mb-2'>Create New Product</h1>
            <p className=' text-sm text-stone-500 mb-2'>
                Lorem ipsum dolor sit amet.
            </p>
            <form action={handleSubmit(hanldeCreateProduct)}>
                <div className='mb-2'>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="eg. apple" required />
                </div>
                <div className='mb-6'>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Price</label>
                    <input type="number" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="eg. 1500" required />
                </div>
                <div className="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500" />
                        <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">Default checkbox</label>
                </div>
                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Cancel</button>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </div>
    )
}

export default ProductCreateCard