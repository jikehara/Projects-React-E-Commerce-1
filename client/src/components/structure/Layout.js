import React from 'react'
import Footer from './Footer'
import Header from './header/Header'
import Main from './Main'
import * as AppPropTypes from '../../lib/propTypes'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const Layout = (props) => (
  <div id='Layout'>
    <Header domainData={props.domainData} />
    <Main domainData={props.domainData} />
    <Footer />
  </div>
)

Layout.propTypes = propTypes

export default Layout
