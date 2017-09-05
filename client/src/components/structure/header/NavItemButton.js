import React from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

const propTypes = {
  history: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

const styles = {
  button: {
    marginLeft: '1em',
    marginRight: '1em',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: 'thin',
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '100%'
  }
}

const NavItemButton = (props) =>
  <button
    onClick={() =>
      props.history.push(props.path)
    } style={styles.button}>
    {props.children}
  </button>

NavItemButton.propTypes = propTypes

export default withRouter(NavItemButton)
