import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'
import PropTypes from 'prop-types'

const propTypes = {
  product: AppPropTypes.product,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
}

const styles = {
  card: {
    borderRadius: '0.5em',
    border: '2px solid red'
  }
}

const ProductsCard = ({product, onEdit, onDelete}) =>
  <div style={styles.card}>
    <h3>{ product.name }</h3>
    <h5>${ product.price }</h5>
    <img src={product.image} alt={product.name} />
    <button
      onClick={onDelete}
      title='Delete'
    >Delete Product
    </button>
    <button
      onClick={onEdit}
      title='Edit'>Edit
    </button>
  </div>

ProductsCard.propTypes = propTypes

export default ProductsCard
