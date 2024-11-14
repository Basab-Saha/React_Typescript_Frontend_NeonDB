import React from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {

  const navigate=useNavigate()

  //Navigate to login.tsx
  const goToLogin=()=>{
    navigate('/login')
  }

   //Navigate to sign-up.tsx
   const goToSignup=()=>{
    navigate('/signup')
  }

  return (
    <div >
      <h1>Welcome to our App</h1>
      <button onClick={goToLogin} >Login</button>
      <button onClick={goToSignup}>Sign Up</button>
    </div>
  );
}

export default Home;
