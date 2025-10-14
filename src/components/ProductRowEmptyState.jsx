import React from 'react'

const ProductRowEmptyState = () => {
    return (
        <tr className="bg-white border-b border-gray-200 hidden last:table-row">
            <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                There is no product
            </td>
        </tr>
    )
}

export default ProductRowEmptyState