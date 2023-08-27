import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";

function Search({updateSearchTerm}){
    const debouncedCallBack = useDebounce((e)=>{
        updateSearchTerm(e.target.value)
    })

    return(
        <div>
            <input type="text" placeholder="Enter User Name" onChange={debouncedCallBack} />
        </div>
    )
}
export default Search;