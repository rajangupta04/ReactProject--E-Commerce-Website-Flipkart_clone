import { useEffect, useState } from "react"


const useFetch = (request)=> {

    let [data,setData] = useState(null);
    let [pending,setPending] = useState(true);
    let [error,setError] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch(request)
            .then((response)=>{
                if(response.ok===true)
                {
                    return response.json();
                }
                else
                {
                    throw Error("data not found,please search for different keyword")
                }
            })
            .then((data)=>{setData(data); setPending(false) })
            .catch((err)=>{setError(err.message); setPending(false) })
        }, 1000)
    },[])
  return {data,pending,error}
}

export default useFetch
