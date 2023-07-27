import { useState } from "react";

export default function Authenticate ({token}) {
  const [successMessage, setSuccessMessage] = useState(null);
  const[error, setError] = useState (null);
  
  async function handleClick(){
    try{
      const response = await fetch ('https://fullstackacademy.zoom.us/j/3901480787?pwd=VGpWWjBXcFpNMGRObmszRm5WZFhRZz09',
      {
      method: 'GET',
      headers: {'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`
      }
    })
   const data = await response.json()
   console.log(data)

    setSuccessMessage(`Hello, ${response.username}`)
  } catch (error) {
    setError(error.message);
  }
}
  return(
  <div>
  <h2>Authenticate!</h2>;

  {successMessage && <p>{successMessage}</p>}
  {error && <p>{error}</p>}
  <button onClick={handleClick}> Authenticate Token~</button>
  </div>
  )
  }
