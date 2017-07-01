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
  const style = {
    margin: 12,
  };

  return (
    <Paper style={ {padding: 25} }>
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="userName"
            component={TextField}
            floatingLabelText="Email"
            validate={[required, email]}
          />
        </div>
        <div>
          <Field
            name="password"
            component={TextField}
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