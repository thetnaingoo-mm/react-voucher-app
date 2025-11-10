
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router'
import { lineSpinner } from 'ldrs'
import toast from 'react-hot-toast';
import useSWR from 'swr';
lineSpinner.register()


const fetcher = (url) => fetch(url).then(res => res.json());

const ProductEditCard = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSending, setIsSending] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, isLoading, error } = useSWR(import.meta.env.VITE_API_URL + `/products/${id}`, fetcher);
    const hanldeCreateProduct = async (data) => {
        // console.log(data)
        setIsSending(true);
        await fetch(import.meta.env.VITE_API_URL + `/products/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                product_name: data.product_name,
                price: data.price,

            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        setIsSending(false);
        if (data.back_to_product_list) {
            navigate('/products');
        }
        toast.success('Product update successfully');
    }
    return (
        <div className='w-full md:w-1/2'>
            <h1 className=' text-2xl font-bold mb-2'>Update Product</h1>
            <p className=' text-sm text-stone-500 mb-2'>
                Lorem ipsum dolor sit amet.
            </p>
            {
                isLoading ? 
                    <div className="space-y-6 animate-pulse" aria-hidden="true">
                        <div className="mb-2">
                            <div className="h-4 w-28 rounded bg-gray-200 mb-2" />
                            <div className="h-11 rounded-lg bg-gray-200 border border-gray-200" /> 
                        </div>

                        <div className="mb-6">
                            <div className="h-4 w-20 rounded bg-gray-200 mb-2" />
                            <div className="h-11 rounded-lg bg-gray-200 border border-gray-200" />
                        </div>

                        <div className="flex items-center mb-4">
                            <div className="h-4 w-4 rounded-sm bg-gray-200" />
                            <div className="h-4 w-56 rounded bg-gray-200 ms-3" />
                        </div>

                        <div className="flex items-center mb-4">
                            <div className="h-4 w-4 rounded-sm bg-gray-200" />
                            <div className="h-4 w-72 rounded bg-gray-200 ms-3" />
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">                          
                            <div className="h-10 w-full sm:w-40 rounded-lg bg-gray-200 border border-gray-200" />
                            <div className="h-10 w-full sm:w-28 rounded-lg bg-gray-300" />
                        </div>
                    </div>
                 :
                    <form action={handleSubmit(hanldeCreateProduct)}>
                        <div className='mb-2'>
                            <label htmlFor="first_name" className={`block mb-2 text-sm font-medium ${errors.product_name ? "text-red-500" : "text-gray-900"}`}>Name</label>
                            <input type="text"
                                {...register('product_name', { required: true, minLength: 3, maxLength: 30 })}
                                defaultValue={data.product_name}
                                id="first_name" className={`bg-gray-50 border ${errors.product_name ?
                                    "border-red-500 focus:ring-red-500 focus:border-red-500" :
                                    "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    } text-gray-900 text-sm rounded-lg  block w-full p-2.5`} placeholder="eg. apple" />
                            {errors.product_name?.type === "required" && (
                                <p className=' text-red-500 text-sm mt-1'>Product name is required</p>
                            )}
                            {errors.product_name?.type === "minLength" && (
                                <p className="text-red-500 text-sm mt-1">Product name must be at least 3 characters</p>
                            )}

                            {errors.product_name?.type === "maxLength" && (
                                <p className="text-red-500 text-sm mt-1">Product name must be less than 10 characters</p>
                            )}

                        </div>
                        <div className='mb-6'>
                            <label htmlFor="last_name" className={`block mb-2 text-sm font-medium ${errors.price ? "text-red-500 text-sm mt-1" : "text-gray-900"}`}>Price</label>
                            <input type="number" id="last_name" 
                            {...register('price', { required: true, min: 50, max: 10000 })}
                            defaultValue={data.price}
                             className={`bg-gray-50 border ${errors.price ?
                                "border-red-500 focus:ring-red-500 focus:border-red-500" :
                                "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                } text-gray-900 text-sm rounded-lg  block w-full p-2.5`} placeholder="eg. 1500" />
                            {errors.price?.type === "required" && (
                                <p className=' text-red-500 text-sm mt-1'>Product price is required</p>
                            )}
                            {errors.price?.type === "min" && (
                                <p className="text-red-500 text-sm mt-1">Product price must be at least 50</p>
                            )}

                            {errors.price?.type === "max" && (
                                <p className="text-red-500 text-sm mt-1">Product price must be less than 10000</p>
                            )}
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="all-correct" 
                            {...register('all_correct')} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500" required />
                            <label htmlFor="all-correct" className="ms-2 text-sm font-medium text-gray-900 select-none ">make sure all field are correct</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="back_to_product_list" 
                            {...register('back_to_product_list')}
                            checked
                            type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500" />
                            <label htmlFor="back_to_product_list" className="ms-2 text-sm font-medium text-gray-900 select-none ">Back to product list after saving</label>
                        </div>
                        <Link to={'/products'} type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Cancel</Link>

                        <button type="submit" disabled={isSending} className="text-white inline-flex gap-2 items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed">Upate
                            {isSending && (<l-line-spinner
                                size="20"
                                stroke="3"
                                speed="1"
                                color="white"
                            ></l-line-spinner>)}
                        </button>
                    </form>
            }

        </div>
    )
}

export default ProductEditCard