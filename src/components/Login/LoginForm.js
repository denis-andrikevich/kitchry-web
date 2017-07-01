import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Paper from 'material-ui/Paper'
import { TextField } from 'redux-form-material-ui'; 
import validators from '../../helpers/validators';
import RaisedButton from 'material-ui/RaisedButton';

let LoginForm = props => {
  const { handleSubmit, inProgress } = props
  const required = validators.required();
  const email = validators.email('ghunjmkl');
  const style = {
    margin: 12,
  };

  return (
    <Paper style={ {padding: 25} }>
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="username"
            component={TextField}
            hintText="Username"
            validate={required}
          />
        </div>
        <div>
          <Field
            name="password"
            component={TextField}
            hintText="Password"
            floatingLabelText="Password"
            validate={required}
          />
        </div>
        <RaisedButton type="submit" label="Submit" primary={true} style={style} />
      </form>
    </Paper>
  )
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginForm;