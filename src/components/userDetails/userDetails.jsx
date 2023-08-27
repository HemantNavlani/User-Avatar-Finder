import useUserDetails from "../../hooks/useUserDetails";
import './userDetails.css'
function UserDetails({userName}){
    console.log('username',userName)
    const [user,setUser] = useUserDetails(userName);
    
    return (
        
        <div className="details-wrapper">
{console.log('cddcd',user.noUser)}
{console.log('load',user.isLoading)}

            {(user.isLoading)?   <h3>Loading...</h3> :

             (user.noUser)  ? <h3>User Not Found</h3>:
            
            <div>
            <h1 className="name">{user.name}</h1>
            <h4 className="bio">{user.bio}</h4>
            <a title="Go to Github" href={user.github} target="_blank">
            <img src={user.avatar} alt="" />
            </a>            
            </div>
            
        }
        </div>
    )
}

export default UserDetails;