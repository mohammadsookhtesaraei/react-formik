import { useState ,useEffect} from "react";
import { Link,useLocation} from "react-router-dom";
const Navigation = () => {
  const location=useLocation();
  const [text,setText]=useState("");
  const [text1,setText1]=useState("")
  
  useEffect(() => {
    if(location.pathname === "/login") {
      setText('if you do not have an account ?')
      setText1('Register')
    } else if(location.pathname === "/singup"){
      setText('if you already have an account ?')
      setText1('Login')
    } else {
      setText("")
      setText("")
    }
  }, [location.pathname]);


  return (
    <div className=" p-[20px] text-xs font-normal p-[10px]font-bold shadow-myShadow  flex items-center justify-center  text-white  w-full md:hidden">
      <p className="boxChild">{text}</p>
      <div className="flex flex-row-reverse ml-2">
        <Link to={location.pathname === "/login"? "/singup":"/login"} className="text-blue-400" href="#">
          {text1}
        </Link>
        <span className="relative flex h-1 w-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1 w-1 bg-sky-500"></span>
        </span>
      </div>
    </div>
  );
};

export default Navigation;
