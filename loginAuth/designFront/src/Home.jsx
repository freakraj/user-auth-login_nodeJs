import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Navbar } from "./components/Navbar";
import NavHeader from "./components/NavHeader";
import "./Home.css";
// import Annotation from "./components/Annotation";
// import Extraction from "./components/Extraction";
// import Classification from "./components/Classification";
// import ImageUpload from "./ImageUpload";
import { SliderHomeComp } from "./components/SliderHomeComp";
import { AboutCompanyHome } from "./components/AboutCompanyHome";


function Home() {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get("http://localhost:8081").then((res) => {
      if (res.data.Status === "Success") {
        setAuth(true);
        setName(res.data.name);
      } else {
        setAuth(false);
        setMessage(res.data.Message);
      }
    });
  }, []);

  const handleLogout = () => {
    axios
      .get("http://localhost:8081/logout")
      .then((res) => {
        if (res.data.Status === "Success") {
          location.reload(true);
        } else {
          alert("error");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="home-main">
      <div className="nav-cont">
        <NavHeader />
      </div>

      <div className="container-fluid mt-6">
        {auth ? (
          <div style={{ marginTop: "5rem" }}>
            <div className="logoutMain">
              <div className="welComeMsg" style={{ marginLeft: "9.1%" }}>
                {/* <marquee> */}
                <h3
                  style={{
                    textAlign: "center",
                    fontFamily: "sans-serif",
                    fontWeight: "600",
                  }}
                >
                  Hi... {name} Welcome to CodeHub
                </h3>
                {/* </marquee> */}
              </div>
              <div className="logoutBtn">
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
            <SliderHomeComp />
          </div>
        ) : (
          <div>
            <div className="loginMain" style={{ marginTop: "5rem" }}>
              <h3 style={{ textAlign: "center" }}>{message}</h3>
            </div>
            <AboutCompanyHome />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
