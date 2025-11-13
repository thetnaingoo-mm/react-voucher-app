import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { lineSpinner } from 'ldrs'
import SaleForm from '../components/SaleForm'
import VoucherTable from './VoucherTable'
import useRecordStore from '../store/useRecordStore'
import toast from 'react-hot-toast'

const VoucherInfo = () => {
    const generateInvoiceNumber = () => {
        const date = new Date();
        const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "");
        const randomNumber = Math.floor(1000 + Math.random() * 9000);
        const invoiceNumber = `INV-${formattedDate}-${randomNumber}`
        return invoiceNumber;
    }

    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm();
  const { records, resetRecord } = useRecordStore();

    const [ isSending, setIsSending ] = useState(false);
    const onSubmit = async (data) => {
        // console.log(data)
    setIsSending(true);

    const total = records.reduce((a, b) => a + b.cost, 0);
    const tax = total * 0.07;
    const netTotal = total + tax;

    const currentVoucher = { ...data, records, total, tax, netTotal };

    // console.log({...data, records});

    const res = await fetch(import.meta.env.VITE_API_URL + "/vouchers", {
      method: "POST",
      body: JSON.stringify(currentVoucher),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();

    console.log(json);

    toast.success("Voucher created successfully");

    resetRecord();

    reset();

    setIsSending(false);

    if (data.redirect_to_detail) {
      navigate(`/voucher/detail/${json.id}`);
    }
  };

    const handleCreateVoucher = (data) => {
        console.log(data)
    }


    return (
        <div className="">
            <form id='voucherInfo' onSubmit={handleSubmit(handleCreateVoucher)} className='mb-6'>
                <div className=" grid grid-cols-1 md:grid-cols-4 gap-3">
                    <div className=" col-span-1">
                        <div className='mb-2'>
                            <label htmlFor="voucher_id" className={`block mb-2 text-sm font-medium ${errors.voucher_id ? "text-red-500" : "text-gray-900"}`}>Voucher ID</label>
                            <input type="text"
                                defaultValue={generateInvoiceNumber()}
                                {...register('voucher_id', { required: true })}
                                id="voucher_id" className={`bg-gray-50 border ${errors.voucher_id ?
                                    "border-red-500 focus:ring-red-500 focus:border-red-500" :
                                    "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    } text-gray-900 text-sm rounded-lg  block w-full p-2.5`} />
                            {errors.voucher_id?.type === "required" && (
                                <p className=' text-red-500 text-xs mt-1'>Voucher id is required</p>
                            )}
                        </div>
                    </div>
                    <div className=" col-span-1">
                        <div className='mb-2'>
                            <label htmlFor="customer_name" className={`block mb-2 text-sm font-medium ${errors.customer_name ? "text-red-500" : "text-gray-900"}`}>Customer Name</label>
                            <input type="text" {...register('customer_name', { required: true })} id="customer_name" className={`bg-gray-50 border ${errors.customer_name ?
                                "border-red-500 focus:ring-red-500 focus:border-red-500" :
                                "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                } text-gray-900 text-sm rounded-lg  block w-full p-2.5`} />
                            {errors.customer_name?.type === "required" && (
                                <p className=' text-red-500 text-xs mt-1'>Customer name is required</p>
                            )}
                        </div>
                    </div>
                    <div className=" col-span-1">
                        <div className='mb-2'>
                            <label htmlFor="customer_email" className={`block mb-2 text-sm font-medium ${errors.customer_email ? "text-red-500" : "text-gray-900"}`}>Customer Email</label>
                            <input type="text" {...register('customer_email', { required: true })} id="customer_email" className={`bg-gray-50 border ${errors.customer_email ?
                                "border-red-500 focus:ring-red-500 focus:border-red-500" :
                                "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                } text-gray-900 text-sm rounded-lg  block w-full p-2.5`} />
                            {errors.customer_email?.type === "required" && (
                                <p className=' text-red-500 text-xs mt-1'>Customer email is required</p>
                            )}
                        </div>
                    </div>
                    <div className=" col-span-1">
                        <div className='mb-2'>
                            <label htmlFor="sale_date" className={`block mb-2 text-sm font-medium ${errors.slae_date ? "text-red-500" : "text-gray-900"}`}>Sale Date</label>
                            <input type="date"
                                defaultValue={new Date().toISOString().slice(0, 10)}
                                {...register('slae_date', { required: true })}
                                id="sale_date" className={`bg-gray-50 border ${errors.slae_date ?
                                    "border-red-500 focus:ring-red-500 focus:border-red-500" :
                                    "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    } text-gray-900 text-sm rounded-lg  block w-full p-2.5`} />
                            {errors.slae_date?.type === "required" && (
                                <p className=' text-red-500 text-xs mt-1'>Sale date is required</p>
                            )}
                        </div>
                    </div>
                </div>
            </form>

            <SaleForm />
            <VoucherTable />
                        
            <div className=" flex justify-end gap-3 items-center">
                <div className="flex items-center">
                    <input id="all-correct" form='voucherInfo' {...register('all_correct')} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500" required />
                    <label htmlFor="all-correct" className="ms-2 text-sm font-medium text-gray-900 select-none ">make sure all field are correct</label>
                </div>
            <button form='voucherInfo' onClick={handleSubmit(onSubmit)} type="submit" disabled={isSending} className="text-white inline-flex gap-2 items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed">Save
                    {isSending && (<l-line-spinner
                        size="20"
                        stroke="3"
                        speed="1"
                        color="white"
                    ></l-line-spinner>)}
                </button>
            </div>
        </div>
    )
}

export default VoucherInfo