import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const AddProduct = (props) =>
  <div>
    <form>
      <h1> This is the ADD products page </h1>
      <input type='text' />Name
      <input type='text' />Category
      <input type='number' />Price
      <input type='text' />Image
    </form>
  </div>

AddProduct.propTypes = propTypes

export default AddProduct
