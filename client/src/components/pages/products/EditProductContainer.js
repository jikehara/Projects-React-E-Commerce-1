import React, {Component} from 'react'
import * as AppPropTypes from '../../../lib/propTypes'
import EditProductForm from './EditProductForm'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

class EditProductContainer extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor (props) {
    super()
    const productId = props.match.params.productId

    const product = props.domainData.products.find((product) => product._id === productId)

    console.log(product)

    this.state = product
  }

  onNameChanged = (event) => this.setState({ name: event.target.value })

  onCategoryChanged = (event) => this.setState({ category: event.target.value })

  onImageChanged = (event) => this.setState({ image: event.target.value })

  onPriceChanged = (event) => {
    let myNum = parseFloat(event.target.value) || 0
    console.log(myNum)
    if (typeof myNum !== 'number') {
      myNum = 0
    }
    this.setState({ price: myNum })
  }

  onCancel = () => this.props.history.push('/products')

  onSubmit = (event) => {
    event.preventDefault()
    this.props.domainData.updateProduct(this.state)
    this.props.history.push('/products')
  }

  render () {
    return <EditProductForm
      product={this.state}
      onNameChanged={this.onNameChanged}
      onCategoryChanged={this.onCategoryChanged}
      onImageChanged={this.onImageChanged}
      onPriceChanged={this.onPriceChanged}
      onCancel={this.onCancel}
      onSubmit={this.onSubmit}
    />
  }
}

export default withRouter(EditProductContainer)
