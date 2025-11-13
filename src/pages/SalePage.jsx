import React from 'react'
import Container from '../components/Container'
import VoucherInfo from '../components/VoucherInfo'
import Breadcrumb from '../components/Breadcrumb'


const SalePage = () => {
  return (
    <section>
        <Container>
        <Breadcrumb currentPageTitle={'Sale Module'} />
        <VoucherInfo />
        </Container>
    </section>
  )
}

export default SalePage