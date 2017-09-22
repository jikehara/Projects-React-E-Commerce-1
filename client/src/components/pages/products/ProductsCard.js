import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'
import PropTypes from 'prop-types'

const propTypes = {
  product: AppPropTypes.product,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  addProductToCart: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired
}

const styles = {
  card: {
    borderRadius: '0.5em',
    border: '2px solid #3171d8',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center'
  }
}

const ProductsCard = ({
  product,
  onEdit,
  onDelete,
  addProductToCart,
  isAdmin
}) =>
  <div style={styles.card}>
    <h3>{ product.name }</h3>
    <img src={product.image} alt={product.name} />
    <h5>${ product.price }</h5>
    {
      isAdmin ? <button
        onClick={onDelete}
        title='Delete'>Delete Product
      </button> : null
    }
    {
      isAdmin ? <button
        onClick={onEdit}
        title='Edit'>Edit
      </button> : null
    }
    <button
      onClick={addProductToCart}
      title='Add to Cart'
    >Add to Cart
    </button>
  </div>

ProductsCard.propTypes = propTypes

export default ProductsCard
