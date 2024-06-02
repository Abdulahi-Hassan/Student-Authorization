import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { endpoint } from "../../main";

const UseLogin = () => {
  let navigate = useNavigate();
  const uselogin = async (login) => {
    let { data } = await axios.post(
      endpoint+"/auth/login",
      login
    );
    if (data.status === "Success") {
      localStorage.setItem("token", data.token);
      setTimeout(() => {
      navigate("/student");
      }, 3000);
      toast.success(data.message);
    } else {
      toast.error(data);
    }
  };
  return { uselogin };
};

export default UseLogin;
