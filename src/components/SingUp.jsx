

const SingUp = () => {
    return (
        <div className="container flex-center">
           <form className="form">
             {/* name */}
              <div className="box flex-cols">
              <label className="label" htmlFor="">name</label>
              <input className="input" type="name" />
             </div>
             {/* email */}
             <div className="box flex-cols">
              <label className="label" htmlFor="email">email</label>
              <input className="input" type="email" />
             </div>
             {/* password */}
             <div className="box flex-cols">
              <label className="label" htmlFor="password">password</label>
              <input className="input" type="password" />
             </div>
             {/* confirmPassword */}
              <div className="box flex-cols">
              <label className="label" htmlFor="confirmPassword">confirmPassword</label>
              <input className="input" type="password" id="confirmPassword" />
             </div>

             <div className="box flex-justify-start">
              <label className="label" htmlFor="check">I accept terms & conditions</label>
              <input className="checkbox" type="checkbox" id="check" />
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
