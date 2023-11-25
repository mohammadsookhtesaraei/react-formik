

const Login = () => {
    return (
        <div className="container flex-center">
           <form className="form">
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
              <button className="button" type="submit">Login</button>
              <div>
                <p>if you do not have an account register now</p>
              </div>
           </form>
           {/* box right */}
           <div className="hidden md:flex-center-col boxR">
            <p className="boxChild">Welcome</p>
            <span className="boxChild">Hi! are you Ready to start</span>
           </div>
        </div>
    );
}

export default Login;
