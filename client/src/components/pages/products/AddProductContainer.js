import React, {Component} from 'react'
import * as AppPropTypes from '../../../lib/propTypes'
import AddProduct from './AddProduct'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

class AddProductContainer extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    history: PropTypes.object.isRequired
  }

  state = {
    name: '',
    category: '',
    image: '',
    price: 0
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

  onSubmit = (event) => {
    event.preventDefault()
    this.props.domainData.addProduct(this.state) // save to the db
    this.props.history.push('/products')
  }

  onCancel = () => this.props.history.push('/products')

  render () {
    return (
      <div>
        <AddProduct
          name={this.state.name}
          onNameChanged={this.onNameChanged}
          category={this.state.category}
          onCategoryChanged={this.onCategoryChanged}
          image={this.state.image}
          onImageChanged={this.onImageChanged}
          price={this.state.price}
          onPriceChanged={this.onPriceChanged}
          onSubmit={this.onSubmit}
          onCancel={this.onCancel}
        />
      </div>
    )
  }
}

export default withRouter(AddProductContainer)
