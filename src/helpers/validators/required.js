const required = (message = 'Required') => value => (value == null ? message : undefined);

export default required;