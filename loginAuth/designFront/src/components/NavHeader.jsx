import "./NavHeader.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaUser } from 'react-icons/fa';

function NavHeader() {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8081").then((res) => {
      if (res.data.Status === "Success") {
        setAuth(true);
        setName(res.data.name);
      } else {
        setAuth(false);
        // setMessage(res.data.Message);
      }
    });
  }, []);

  return (
    <div
      className="header"
      style={{ justifyContent: "space-between", padding: "0px 30px" }}
    >
      <div className="header__left">
        <img
          className="logo"
          src="https://cdn.pixabay.com/photo/2016/12/28/08/15/hummingbird-1935665_640.png"
          alt=""
        />
        <Link to="/" style={{textDecoration:"none",width:"100%",color:"#fff"}}>
          <h2 style={{fontSize:"26px",marginTop:"8px"}}>Raj Gautam</h2>
        </Link>
      </div>
      {auth ? (
        <>
          <div className="userProfileMain">
            <div className="profileImg">
            <FaUser 
            style={{width:"30px",height:"30px",margin:"6px"}}
            
            />
            </div>
            <div className="userName">
              <h5
                style={{
                  color: "#fff",
                  marginRight: "200px",
                  marginTop: "6px",
                }}
              >
                Hi,{name}
              </h5>
            </div>
          </div>
        </>
      ) : (
        <div className="header__right" style={{ columnGap: "20px" }}>
          <Link to="/signup" className="signup__link">
            SignUp
          </Link>
          <Link to="/login" className="login__link">
            Login Now
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavHeader;
