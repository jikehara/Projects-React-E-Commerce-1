import React from 'react'
import CartCard from './CartCard'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const Cart = ({domainData}) => {
  const cartKeys = Object.keys(domainData.cart)
  return (
    <div>
      {
        cartKeys.length > 0
          ? cartKeys.map((productId, index) => {
            const quantity = domainData.cart[productId]
            const product = domainData.products.find((p) => p._id === productId)
            return <CartCard
              product={product}
              quantity={quantity}
              onSetQuantity={(q) => domainData.setProductQuantityInCart(productId, q)}
            />
          })
          : <div>CART IS EMPTY</div>
      }
    </div>
  )
}

Cart.propTypes = propTypes

export default Cart
