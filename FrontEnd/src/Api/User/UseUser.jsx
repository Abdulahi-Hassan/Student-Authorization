import axios from "axios";
import { useEffect, useState } from "react";
axios.defaults.withCredentials = true;
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { endpoint } from "../../main";
const UseUser = () => {
  let navigate = useNavigate();
  const [GetAlluser, setGetAlluser] = useState([]);
  const [Getuser, setGetuser] = useState("");
  let token = localStorage.getItem("token");
  let UserExist = JSON.parse(localStorage.getItem("single"));
  const useusersignup = async ({ formdata }) => {
    let { data } = await axios.post(endpoint + "/api/auth/signup", formdata);
    if (data.status === "Success") {
      toast.success(data.message);
      if (token) {
        setTimeout(() => {
          navigate("/user");
        }, 3000);
      } else {
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } else {
      toast.error(data);
    }
  };

  const useuserupdate = async ({ formdata, id }) => {
    let { data } = await axios.put(`${endpoint + "/api/user"}/${id}`, formdata);
    if (data.status === "Success") {
      if (id === UserExist._id) {
        setTimeout(() => {
          navigate("/userdashboard");
          // localStorage.clear();
        }, 3000);
      } else {
        setTimeout(() => {
          navigate("/user");
        }, 3000);
      }
      toast.success(data.message);
    } else {
      toast.error(data);
    }
  };
  const useuserdelete = async ({ id }) => {
    let { data } = await axios.delete(`${endpoint + "/api/user"}/${id}`);
    if (data.status === "Success") {
      toast.success(data.message);
      setTimeout(() => {
        navigate("/user");
      }, 3000);
    }
  };

  useEffect(() => {
    const useusergetall = async () => {
      let { data } = await axios.get(endpoint + "/api/user", {
        withCredentials: true,
      });
      let { data: Single } = await axios.get(endpoint + "/api/user/single", {
        withCredentials: true,
      });
      setGetuser(Single);
      setGetAlluser(data);
    };
    useusergetall();
  }, []);

  return { useusersignup, useuserupdate, useuserdelete, GetAlluser, Getuser };
};

export default UseUser;
