import { useFormik } from "formik";
import { mySchema } from "./schema";
import { Link } from "react-router-dom";

const SingUp = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      check: false,
    },

    onSubmit: (values) => {
      console.log(values)
    },

    validationSchema: mySchema,
  });

  return (
    <div className="container flex-center">
      <form onSubmit={formik.handleSubmit} className="form">
        {/* name */}
        <div className="box flex-cols">
          <label className="label" htmlFor="">
            name
          </label>
          <input
            className={
              formik.errors.name && formik.touched.name ? "input2" : "input"
            }
            id="name"
            type="name"
            {...formik.getFieldProps("name")}
          />
          {formik.errors.name && formik.touched.name && (
            <span className="errors">{formik.errors.name}</span>
          )}
        </div>
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
        {/* confirmPassword */}
        <div className="box flex-cols">
          <label className="label" htmlFor="confirmPassword">
            confirmPassword
          </label>
          <input
            className={
              formik.errors.confirmPassword && formik.touched.confirmPassword
                ? "input2"
                : "input"
            }
            type="password"
            id="confirmPassword"
            {...formik.getFieldProps("confirmPassword")}
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <span className="errors">{formik.errors.confirmPassword}</span>
          )}
        </div>

        <div className="flex-cols boxcheck">
          <div>
            <label className="label" htmlFor="checkbox">
              I accept terms & condition
            </label>
            <input
              id="checkbox"
              type="checkbox"
              className="checkbox"
              {...formik.getFieldProps("check")}
            />
          </div>
          {formik.errors.check && formik.touched.check && (
            <span className="checkErrors">{formik.errors.check}</span>
          )}
        </div>
        <button className="button" type="submit">
          submit
        </button>
      </form>
      {/* box right */}
      <div className="hidden md:flex-center-col boxR">
        <p className="boxChild">Welcome</p>
        <span className="boxChild">Register now and join us!</span>
        <p className="boxChild">if you already have an account</p>
        <div className="flex   flex-row-reverse mt-6  ">
          <Link to={"/login"} className="text-blue-400" href="#">
            Login
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

export default SingUp;
