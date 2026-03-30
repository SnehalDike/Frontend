import { useEffect, useState } from "react"
//https://jsonplaceholder.typicode.com/users/1
export default function User()
{
    const [user,setUser]=useState(null);
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        (async function() {
            try{
            const data= await fetch("https://jsonplaceholder.typicode.com/users/1");
            const datajson=await data.json();
            console.log(datajson)
            setUser(datajson)
            }
            catch(err){
                setError(true)
            }
            finally{
                setLoading(false)
            }
        })()
        
    },[])
    if(loading)
    {
        return(
        <p>Loading...</p>
    )
    }
    else if(error){
        return(
        <p>ops somthing went wrong</p>          
        )
    }
    else return(
    <div>
        {user.name}<br/>
        {user.email}<br/>
        {user.phone}
    </div>
    )
}