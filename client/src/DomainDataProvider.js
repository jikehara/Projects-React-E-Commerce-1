import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import * as ServerApi from './lib/serverApi'

class DomainDataProvider extends Component {
  state = {
    isLoaded: false,
    products: [],
    user: null,
    users: [],
    cart: {}
  }

  getTotalProductsInCart = () => {
    const {cart} = this.state
    const values = Object.values(cart) // make an array of the key-value pairs in the Object
    let total = 0
    for (let i = 0; i < values.length; i += 1) {
      total += values[i]
    }
    return total
  }

  componentDidMount () {
    this.methods.getAllProducts()
    this.methods.getUser()
  }

  methods = {
    getAllProducts: () =>
      ServerApi.getAllProducts()
        .then(products =>
          this.setState({
            isLoaded: true,
            products
          })
        ),

    addProduct: (newProduct) =>
      ServerApi.addProduct(newProduct)
        .then(this.getAllProducts),

    deleteProduct: (product) =>
      ServerApi.deleteProduct(product._id)
        .then(this.getAllProducts),

    updateProduct: (product) =>
      ServerApi.updateProduct(product)
        .then(this.getAllProducts),

    signUp: (user) =>
      ServerApi.signUpUser(user)
        .then(user => {
          this.setState({ user })
          return user
        }),

    logInUser: (email, password) =>
      ServerApi.logInUser(email, password)
        .then(user => {
          this.setState({ user })
          return user
        }),

    getUser: () =>
      ServerApi.getUser()
        .then(user => {
          this.setState({ user })
          return user
        }),

    logoutUser: () =>
      ServerApi.logoutUser()
        .then(() => this.setState({ user: null })),

    addProductToCart: (itemId) => {
      console.log(itemId)
      const {cart} = this.state
      cart[itemId] = cart[itemId] || 0
      cart[itemId] += 1
      this.setState({cart})
    },

    setProductQuantityInCart: (itemId, quantity) => {
      const {cart} = this.state
      if (quantity > 0) {
        cart[itemId] = quantity
      } else {
        delete cart[itemId]
      }
      this.setState({cart})
    }

  }
  render () {
    const domainData = {
      ...this.state,
      ...this.methods,
      loggedIn: this.state.user != null,
      loggedOut: this.state.user == null,
      totalProductsInCart: this.getTotalProductsInCart(),
      isAdmin: this.state.user != null && this.state.user.local.isAdmin
    }

    return this.state.isLoaded ? <Layout domainData={domainData} /> : null
  }
}

export default DomainDataProvider
