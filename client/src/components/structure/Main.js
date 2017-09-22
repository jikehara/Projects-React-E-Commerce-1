import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Cart from '../pages/cart/Cart'
import * as AppPropTypes from '../../lib/propTypes'
import ProductsPage from '../pages/products/ProductsPage'
import LogInContainer from '../pages/auth/LogInContainer'
import SignUpContainer from '../pages/auth/SignUpContainer'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const styles = {
  main: {
    marginTop: '5em'
  }
}

const Main = (props) => (
  <main style={styles.main}>
    <h1>Main</h1>
    <Route path='/' exact component={Home} />
    <Route path='/about' component={About} />
    <Route path='/cart'
      render={() => <Cart domainData={props.domainData} />}
    />
    <Route path='/products'
      render={() => <ProductsPage domainData={props.domainData} />}
    />
    <Route path='/log-in'
      render={() => <LogInContainer domainData={props.domainData} />}
    />
    <Route path='/sign-up'
      render={() => <SignUpContainer domainData={props.domainData} />}
    />
  </main>
)

Main.propTypes = propTypes

export default Main
