import { useParams } from "react-router-dom"
import UsePayment from "../../../Api/Payment/UsePayment"
const PaymentDelete = () => {
    let {id}=useParams()
    let {DeletePayment}=UsePayment();
    DeletePayment({id})
}

export default PaymentDelete