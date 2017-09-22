import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  password: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onFirstNameChanged: PropTypes.func.isRequired,
  onLastNameChanged: PropTypes.func.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

const SignUpForm = ({
  password,
  firstName,
  lastName,
  email,
  onFirstNameChanged,
  onLastNameChanged,
  onEmailChanged,
  onPasswordChanged,
  onSubmit,
  onCancel
}) =>
  <form onSubmit={onSubmit}>
    <p>First Name: <input type='text' value={this.firstName} onChange={onFirstNameChanged} /></p>
    <p>Last Name: <input type='text' value={this.lastName} onChange={onLastNameChanged} /></p>
    <p>Email Address: <input type='text' value={this.email} onChange={onEmailChanged} /></p>
    <p>Password: <input type='text' value={this.password} onChange={onPasswordChanged} /></p>
    <input
      type='submit'
      value='Submit'
    />
    <button onClick={onCancel} >Cancel</button>
  </form>

SignUpForm.propTypes = propTypes

export default SignUpForm
