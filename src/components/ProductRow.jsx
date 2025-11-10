import React, { useState } from 'react'
import { HiPencil, HiTrash } from 'react-icons/hi'
import { useSWRConfig } from 'swr'
import { Bouncy } from 'ldrs/react'
import 'ldrs/react/Bouncy.css'
import toast from 'react-hot-toast'
import { Link } from 'react-router'



const ProductRow = ({product: {id, product_name, price, created_at}}) => {

    const {mutate} = useSWRConfig();
    const [isDeleting, setIsDeleting] = useState(false);

    const date = new Date(created_at);
    const currentDate = date.toLocaleDateString("en-GB", { 
        day: "numeric", 
        month: "short", 
        year: "numeric" 
    });
    const currentTime = date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });

    const handleDeleteBtn = async () => {
        setIsDeleting(true);
        await fetch(import.meta.env.VITE_API_URL + `/products/${id}`, {
            method: "DELETE"
        });
        mutate(import.meta.env.VITE_API_URL + `/products`)
        toast.success('Product delete successfully')
    }

    return (
        <tr className="bg-white border-b border-gray-200">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {id}
            </th>
            <td className="px-6 py-4">
                {product_name}
            </td>
            <td className="px-6 py-4 text-end">
                {price}
            </td>
            <td className="px-6 py-4 text-end">
                <span className='text-xs'>{currentDate}</span>
                <br />
                <span className='text-xs'>{currentTime}</span>
            </td>
            <td className="px-6 py-4 text-end">
                <div className="inline-flex rounded-md shadow-xs" role="group">
                    <Link 
                        to={`edit/${id}`}
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                        <HiPencil className="text-gray-500 text-lg" />
                    </Link>
                    <button
                        onClick={handleDeleteBtn}
                        type="button"
                        className=" size-10 flex justify-center items-center text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700"
                    >
                        {isDeleting ? 
                        (<Bouncy size="20" speed="1.75" color="red" />) : 
                        ( <HiTrash className="text-red-500 text-lg" />)}
                       
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default ProductRow