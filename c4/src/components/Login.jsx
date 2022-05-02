import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AutoContext } from "../context/AuthContext";

export const Login = () => {
  const { handleAuth } = useContext(AutoContext);
  const [log, setlog] = useState("");
  const [log1, setlog1] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={(e) => {
          setlog(e.target.value);
        
        }}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter your password"
        onChange={(e) => {
 
          setlog1(e.target.value);
        }}
      />
    
      <button
        className="submit"
        onClick={() => {
          if (log == "admin" && log1 == 1234) {
            handleAuth(true);
            navigate("/orders",{ replace: true });
          }
          else{
            navigate("/neworder",{ replace: true });
          }
        }}
      >
        Login
      </button>
    </div>
  );
};
