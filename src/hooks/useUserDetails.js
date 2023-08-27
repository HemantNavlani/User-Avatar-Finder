import axios from "axios";
import { useEffect, useState } from "react";

function useUserDetails(userName){

    const [user,setUser] = useState({
        isLoading:false,

      
    });
    async function downloadUser(){

        try{
            setUser((state)=>({
                ...state,
                isLoading:true,
            }))
    
    
            const response = await axios.get(`https://api.github.com/users/${userName}`)        
    
            console.log('res',response)
    
            setUser((state)=>({
                ...state,
                name:response.data.name,
                avatar:response.data.avatar_url,
                github:response.data.html_url,
                bio :response.data.bio,
                isLoading:false,
                noUser:false
            }))
        }
        

        catch(e){
            console.log('Something went wrong')
            setUser((state)=>({
                ...state,
                noUser:true,
                isLoading:false
            }))
        }
    }
        
    useEffect(()=>{
        downloadUser()
    },[userName])

    return[user,setUser];
}


export default useUserDetails;
