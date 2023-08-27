function useDebounce(cb,delay=2000){
    let timerID;
    return (...args) =>{
        console.log('abc',...args);
        clearTimeout(timerID);
        timerID = setTimeout(()=>{
            cb(...args)
        },delay)
    }
}

export default useDebounce;