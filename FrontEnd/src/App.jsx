import {Toaster} from 'react-hot-toast'
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/User/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Forgetpassword from "./pages/Forgetpass/Forgetpassword";
import { SignUpStudent } from './pages/Student/SignUp/SignUp';
import { UpdateStudent } from './pages/Student/Update/Update';
import DeleteStudent from './pages/Student/Delete.jsx/Delete';
import DeleteUser from './pages/User/Delete/Delete';
import UpdateUser from './pages/User/Update/Update';
import AllUser from './Components/Users';
import { AllStudent } from './Components/Student';
const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/forgetpassword" element={<Forgetpassword/>} />

      <Route path="/student/signup" element={<SignUpStudent/>} />
      <Route path="/student/update/:id" element={<UpdateStudent/>} />
      <Route path="/student/delete/:id" element={<DeleteStudent/>} />


      <Route path="/signup" element={<SignUp/>} />
      <Route path="/user/delete/:id" element={<DeleteUser/>} />
      <Route path="/user/update/:id" element={<UpdateUser/>} />

      <Route path="/user" element={<AllUser/>} />
      <Route path="/student" element={<AllStudent/>} />


      </Routes>
      <Toaster/>
    </div>
  );
};

export default App;
