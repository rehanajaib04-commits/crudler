import { useState } from "react"
import { useEffect } from "react";

const useLoad = (loadEndpoint) => {
//State
const [records,SetRecords] = useState([]);
const [isLoading,setIsLoading] = useState([]);


//loader
const loadRecords = async (endpoint) =>{
    const response = await API.get(endpoint);
if (response.isSuccess) SetRecords(response.results);
setIsLoading(false);

};
  useEffect(() => { loadModules(moduleEndpoint); }, []); 
}
//return

export default useLoad;





