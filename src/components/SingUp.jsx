
import { useFormik } from "formik";


const SingUp = () => {

    const formik=useFormik({
        initialValues:{
         name:"",
         email:"",
         password:"",
         confirmPassword:"",
         check:true,
        },
     
        onSubmit:values => {
         console.log(values)
        }
       })
     
    return (
        <div className="container flex-center">
           <form className="form">
             {/* name */}
              <div className="box flex-cols">
              <label className="label" htmlFor="">name</label>
              <input className={(formik.errors.name && formik.touched.name) ? "input2" :"input"} id="name" type="name" {...formik.getFieldProps('name')} />
              {formik.errors.name && formik.touched.name && <span className="errors">{formik.errors.name}</span>}
             </div>
             {/* email */}
             <div className="box flex-cols">
              <label className="label" htmlFor="email">email</label>
              <input className={(formik.errors.email && formik.touched.email) ? "input2" :"input"} id="email" type="email" {...formik.getFieldProps('email')} />
              {formik.errors.email && formik.touched.email && <span className="errors">{formik.errors.email}</span>}
             </div>
             {/* password */}
             <div className="box flex-cols">
              <label className="label" htmlFor="password">password</label>
              <input className={(formik.errors.password && formik.touched.password) ? "input2" :"input"} id="password" type="password" {...formik.getFieldProps('password')} />
              {formik.errors.password && formik.touched.password && <span className="errors">{formik.errors.password}</span>}
             </div>
             {/* confirmPassword */}
              <div className="box flex-cols">
              <label className="label" htmlFor="confirmPassword">confirmPassword</label>
              <input className={(formik.errors.confirmPassword && formik.touched.confirmPassword) ? "input2" :"input"}  type="password" id="confirmPassword" {...formik.getFieldProps('confirmPassword')} />
              {formik.errors.confirmPassword && formik.touched.confirmPassword && <span className="errors">{formik.errors.confirmPassword}</span>}
             </div>

             <div className="box flex-justify-start">
              <label className="label" htmlFor="check">I accept terms & conditions</label>
              <input className="checkbox"  type="checkbox" id="check" {...formik.getFieldProps('check')} />
              {formik.errors.check && formik.touched.check && <span className="checkErrors">{formik.errors.check}</span>}
             </div>
              <button className="button" type="submit">submit</button>
           </form>
           {/* box right */}
           <div className="hidden md:flex-center-col boxR">
            <p className="boxChild">Welcome</p>
            <span className="boxChild">Register now and join us!</span>
           </div>
        </div>
    );
}

export default SingUp;
