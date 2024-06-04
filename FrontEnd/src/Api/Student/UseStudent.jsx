import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { endpoint } from "../../main";
axios.defaults.withCredentials = true;
const UseStudent = () => {
  let navigate = useNavigate();
  const [GetAllstudent, setGetAllstudent] = useState([]);
  const [GetStudent, setGetStudent] = useState([]);
  const createstudent = async (student) => {
    let { data: Insert } = await axios.post(
      endpoint+"/api/student/signup",
      student
    );
    if (Insert.status === "Success") {
      setTimeout(() => {
        navigate("/student");
      }, 3000);
      toast.success(Insert.message);
    } else {
      toast.error(Insert);
    }
  };
  const updatestudent = async ({ student, id }) => {
    let { data: Update } = await axios.put(
      `${endpoint+"/api/student"}/${id}`,
      student
    );
    if (Update.status === "Success") {
      setTimeout(() => {
        navigate("/student");
      }, 3000);
      toast.success(Update.message);
    } else {
      toast.error(Update);
    }
  };

  const deletestudent = async ({ id }) => {
    let { data: Remove } = await axios.delete(
      `${endpoint+"/api/student"}/${id}`
    );
    if (Remove.status === "Success") {
      setTimeout(() => {
        navigate("/student");
      }, 3000);
      toast.success(Remove.message);
    } 
  };

  useEffect(() => {
    const usestudentgetall = async () => {
      let { data } = await axios.get(endpoint+'/api/student');
      setGetAllstudent(data);
      let { data:single } = await axios.get(endpoint+'/api/student/single');
      setGetStudent(single);
    };
    usestudentgetall();
  }, []);

  return {
    createstudent,
    deletestudent,
    updatestudent,
    GetAllstudent,
    GetStudent
  };
};

export default UseStudent;
