import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import * as ServerApi from './lib/serverApi'

class DomainDataProvider extends Component {
  state = {
    isLoaded: false,
    products: []
  }

  componentDidMount () {
    this.getAllProducts()
  }

  getAllProducts = () => {
    ServerApi.getAllProducts(products =>
      this.setState({
        isLoaded: true,
        products
      })
    )
  }

  addProduct = (newProduct) => {
    ServerApi.addProduct(newProduct, this.getAllProducts)
  }

  deleteProduct = (product) => {
    ServerApi.deleteProduct(product._id, this.getAllProducts)
  }

  updateProduct = (product) => {
    ServerApi.updateProduct(product, this.getAllProducts)
  }

  render () {
    const domainData = {
      isLoaded: this.state.isLoaded,
      products: this.state.products,
      addProduct: this.addProduct,
      deleteProduct: this.deleteProduct,
      updateProduct: this.updateProduct
    }

    return (
      <Layout domainData={domainData} />
    )
  }
}

export default DomainDataProvider
