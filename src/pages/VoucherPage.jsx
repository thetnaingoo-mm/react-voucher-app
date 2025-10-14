import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import VoucherList from '../components/VoucherList'

const Voucher = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={'Voucher'} />
        <VoucherList />
      </Container>
    </section>
  )
}

export default Voucher