import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Container from '../components/Container'
import ProductCreateCard from '../components/ProductCreateCard'

const ProductCreatePage = () => {
  return (
    <section>
        <Container>
        <Breadcrumb currentPageTitle={'Create Product'}  links={[{title: "Product Module", path: "/products"}]}/>
        <ProductCreateCard />
        </Container>
    </section>
  )
}

export default ProductCreatePage