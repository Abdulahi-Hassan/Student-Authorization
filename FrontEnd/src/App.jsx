import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import SignUp from "./pages/User/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Forgetpassword from "./pages/Forgetpass/Forgetpassword";
import { SignUpStudent } from "./pages/Student/SignUp/SignUp";
import DeleteStudent from "./pages/Student/Delete.jsx/Delete";
import DeleteUser from "./pages/User/Delete/Delete";
import UpdateUser from "./pages/User/Update/Update";
import AllUser from "./Components/AllApiData/Users";
import { AllStudent } from "./Components/AllApiData/Student";
import PaymentCreate from "./pages/Receipt/SignUp/SignUp";
import PaymentUpdate from "./pages/Receipt/Update/Update";
import PaymentDelete from "./pages/Receipt/Delete/Delete";
import { AllPayment } from "./Components/AllApiData/Receipt";
import ClassUpdate from "./pages/Class/Update/Update";
import { UpdateStudent } from "./pages/Student/Update/Update";
import ClassDelete from "./pages/Class/Delete/Delete";
import { AllClass } from "./Components/AllApiData/Class";
import ClassCreate from "./pages/Class/SignUp/SignUp";
import UserDashboard from "./Components/UserDashboard/UserDashboard";
import { Header } from "./Header";
import { UpdateUserProfile } from "./Components/UserDashboard/Update.Profile";
import { Services } from "./pages/Services/Services";
import { Contuct } from "./pages/Contuct/Contuct";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";

const App = () => {
  let User = JSON.parse(localStorage.getItem("Role"));
  let user = User === "true";

  return (
    <div>
      <Header />
      <Routes>
        {user ? (
          <>
            <Route path="/payment/signup" element={<PaymentCreate />} />
            <Route path="/class/signup" element={<ClassCreate />} />
            <Route path="/payment/update/:id" element={<PaymentUpdate />} />
            <Route path="/payment/delete/:id" element={<PaymentDelete />} />
            <Route path="/user/delete/:id" element={<DeleteUser />} />
            <Route path="/class/update/:id" element={<ClassUpdate />} />
            <Route path="/class/delete/:id" element={<ClassDelete />} />
            <Route path="/user/update/:id" element={<UpdateUser />} />
            <Route path="/user" element={<AllUser />} />
            <Route path="/student" element={<AllStudent />} />
            <Route path="/payment" element={<AllPayment />} />
            <Route path="/class" element={<AllClass />} />
            <Route path="/student/signup" element={<SignUpStudent />} />
            <Route path="/student/update/:id" element={<UpdateStudent />} />
            <Route path="/student/delete/:id" element={<DeleteStudent />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/userdashboard" element={<UserDashboard />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        ) : (
          <>
            <Route path="/userdashboard" element={<UserDashboard />} />
            <Route path="/Profile/:id" element={<UpdateUserProfile />} />
          </>
        )}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contuct" element={<Contuct />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/*" element={<h1>Not Found</h1>} /> */}
        <Route path="/forgetpassword" element={<Forgetpassword />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
