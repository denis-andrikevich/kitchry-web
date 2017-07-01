const email = (message = 'Invalid email') =>  value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? message
    : undefined);
    
export default email;