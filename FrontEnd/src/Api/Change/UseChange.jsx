import axios from 'axios'
import toast from 'react-hot-toast'
import { endpoint } from '../../main';
const UseChange = () => {
const usechange=async(change)=>{
    let {data}=await axios.post(endpoint+"/auth/change",change)
    if (data.status === "Success") {
     toast.success(data.message);
   } else {
     toast.error(data);
   }
   };
   return { usechange };


}

export default UseChange