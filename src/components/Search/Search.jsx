import { useState } from "react";

function Search({updateSearchTerm}){
    return(
        <div>
            <input type="text" placeholder="Enter User Name" onChange={ (e)=>updateSearchTerm(e.target.value)} />

        </div>
    )
}
export default Search;