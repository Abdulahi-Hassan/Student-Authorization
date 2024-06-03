import { useNavigate } from "react-router-dom";
import { endpoint } from "../../main";
import toast from "react-hot-toast";
import axios from "axios";
import { useEffect, useState } from "react";

const UsePayment = () => {
  const [GetAllPayment, setGetAllPayment] = useState([]);
  const [GetPayment, setGetPayment] = useState([]);
  let navigate = useNavigate();
  const InsertPayment = async (Payment) => {
    let { data: Insert } = await axios.post(
      endpoint + "/payment/signup",
      Payment
    );
    if (Insert.status === "Success") {
      toast.success(Insert.message);
      setTimeout(() => {
        navigate("/payment");
      }, 1000);
    } else {
      toast.error(Insert);
    }
  };
  const UpdatePayment = async ({ Payment, id }) => {
    let { data: Update } = await axios.put(
      `${endpoint + "/payment"}/${id}`,
      Payment
    );
    if (Update.status === "Success") {
      toast.success(Update.message);
      setTimeout(() => {
        navigate("/payment");
      }, 1000);
    } else {
      toast.error(Update);
    }
  };
  const DeletePayment = async ({ id }) => {
    let { data: Delete } = await axios.delete(`${endpoint + "/payment"}/${id}`);
    if (Delete.status === "Success") {
      toast.success(Delete.message);
      setTimeout(() => {
        navigate("/payment");
      }, 1000);
    }
  };
  useEffect(() => {
    const GetAllPayment = async () => {
      let { data } = await axios.get(endpoint + "/payment");
      setGetAllPayment(data);
      let { data :single} = await axios.get(endpoint + "/payment/single");
      setGetPayment(single);
    };
    GetAllPayment();
  }, []);

  return {GetPayment, InsertPayment, UpdatePayment, DeletePayment, GetAllPayment };
};
export default UsePayment;
