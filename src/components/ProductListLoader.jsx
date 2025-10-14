import React from 'react'

const ProductListLoader = () => {
    return (
        <>
           {
            [...Array(5)].map((_,i) => (
                 <tr key={i} className="odd:bg-white even:bg-gray-50 border-b border-gray-200 animate-pulse">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                    <div className="h-4 w-6 bg-gray-200 rounded"></div>
                </th>
                <td className="px-6 py-4">
                    <div className="h-4 w-32 bg-gray-200 rounded"></div>
                </td>
                <td className="px-6 py-4 text-end">
                    <div className="h-4 w-16 bg-gray-200 rounded ml-auto"></div>
                </td>
                <td className="px-6 py-4 text-end">
                    <div className="flex flex-col gap-2 items-end">
                        <div className="h-3 w-20 bg-gray-200 rounded"></div>
                        <div className="h-3 w-14 bg-gray-200 rounded"></div>
                    </div>
                </td>
                <td className="px-6 py-4 text-end">
                    <div className="inline-flex gap-2">
                        <div className="h-8 w-8 bg-gray-200 rounded"></div>
                        <div className="h-8 w-8 bg-gray-200 rounded"></div>
                    </div>
                </td>
            </tr>
            ))
           }
        </>
    )
}

export default ProductListLoader