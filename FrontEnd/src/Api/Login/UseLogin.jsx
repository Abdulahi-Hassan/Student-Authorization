import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { endpoint } from "../../main";
import UseUser from "../User/UseUser";
const UseLogin = () => {
  let navigate = useNavigate();
  let {Getuser}=UseUser()
  const uselogin = async ({ login }) => {
    let { data } = await axios.post(endpoint + "/api/auth/login", login);
    if (data.status === "Success") {
      localStorage.setItem("token", data.token);
      localStorage.setItem("Role", JSON.stringify(data.Role));
      localStorage.setItem("single", JSON.stringify(Getuser));
      let { Role } = data;
      if (Role === "true") {
        setTimeout(() => {
          navigate("/AdminDashboard");
        }, 3000);
      } else {
        setTimeout(() => {
          navigate("/UserDashboard");
        }, 3000);
      }

      toast.success(data.message);
    } else {
      toast.error(data);
    }
  };
  return { uselogin };
};

export default UseLogin;
