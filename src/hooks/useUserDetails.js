import axios from "axios";
import { useEffect, useState } from "react";

function useUserDetails(userName){

    const [user,setUser] = useState({});
    async function downloadUser(){
        console.log('url',`https://api.github.com/users/${userName}`)
        const response = await axios.get(`https://api.github.com/users/${userName}`)

        console.log('res',response)

        setUser({
            name:response.data.name,
            avatar:response.data.avatar_url,
            github:response.data.html_url,
            bio :response.data.bio
        })
    }

    useEffect(()=>{
        downloadUser()
    },[userName])

    return[user,setUser];
}

export default useUserDetails;
