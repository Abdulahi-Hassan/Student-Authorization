import { Link } from "react-router-dom";
import moment from 'moment'
import UsePayment from "../../Api/Payment/UsePayment";
export const AllPayment = () => {
  const {GetAllPayment}=UsePayment()
  localStorage.setItem("payment", JSON.stringify(GetAllPayment))
  return (
    <div className="container mt-5" style={{ marginTop: "10px", padding: "0 4%" }}>
      <Link to={`/payment/signup`} className="btn btn-info mt-5 mx-2">
        Create +
      </Link>
      <table className="table  text-center mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Class</th>
            <th>Payment</th>
            <th>Date</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {GetAllPayment &&
            GetAllPayment.map((data, index) => (
              <tr key={index}>
                <td>{data.Name.Name}</td>
                <td>{data.Email.Email}</td>
                <td>{data.ClassName.ClassName}</td>
                <td>{data.PaymentAmount}</td>
                <td>{moment(data.Date).format("LL")}</td>

                <td>
                  {
                    <div>
                      <Link
                        to={`/Payment/Update/${data.Name._id}`}
                        className="btn btn-primary mx-2"
                      >
                        Edit
                      </Link>
                      |
                      <Link
                        to={`/payment/Delete/${data.Name._id}`}
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
    </div>
  );
};
