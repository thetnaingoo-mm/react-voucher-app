import React from 'react'
import { HiPencil, HiTrash } from 'react-icons/hi'

const ProductRow = ({product: {id, product_name, price, created_at}}) => {

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
        await fetch(import.meta.env.VITE_API_URL + `/product/${id}`, {
            method: "DELETE"
        });
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
                    <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                        <HiPencil className="text-gray-500 text-lg" />
                    </button>
                    <button
                        onClick={handleDeleteBtn}
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700"
                    >
                        <HiTrash className="text-red-500 text-lg" />
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default ProductRow