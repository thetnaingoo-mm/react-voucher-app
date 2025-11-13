import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Container from '../components/Container'
import ProductEditCard from '../components/ProductEditCard'

const ProductEditPage = () => {
  return (
    <section>
        <Container>
        <Breadcrumb currentPageTitle={'Update Product'}  links={[{title: "Product Module", path: "/products"}]}/>
        <ProductEditCard />
        </Container>
    </section>
  )
}

export default ProductEditPage