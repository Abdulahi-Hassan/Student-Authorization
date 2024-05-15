import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import toast, { Toaster } from "react-hot-toast";
import {endpoint}  from '../../pages/Login'
export const Student = () => {
    const [ApiData,setApiData]=useState([])
  const SendRequest = async () => {
   try {
    let {data}  = await axios.get(endpoint+'/student/Allstudent');
    setApiData(data)
   } catch (error) {
    console.log(error.message)
    
   }
  };

  localStorage.setItem('student',JSON.stringify(ApiData))

  useEffect(() => {
    SendRequest();
  }, []);

  

  return (
    <div className="container" style={{ marginTop: "10px", padding: "0 4%" }}>
      <Link to={`/StudentCreate`} className="btn btn-info mx-2">
        Create +
      </Link>
      <table className="table  text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Address</th>
            <th>Balace</th>
            <th>Status</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {ApiData && ApiData.map((data,index)=>(
              <tr key={index}>
              <td>{data._id}</td>
              <td>{data.Name}</td>
              <td>{data.Email.Email}</td>
              <td>{data.Address}</td>
              <td>{data.Balance}</td>
              <td>{data.Status}</td>


              <td>
                {
                  <div>
                    <Link
                      to={`/StudentUpdate/${data._id}`}
                      className="btn btn-primary mx-2"
                    >
                      Edit
                    </Link>
                    |
                    <Link
                      to={`/StudentDelete/${data._id}`}
                      className="btn btn-danger mx-2"
                    >
                      Delete
                    </Link>
                  </div>
                }
              </td>
            </tr>
         ))}
        </tbody>
      </table>
      <Toaster />
    </div>
  );
};
