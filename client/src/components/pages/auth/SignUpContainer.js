import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import SignUpForm from './SignUpForm'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'

class SignUpContainer extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    history: PropTypes.object.isRequired
  }

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  callbacks = {
    onFirstNameChanged: (event) => this.setState({ firstName: event.target.value }),

    onLastNameChanged: (event) => this.setState({ lastName: event.target.value }),

    onEmailChanged: (event) => this.setState({ email: event.target.value }),

    onPasswordChanged: (event) => this.setState({ password: event.target.value }),

    onCancel: () => this.props.history.push('/'),

    onSubmit: (event) => {
      event.preventDefault()
      this.props.domainData.signUp(this.state)
        .then(() => this.props.history.push('/'))
    }
  }

  render () {
    return (
      <div>
        <h1>Hello from SignUpContainer Container!</h1>
        <SignUpForm
          {...this.state}
          {...this.callbacks}
        />
      </div>
    )
  }
}

export default withRouter(SignUpContainer)
