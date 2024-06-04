import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { endpoint } from "../../main";
axios.defaults.withCredentials = true;
const UseClass = () => {
  let navigate = useNavigate();
  const [GetAllclass, setGetAllclass] = useState([]);
  const [useclassget, setuseclassget] = useState([]);
  const createclass = async ({ Class }) => {
    let { data: Insert } = await axios.post(endpoint + "/api/class/signup", Class);
    if (Insert.status === "Success") {
      setTimeout(() => {
        navigate("/class");
      }, 3000);
      toast.success(Insert.message);
    } else {
      toast.error(Insert);
    }
  };
  const updateclass = async ({ Class, id }) => {
    let { data: Update } = await axios.put(
      `${endpoint + "/api/class"}/${id}`,
      Class
    );
    if (Update.status === "Success") {
      setTimeout(() => {
        navigate("/class");
      }, 3000);
      toast.success(Update.message);
    } else {
      toast.error(Update);
    }
  };

  const deleteclass = async ({ id }) => {
    let { data: Remove } = await axios.delete(`${endpoint + "/api/class"}/${id}`);
    if (Remove.status === "Success") {
      setTimeout(() => {
        navigate("/class");
      }, 3000);
      toast.success(Remove.message);
    }
  };

  useEffect(() => {
    const useclassgetall = async () => {
      let { data } = await axios.get(endpoint + "/api/class");
      setGetAllclass(data);
      let { data:single } = await axios.get(endpoint + "/api/class/single");
      setuseclassget(single);
    };
    useclassgetall();
  }, []);

 

  return {
    createclass,
    deleteclass,
    updateclass,
    GetAllclass,
    useclassget,
  };
};

export default UseClass;
