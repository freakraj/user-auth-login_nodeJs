function SignupValidation(values) {
  let errors = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (values.name === "") {
    errors.name = "Name should not be empty";
  }

  if (values.email === "") {
    errors.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (values.password === "") {
    errors.password = "Password should not be empty";
  } else if (!password_pattern.test(values.password)) {
    errors.password =
      "Password must have at least 8 characters including uppercase, lowercase, number, and special characters";
  }

  if (values.confirmPassword === "") {
    errors.confirmPassword = "Confirm password should not be empty";
  } else if (values.password !== values.confirmPassword) {
    console.log("gautam",values.password + "___" + values.confirmPassword);
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
}

export default SignupValidation;
