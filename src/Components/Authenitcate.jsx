import { useState } from "react";

export default function Authenticate ({token}) {
  const [successMessage, setSuccessMessage] = useState(null);
  const[error, setError] = useState (null);
  
  async function handleClick(){
   
   
    try{
      const response = await fetch ('https://fsa-jwt-practice.herokuapp.com/authenticate',
      {
      method: 'GET',
      headers: {'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`
      }
    })
   const responseData = await response.json()
   console.log(responseData)
    if (responseData.data.username.length > 2 && responseData.data.username.length < 11) {
    
      setSuccessMessage(`Hello, ${responseData.data.username}`)
      return
    }
    if (responseData.data.username.length <= 2) {
      alert ('Username must be greater than 2 letters.')
      return 
    }
    if (responseData.data.username.length == 0) {
      alert ('Username cannot be empty.')
      return 
    }
    if (responseData.data.username.length == 0) {
      alert ('Username cannot be empty.')
      return 
    }
    if (responseData.data.username.length > 10) {
      alert ('Username is cannot exceed 10 characters.')
      return 
    }
    
  } catch (error) {
    setError(error.message);
    }
  }
  

  return <>
  
  <h2 className="Authenticate">Authenticate!</h2>

  {/* { (successMessage) ? <p> {successMessage} </p> : <></>} */}

  {successMessage && <p>{successMessage}</p>}
  {error && <p>{error}</p>}
  <button onClick={handleClick}> Authenticate Token~</button>
  </>
  
  }
