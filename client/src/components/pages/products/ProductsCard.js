import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  product: AppPropTypes.product
}

const styles = {
  card: {
    borderRadius: '0.5em',
    border: '2px'
  }
}

const ProductsCard = (props) =>
  <div style={styles.card}>
    <h3>{ props.product.name }</h3>
    <h5>${ props.product.price }</h5>
    <img>{ props.product.image }</img>
  </div>

ProductsCard.propTypes = propTypes

export default ProductsCard
