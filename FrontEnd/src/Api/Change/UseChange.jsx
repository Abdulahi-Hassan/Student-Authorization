import axios from 'axios'
import toast from 'react-hot-toast'
import { endpoint } from '../../main';
import { useNavigate } from 'react-router-dom';
const UseChange = () => {
  let navigate=useNavigate()
const usechange=async(change)=>{
    let {data}=await axios.post(endpoint+"/auth/change",change)
    if (data.status === "Success") {
     toast.success(data.message);
     setTimeout(() => {
       navigate("/login");
     }, 3000);
   } else {
     toast.error(data);
   }
   };
   return { usechange };


}

export default UseChange