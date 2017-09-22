import React from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

const propTypes = {
  history: PropTypes.object.isRequired,
  path: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

const styles = {
  button: {
    marginLeft: '1em',
    marginRight: '1em',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 'thin',
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '1em',
    height: '3em'
  }
}

const NavItemButton = (props) => {
  const onClick = props.onClick || (() => props.history.push(props.path))

  return <button
    onClick={onClick}
    style={styles.button}
  >
    {props.children}
  </button>
}

NavItemButton.propTypes = propTypes

export default withRouter(NavItemButton)
