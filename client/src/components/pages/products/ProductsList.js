import React from 'react'
import ProductsCard from './ProductsCard'
import PropTypes from 'prop-types'
import {Link, withRouter} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import injectSheet from 'react-jss'
import {compose} from 'recompose'

const propTypes = {
  domainData: AppPropTypes.domainData,
  history: PropTypes.object.isRequired
}

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  cards: {
    display: 'flex',
    flexFlow: 'row-wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    margin: '1em'
  }
}

const enhancer = compose(
  injectSheet(styles),
  withRouter
)

const ProductsList = ({domainData, history}) =>
  <div style={styles.page}>
    {domainData.isAdmin ? <Link to='/products/add'>Add Products</Link> : null}
    <h3>Number of products: {domainData.products.length}</h3>
    <div style={styles.cards}>
      {
        domainData.products.map((p) =>
          <ProductsCard
            product={p}
            key={p._id}
            onDelete={() => domainData.deleteProduct(p)}
            addProductToCart={() => domainData.addProductToCart(p._id)}
            onEdit={() => history.push(`products/edit/${p._id}`)}
            isAdmin={domainData.isAdmin}
          />
        )
      }
    </div>
  </div>

ProductsList.propTypes = propTypes

export default enhancer(ProductsList)
