import { useState } from "react";
import { Link } from "react-router-dom";
import UsePayment from "../../../Api/Payment/UsePayment";

 const PaymentCreate = () => {
  const [Payment, setPayment] = useState({
    Name: "",
    Email: "",
    ClassName: "",
    PaymentAmount: "",
  });

  const {InsertPayment}=UsePayment()

  
  const HandlePayment = async (e) => {
    e.preventDefault();
    InsertPayment(Payment);
}

  return (
    <div
      className="contaier d-flex align-items-center  text-center  justify-content-center  bg-dark login"
      style={{ height: "600px" }}
    >
      <div
        className="card"
        style={{ width: "400px", borderRadius: "12px", height: "400px" }}
      >
        <div
          className="card-title   "
          style={{ fontSize: "38px", fontWeight: "600" }}
        >
          <strong className="ms-5">Create Payment</strong>
          <Link
            to="/Payment"
            className=" btn btn-danger mt-2 mx-2"
            style={{ float: "right" }}
          >
            X
          </Link>
        </div>
        <div className="card-body ">
          <form onSubmit={HandlePayment}>
            <div className="row">
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter Your E-mail"
                  value={Payment.Email}
                  onChange={(e) =>
                    setPayment({
                    ...Payment,
                      Email: e.target.value
                    })
                  }
                />
              </div>

              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your StudentName"
                  value={Payment.Name}
                  onChange={(e) =>
                    setPayment({
                    ...Payment,

                      Name: e.target.value
                    })
                  }
                />
              </div>
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your ClassName"
                  value={Payment.ClassName}
                  onChange={(e) =>
                    setPayment({
                    ...Payment,

                      ClassName: e.target.value
                    })
                  }
                />
              </div>

              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  placeholder="Enter Your PaymentAmount"
                  className="form-control mt-4"
                  value={Payment.PaymentAmount}
                  onChange={(e) =>
                    setPayment({
                    ...Payment,

                      PaymentAmount: e.target.value
                    })
                  }
                />
              </div>

              <div className="col-6" style={{ width: "30%", margin: "0 auto" }}>
                <button
                  type="text"
                  className="form-control btn btn-primary mt-4"
                >
                  SignUp
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentCreate;