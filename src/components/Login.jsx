import { Link } from "react-router-dom";

import { useFormik } from "formik";
import { mySchema } from "./schema";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {},

    validationSchema: mySchema,
  });

  return (
    <div className="container flex-center">
      <form className="form">
        {/* email */}
        <div className="box flex-cols">
          <label className="label" htmlFor="email">
            email
          </label>
          <input
            className={
              formik.errors.email && formik.touched.email ? "input2" : "input"
            }
            id="email"
            type="email"
            {...formik.getFieldProps("email")}
          />
          {formik.errors.email && formik.touched.email && (
            <span className="errors">{formik.errors.email}</span>
          )}
        </div>
        {/* password */}
        <div className="box flex-cols">
          <label className="label" htmlFor="password">
            password
          </label>
          <input
            className={
              formik.errors.password && formik.touched.password
                ? "input2"
                : "input"
            }
            id="password"
            type="password"
            {...formik.getFieldProps("password")}
          />
          {formik.errors.password && formik.touched.password && (
            <span className="errors">{formik.errors.password}</span>
          )}
        </div>
        <button className="button mt-8" type="submit">
          Login
        </button>
      </form>
      {/* box right */}
      <div className="hidden md:flex-center-col boxR">
        <p className="boxChild">Welcome</p>
        <span className="boxChild">Login and start</span>
        <p className="boxChild">if you do not have an account ?</p>
        <div className="flex   flex-row-reverse mt-6  ">
          <Link to={"/singup"} className="text-blue-400" href="#">
            Register
          </Link>
          <span className="relative flex h-1 w-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1 w-1 bg-sky-500"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
