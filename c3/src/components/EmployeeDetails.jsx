import { useParams,Navigate } from "react-router-dom";
import { useState,useEffect,useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export const EmployeeDetails = () => {
const {id}=useParams()
const [details,setdetails]=useState([])
const {isAuth}=useContext(AuthContext)
console.log(id)
if(!isAuth)
{
  return <Navigate to={"/login"}></Navigate>
}

const employee=async()=>{
  try {
    let res=await fetch(`http://localhost:8080/employee/${id}`)
    res=await res.json()
    setdetails(res)
    console.log(res)

  } catch (err) {
    console.log(err)
  }
    }
    useEffect(()=>{
      employee()
    },[])
  return (
    <div className="user_details">
     {
       
        details.map((e)=>(
          <img className="user_image" src={details.image} />
        ))
       
     }
    
      <h4 className="user_name"></h4>
      <span className="user_salary">$</span>
      <span className="tasks">
        <li className="task"></li>
      </span>
      Status: <b className="status"></b>
      Title: <b className="title"></b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};