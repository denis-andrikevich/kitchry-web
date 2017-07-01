import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Paper from 'material-ui/Paper'
import { TextField } from 'redux-form-material-ui'; 
import validators from '../../helpers/validators';
import RaisedButton from 'material-ui/RaisedButton';

let LoginForm = props => {
  const { handleSubmit } = props;
  const required = validators.required();
  const email = validators.email('Is not valid email');
  const paperStyle = {
    maxWidth: 500,
    padding: 25,
    margin: '15% auto auto'
  };

  return (
    <Paper style={ paperStyle }>
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="userName"
            component={TextField}
            floatingLabelText="Email"
            validate={[required, email]}
            fullWidth={true}
          />
        </div>
        <div>
          <Field
            name="password"
            component={TextField}
            floatingLabelText="Password"
            validate={required}
            fullWidth={true}
          />
        </div>
        <RaisedButton type="submit" label="Submit" primary={true} style={ { margin: '12px 12px 12px 0'} } />
      </form>
    </Paper>
  )
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginForm;