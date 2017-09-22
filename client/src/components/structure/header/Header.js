import React from 'react'
// import {NavLink} from 'react-router-dom'
// import NavItem from './NavItem'
import NavItemButton from './NavItemButton'
import * as AppPropTypes from '../../../lib/propTypes'
import injectSheet from 'react-jss'

const styles = {
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '1em'
  },
  header: {
    position: 'fixed',
    top: 0,
    backgroundColor: '#fff',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    backgroundImage: 'url(https://d1k8kvpjaf8geh.cloudfront.net/gp/profile/assets/default_desktop_cover_photo_small-7f5486f4b1e134ace992707821e2b07eec7b272687a411fa0511b13ef2b0035b.png)'
  }
}

const enhancer = injectSheet(styles)

const propTypes = {
  domainData: AppPropTypes.domainData
}

const Header = ({ domainData }) => (
  <header style={styles.header}>
    <nav style={styles.navBar}>
      <NavItemButton path='/'>Home</NavItemButton>
      <NavItemButton path='/about'>About</NavItemButton>
      <NavItemButton path='/products'>Products</NavItemButton>
      <NavItemButton path='/cart'>Cart {domainData.totalProductsInCart}</NavItemButton>

      {domainData.loggedOut ? <NavItemButton path='log-in'>Login</NavItemButton> : <NavItemButton onClick={domainData.logoutUser}>Logout</NavItemButton>}
      {domainData.loggedOut ? <NavItemButton path='/sign-up'>Sign Up</NavItemButton> : null}

    </nav>
  </header>
)

Header.propTypes = propTypes

export default enhancer(Header)
