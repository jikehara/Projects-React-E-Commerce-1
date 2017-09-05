import React from 'react'
import * as AppPropTypes from '../../lib/propTypes'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const Products = ({domainData}) => {
  console.log(domainData)
  return <div>
    <h1>Products</h1>
  </div>
}

Products.propTypes = propTypes

export default Products
