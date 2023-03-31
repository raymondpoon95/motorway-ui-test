import * as Yup from "yup";

export const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .min(2, "Too Short!")
    .email("Invalid email")
    .required("Required"),
  dob: Yup.string().required("Required"),
  color: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  salary: Yup.string().required("Required"),
});
