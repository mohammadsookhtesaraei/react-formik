
import Login from './components/Login';
import Navigation from './components/Navigation';
import SingUp from './components/SingUp';
import {Routes,Route,Navigate} from "react-router-dom"

const App = () => {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/singup' element={<SingUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/*' element={<Navigate to={"/singup"}/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
