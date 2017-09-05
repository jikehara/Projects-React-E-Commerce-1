import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ProductsList from './ProductsList'
import * as AppPropTypes from '../../../lib/propTypes'
import AddProduct from './AddProduct'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const styles = {
  productsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  header: {
    fontFamily: 'monospace',
    lineSpacing: '3px'
  }
}

const ProductsPage = (props) =>
  <div style={styles.productsContainer}>
    <h1 style={styles.header}>This is the products page</h1>
    <Switch>
      <Route
        path='/products'
        exact
        render={() => <ProductsList domainData={props.domainData} />}
      />
      <Route
        path='/products/add'
        render={(innerProps) => <AddProduct domainData={props.domainData} history={innerProps.history} />}
      />
    </Switch>
  </div>

ProductsPage.propTypes = propTypes

export default ProductsPage
