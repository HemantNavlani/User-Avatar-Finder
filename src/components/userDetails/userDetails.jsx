import useUserDetails from "../../hooks/useUserDetails";

function UserDetails({userName}){
    console.log('username',userName)
    const [user,setUser] = useUserDetails(userName);
    return (
        <div>
            <h1>{user.name}</h1>
            <h4>{user.bio}</h4>
            <>{user.github}</>
            <a href={user.github} target="_blank">Github Link</a>
            <img src={user.avatar} alt="" />
        {console.log('user',user)}
        </div>
    )
}

export default UserDetails;