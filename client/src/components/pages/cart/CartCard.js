import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const propTypes = {
  product: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  onSetQuantity: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

const styles = {
  container: {
    border: [1, 'solid', 'purple'],
    '& > button': {
      margin: '1em',
      backgroundColor: '#555'
    }
  },
  bigHeader: {
    color: 'red',
    '&:hover': {
      color: 'yellow'
    }
  },
  midHeader: {
    color: 'green'
  },
  smallHeader: {
    color: 'blue'
  }
}

const enhancer = injectSheet(styles)

const CartCard = ({
  product,
  quantity,
  onSetQuantity,
  classes
}) => {
  let cardPrice = product.price * quantity
  return (
    <div className={classes.container}>
      <h1 className={classes.bigHeader}>{product.name}</h1>
      <h3 className={classes.midHeader}>${cardPrice}</h3>
      <h3 className={classes.smallHeader}>{ quantity }</h3>
      <input type='text' value={quantity} onChange={(event) => onSetQuantity(parseInt(event.target.value))} />
    </div>
  )
}

CartCard.propTypes = propTypes

export default enhancer(CartCard)
