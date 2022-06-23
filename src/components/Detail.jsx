import React from "react"
import { useLocation } from "react-router-dom"
  
const Detail = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div>
      <h1>oke</h1>
    </div>
  );
};
  
export default Detail;