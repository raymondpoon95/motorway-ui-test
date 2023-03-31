import React from "react";
import { Formik } from "formik";

import { FormSchema } from "../schemas/FormSchema";

const initialValues = {
  name: "",
  email: "",
  dob: "",
  color: "",
  salary: "",
};

const Form = () => {
  return (
    <div className="outer-form-container">
      <div className="form-container">
        <h1 style={{ color: "#fff" }}>Salary Form</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            actions.setSubmitting(false);
            console.log(values);
          }}
          validationSchema={FormSchema}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name="name"
                  placeholder="Name"
                  className={errors.name && touched.name ? "error" : ""}
                />
                {errors.name && touched.name && (
                  <span style={{ color: "#ff3333" }}>{errors.name}</span>
                )}
              </div>

              <div className="input-container">
                <input
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  name="email"
                  placeholder="Email"
                  className={errors.email && touched.email ? "error" : ""}
                />
                {errors.email && touched.email && (
                  <span style={{ color: "#ff3333" }}>{errors.email}</span>
                )}
              </div>

              <div className="input-container">
                <input
                  type="date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dob}
                  name="dob"
                  placeholder="Date of birth"
                  className={errors.dob && touched.dob ? "error" : ""}
                />
                {errors.dob && touched.dob && (
                  <span style={{ color: "#ff3333" }}>{errors.dob}</span>
                )}
              </div>

              <div className="input-container">
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.color}
                  name="color"
                  placeholder="color"
                  className={errors.color && touched.color ? "error" : ""}
                />
                {errors.color && touched.color && (
                  <span style={{ color: "#ff3333" }}>{errors.color}</span>
                )}
              </div>

              <div className="input-container">
                <label
                  htmlFor="salary"
                  style={{ marginTop: "10px", fontSize: "1.2rem" }}
                >
                  Salary:
                </label>
                <input
                  type="range"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.salary}
                  name="salary"
                  min="1"
                  max="100"
                />
                {errors.salary && touched.salary && (
                  <span style={{ color: "#ff3333" }}>{errors.salary}</span>
                )}
              </div>

              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Form;
