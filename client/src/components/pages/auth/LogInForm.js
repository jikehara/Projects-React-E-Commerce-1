import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
  onEmailChanged: PropTypes.func.isRequired
}

const LogInForm = ({
  email,
  password,
  onSubmit,
  onEmailChanged,
  onPasswordChanged
}) =>
  <form onSubmit={onSubmit}>
    <p>email: <input type='text' value={this.email} onChange={onEmailChanged} /></p>
    <p>Password: <input type='text' value={this.password} onChange={onPasswordChanged} /></p>
    <input type='submit' value='Log In' />
  </form>

LogInForm.propTypes = propTypes

export default LogInForm
