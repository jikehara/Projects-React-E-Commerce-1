import React from 'react'
import ProductsCard from './ProductsCard'
import PropTypes from 'prop-types'

const propTypes = {
  domainData: PropTypes.object.isRequired
}

const ProductsList = (props) =>
  <div>
    <h1>This is the new Products list</h1>
    <h3>Number of products: {props.domainData.products.length}</h3>
    {
      props.domainData.products.map((p) =>
        <ProductsCard product={p} />
      )
    }
  </div>

ProductsList.propTypes = propTypes

export default ProductsList
