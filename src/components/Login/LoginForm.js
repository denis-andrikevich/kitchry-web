import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginForm = props => {
  const { handleSubmit, inProgress } = props

  return (
    <form onSubmit={ handleSubmit }>
      {inProgress ? <h1>In progress</h1> : ''}
      <div>
      	<label htmlFor="email">Email</label>
        <Field name="email" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="pass">Password</label>
        <Field name="password" component="input" type="text" />
      </div>
      <button type="submit"> Submit </button>
    </form>
  )
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginForm;