import { Link } from "react-router-dom";
import moment from "moment";
import toast, { Toaster } from "react-hot-toast";
import {UseApiData} from '../../Dashboard/AllTable/api/AllProvider'
export const Receipt = () => {
  const { ReceiptApi } = UseApiData();


   

  


  return (
    <div className="container" style={{ marginTop: "10px", padding: "0 4%" }}>
      <Link to={`/ReceiptCreate`} className="btn btn-info mx-2">
        Create +
      </Link>
      <table className="table  text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Class</th>
            <th>ReceiptAmount</th>
            <th>Date</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {ReceiptApi && ReceiptApi.map((data,index)=>(
              <tr key={index}>
              <td>{data._id}</td>
              <td>{data.Name.Name}</td>
              <td>{data.Email.Email}</td>
              <td>{data.ClassName.ClassName}</td>
              <td>{data.ReceiptAmount}</td>
              <td>{moment(data.Date).format("LL")}</td>

              <td>
                {
                  <div>
                    <Link
                      to={`/ReceiptUpdate/${data.Name._id}`}
                      className="btn btn-primary mx-2"
                    >
                      Edit
                    </Link>
                    |
                    <Link
                      to={`/ReceiptDelete/${data.Name._id}`}
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
