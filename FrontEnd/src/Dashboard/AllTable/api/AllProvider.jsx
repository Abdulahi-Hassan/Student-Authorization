import { useEffect, useState } from "react";
import { useContext, createContext } from "react";
import { endpoint } from "../../../pages/Login";
import axios from "axios";
const AllApi = createContext();
export const AllProvider = ({ children }) => {
  const [UserApi, setUserApi] = useState([]);
  const [StudentApi, setStudentApi] = useState([]);
  const [ClassApi, setClassApi] = useState([]);
  const [ReceiptApi, setReceiptApi] = useState([]);

  const GetAllAPI = async () => {
    let { data: User } = await axios.get(endpoint + "/user/Alluser");
    setUserApi(User);
    let { data: Student } = await axios.get(endpoint + "/student/Allstudent");
    setStudentApi(Student);
    let { data: Class } = await axios.get(endpoint + "/Class/AllClass");
    setClassApi(Class);
    let { data: Receipt } = await axios.get(endpoint + "/Receipt/AllReceipt");
    setReceiptApi(Receipt);
  };
  useEffect(() => {
    GetAllAPI();
  }, [GetAllAPI()]);

  let values = {
    UserApi,
    StudentApi,
    ClassApi,
    ReceiptApi,
  };
  return <AllApi.Provider value={values}>{children}</AllApi.Provider>;
};

export const UseApiData = () => {
  let context = useContext(AllApi);
  return context;
};
