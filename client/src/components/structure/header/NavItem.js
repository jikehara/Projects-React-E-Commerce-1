import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired
}

const defaultProps = {
  exact: false
}

const styles = {
  activeLink: {
    color: '#333',
    backgroundColor: '#cecece',
    borderRadius: '1em'
  },
  navBarItem: {
    padding: '5px',
    margin: '10px',
    textDecoration: 'none'
  }
}

const NavItem = (props) =>
  <NavLink
    to={props.path}
    activeStyle={styles.activeLink}
    style={styles.navBarItem}
    exact={props.exact}
  >
    {props.children}
  </NavLink>

NavItem.propTypes = propTypes
NavItem.defaultProps = defaultProps

export default NavItem
