import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import NavHeader from "./components/NavHeader";
import "./Login.css";
import LoginValidate from "./LoginValidation";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function Login() {
  const [theme, setTheme] = useState("light");

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(LoginValidate(values));
    axios
      .post("http://localhost:8081/login", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/");
        } else {
          alert(res.data.Message);
          console.log(res.data.Message);
        }
      })
      .catch((err) => console.log(err));
  };

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 "
      style={{
        // background:
        //   "linear-gradient(90.83deg, rgba(185, 152, 255, 0.5) 22%, rgba(15, 134, 255, 0.155) 95.02%)",
        background: "#c5c9c5",
        // width:"28% !important"
      }}
    >
      <NavHeader />

      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="bg-white p-3 rounded darkmodeDiv" id={theme}>
          <div className="loginMainCont">
            <div className="loginHead">
              <h1 style={{ textAlign: "center" }}>Login</h1>
            </div>
            <div className="switcherDiv">
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="email__label">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                className="form-control email__input__text"
                onChange={handleInput}
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="password__label">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                className="form-control password__input_text"
                onChange={handleInput}
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>
            <button type="submit" className="btn  w-100 login__button">
              Login
            </button>
            <p style={{ textAlign: "center", lineHeight: "3" }}></p>

            {/* <Link to="/signup">
              <button
                className="btn btn-default border w-100  text-decoration-none"
                style={{
                  background:
                    "linear-gradient(91.56deg, #B998FF 0%, #A2CFFF 104.01%)",
                  height: "48px",
                  marginTop: "20px",
                  borderRadius: "30px",
                }}
              >
                Create Account
              </button>{" "}
            </Link> */}
          </form>

          <h5 style={{ textAlign: "center", lineHeight: "3" }}>
            Not a member?{" "}
            <a href="/signup">
              <span style={{ color: "#B998FF" }}> SignUp</span>
            </a>
          </h5>
        </div>
        {/* <div className="switcherDiv">
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div> */}
      </ThemeContext.Provider>
    </div>
  );
}

export default Login;
