import React from "react";
function Home(){
    const handleClick=()=>{
          localStorage.clear();  
          window.location.reload();
    }
    return(
        <>
        <h1>Home page</h1>
        <button onClick={handleClick}>logout</button>
        </>

    )

}
export default Home;