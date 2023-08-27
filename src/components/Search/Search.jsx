import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import './Search.css'


function Search({updateSearchTerm}){
    const debouncedCallBack = useDebounce((e)=>{
        updateSearchTerm(e.target.value)
    })

    return(
        <div className="input-wrapper">
            <input type="text" placeholder="Enter User Name" onChange={debouncedCallBack} />
        </div>
    )
}
export default Search;