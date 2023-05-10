import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as z from "zod";

const validationSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  return (
    <div className="d-flex w-full items-center justify-center">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="mx-auto w-64 border">
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <div>
              <button className="rounded-full bg-black px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20">
                Sign in
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
