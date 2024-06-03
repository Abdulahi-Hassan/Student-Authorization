import { Link } from "react-router-dom";
import moment from "moment";
import UseClass from "../../Api/Class/UseClass";
export const AllClass = () => {
  const { GetAllclass } = UseClass();
  localStorage.setItem("class", JSON.stringify(GetAllclass));
  return (
    <div
      className="container mt-5"
      style={{ marginTop: "10px", padding: "0 4%" }}
    >
      <Link to={`/Class/signup`} className="btn btn-info mt-5 mx-2">
        Create +
      </Link>
      <table className="table  text-center mt-5">
        <thead>
          <tr>
            <th>ClassName</th>
            <th>E-mail</th>
            <th>ClassStatus</th>
            <th>Date</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {GetAllclass &&
            GetAllclass.map((data, index) => (
              <tr key={index}>
                
                <td>{data.ClassName}</td>
                <td>{data.Email.Email}</td>
                <td>{data.ClassStatus}</td>
                <td>{moment(data.ClassDate).format("LL")}</td>

                <td>
                  {
                    <div>
                      <Link
                        to={`/Class/Update/${data._id}`}
                        className="btn btn-primary mx-2"
                      >
                        Edit
                      </Link>
                      |
                      <Link
                        to={`/Class/Delete/${data._id}`}
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
