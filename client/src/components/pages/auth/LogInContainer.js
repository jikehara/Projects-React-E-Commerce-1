import React, {Component} from 'react'
import LogInForm from './LogInForm'
import * as AppPropTypes from '../../../lib/propTypes'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

class LogInContainer extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    history: PropTypes.object.isRequired
  }

  state = {
    email: '',
    password: ''
  }

  callbacks = {
    onEmailChanged: (event) => this.setState({ email: event.target.value }),

    onPasswordChanged: (event) => this.setState({ password: event.target.value }),

    onCancel: () => this.props.history.push('/'),

    onSubmit: (event) => {
      event.preventDefault()
      this.props.domainData.logInUser(this.state.email, this.state.password)
        .then(() => this.props.history.push('/'))
    }
  }

  render () {
    return (
      <div>
        <h1>Hello from Login Container!</h1>
        <LogInForm
          {...this.state}
          {...this.callbacks}
        />
      </div>
    )
  }
}

export default withRouter(LogInContainer)
