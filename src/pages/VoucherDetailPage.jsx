import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Container from '../components/Container'
import VoucherCard from '../components/VoucherCard'
import { useParams } from 'react-router'

const VoucherDetailPage = () => {
  const {id} = useParams();
  const fetcher = (url) => fetch(url).then(res => res.json());
  const {data, isLoading, error} = useSWR(import.meta.env.VITE_API_URL + `/voucher/${id}`, fetcher);
  return (
    <section>
        <Container>
        <Breadcrumb currentPageTitle={'Voucher Detail'}  links={[{title: "Voucher Module", path: "/voucher"}]}/>
        <VoucherCard />
        </Container>
    </section>
  )
}

export default VoucherDetailPage