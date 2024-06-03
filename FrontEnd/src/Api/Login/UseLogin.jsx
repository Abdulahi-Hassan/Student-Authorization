import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { endpoint } from "../../main";
import UseUser from "../User/UseUser";

const UseLogin = () => {
  const { Getuser } = UseUser();
  let navigate = useNavigate();
  const uselogin = async ({ login }) => {
    let { data } = await axios.post(endpoint + "/auth/login", login);
    if (data.status === "Success") {
      localStorage.setItem("token", data.token);
      localStorage.setItem("single", JSON.stringify(Getuser));
      localStorage.setItem("Role", JSON.stringify(data.Role));
      let user = data.Role === "true";
      if (user) {
        navigate("/AdminDashboard");
      } else {
        navigate("/userdashboard");
      }

      toast.success(data.message);
    } else {
      toast.error(data);
    }
  };
  return { uselogin };
};

export default UseLogin;
