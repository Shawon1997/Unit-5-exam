import { useState,useEffect } from "react";
import { useParams,Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import  "./Navbar.css"
export const EmployeeList = () => {
  const [show,setshow]=useState([])
const {id}=useParams()
  const employee=async()=>{
try {
  let res=await fetch(" http://localhost:8080/employee")
  res=await res.json()
  setshow(res)
  console.log(res)
} catch (err) {
  console.log(err)
}
  }
  useEffect(()=>{
    employee()
  },[])
    return (
      <div className="list_container">
        {/* On clicking this card anywhere, user goes to user details */}
        <div className="employee_card">
        {show.map((e)=>(
          <Link to={`/employee/${id}`}>
          <img className="employee_image" src={e.image} />
          </Link>
      
        ))}
        
        
          <span className="employee_title"></span>
        </div>
        {show.map((el)=>(
          <span className="employee_name">Employee_Name:{el.employee_name}</span>
        ))}
        {/*<h2>dkjuhs</h2>*/}
      </div>
    );
  };