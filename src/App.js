import React, { useRef } from 'react';
//import { useState } from 'react';
import './App.css';
import './login.css';
import Home from'./Home';


function App() {
      const email= useRef();
      const password=useRef();
      const getEmail=localStorage.getItem('emailData')
      const getPassword=localStorage.getItem('passwordData')
      const handleSumbit=()=>{
        if(email.current.value==="abc@gmail.com"&&password.current.value==="12345"){
          localStorage.setItem('emailData','abc@gmail.com')
          localStorage.setItem('passwordData','12345')
        }
      }
      //const [count, setCount] = useState(0);

  return (  
    <div className='align'>{
        getEmail&&getPassword?
        <Home/>:
        <form onSubmit={handleSumbit}>
          <div>
            <input name='Email' placeholder='Email' type="text" ref={email}/>
          </div>
          <div>
            <input name='Password' placeholder='Password' type="text" ref={password}/>
          </div>
          <button>login
          </button>
        </form>
}
    </div>
    
  );
}

export default App;
