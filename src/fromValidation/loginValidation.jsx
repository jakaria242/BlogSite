import * as Yup from 'yup';
 
let mailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
let passwordFormat =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

export const  validationSchema = Yup.object({
    email: Yup.string()
              .email('Invalid email address')
              .matches(mailFormat, "Invalid email address")
              .required("Please enter your email"),
    password: Yup.string()
              .matches(
                passwordFormat,
                "Invalid email address or password"
              )
              .required("Please enter your password"),   
})