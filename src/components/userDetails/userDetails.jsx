import useUserDetails from "../../hooks/useUserDetails";

function UserDetails({userName}){
    console.log('username',userName)
    const [user,setUser] = useUserDetails(userName);
    return (
        <div>
        {/* {userName} */}
        {console.log('user',user)}
        </div>
    )
}

export default UserDetails;