import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  name: PropTypes.string.isRequired,
  onNameChanged: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  onCategoryChanged: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  onPriceChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

const styles = {
  form: {
    borderRadius: '0.5em',
    border: '2px solid #3171d8',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center'
  }
}

const AddProduct = (props) =>
  <div>
    <form onSubmit={props.onSubmit} style={styles.form}>
      <h1> This is the ADD products page </h1>
      <input type='text' value={props.name} onChange={props.onNameChanged} />Name
      <input type='text' value={props.category} onChange={props.onCategoryChanged} />Category
      <input type='number' value={props.price} onChange={props.onPriceChanged} />Price
      <input type='text' value={props.image} onChange={props.onImageChanged} />Image
      <input
        type='submit'
        value='Submit'
      />
    </form>
    <button onClick={props.onCancel} >Cancel</button>
  </div>

AddProduct.propTypes = propTypes

export default AddProduct
