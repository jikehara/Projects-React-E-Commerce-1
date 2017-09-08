import React from 'react'
import ProductsCard from './ProductsCard'
import PropTypes from 'prop-types'
import {Link, withRouter} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  domainData: AppPropTypes.domainData,
  history: PropTypes.object.isRequired
}

const ProductsList = ({domainData, history}) =>
  <div>
    <Link to='/products/add'>Add Products</Link>
    <h3>Number of products: {domainData.products.length}</h3>
    {
      domainData.products.map((p) =>
        <ProductsCard
          product={p}
          key={p._id}
          onDelete={() => domainData.deleteProduct(p)}
          onEdit={() => history.push(`products/edit/${p._id}`)}
        />
      )
    }
  </div>

ProductsList.propTypes = propTypes

export default withRouter(ProductsList)
