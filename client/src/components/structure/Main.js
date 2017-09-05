import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import * as AppPropTypes from '../../lib/propTypes'
import ProductsPage from '../pages/products/ProductsPage'

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
    <Route path='/products'
      render={() => <ProductsPage domainData={props.domainData} />}
    />
  </main>
)

Main.propTypes = propTypes

export default Main
