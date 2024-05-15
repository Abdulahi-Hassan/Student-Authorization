import "../index.css";
import { useEffect, useState } from "react";
import moment from 'moment'
import axios from "axios";
axios.defaults.withCredentials = true;
import { endpoint } from "../pages/Login";
export const SingleDash = () => {
  const [ApiData, setApiData] = useState([]);
  const [Student, setStudent] = useState([]);
  const [Class, setClass] = useState([]);
  const [Receipt, setReceipt] = useState([]);

  useEffect(() => {
    async function load() {
      let { data } = await axios.get(endpoint + "/user", {
        withCredentials: true,
      });
      setApiData(data);
      let { data: student } = await axios.get(endpoint + "/student", {
        withCredentials: true,
      });
      setStudent(student);

      let { data: receipt } = await axios.get(endpoint + "/receipt", {
        withCredentials: true,
      });

      setReceipt(receipt);

      let { data: Class } = await axios.get(endpoint + "/class", {
        withCredentials: true,
      });
      setClass(Class);
    }
    load();
  }, []);

  return (
    <div className="block" style={{ padding: "0 15%", marginLeft: "32px" }}>
      <table className=" table text-center  mt-4">
        <thead>
          <tr>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {ApiData && (
            <tr className="text-center">
              <td>{ApiData.Email}</td>
              <td>{ApiData.Role}</td>
              <td>{ApiData.Status}</td>
            </tr>
          )}
        </tbody>
      </table>
    
      <table className=" table text-center  mt-4">
        <thead>
          <tr>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Class && (
            <tr className="text-center">
              <td>{Class.ClassName}</td>
              <td>{Class.ClassStatus}</td>
              <td>{Class.ClassDate &&  moment(Class.ClassDate).format("l")}</td>

            </tr>
          )}
        </tbody>
      </table>
    

      <table className=" table text-center  mt-4">
        <thead>
          <tr>
            <th>Class</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {Class && (
            <tr className="text-center">
              <td>{Class.ClassName}</td>
              <td>{Class.ClassStatus}</td>
              <td>{Class.ClassDate &&  moment(Class.ClassDate).format("L")
              
              }</td>
            </tr>
          )}
        </tbody>
      </table>

      <table className=" table text-center  mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {Student && (
            <tr className="text-center">
              <td>{Student.Name}</td>
              <td>{Student.Phone}</td>
              <td>{Student.Gender}</td>
            </tr>
          )}
        </tbody>
      </table>

      <table className=" table text-center  mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Receipt</th>
          </tr>
        </thead>
        <tbody>
          {Receipt && (
            <tr  className="text-center">
              <td>{Receipt.Name}</td>
              <td>{Receipt.ReceiptAmount}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
