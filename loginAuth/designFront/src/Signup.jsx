// import { Link } from "react-router-dom";
import { useState, createContext } from "react";
import axios from "axios";
import NavHeader from "./components/NavHeader";
import "./Signup.css";
import SignupValidate from "./SignupValidation";
import ReactSwitch from "react-switch";

import { ToastContainer, toast } from "react-toastify";

export const ThemeContext = createContext(null);

function Signup() {
  const [theme, setTheme] = useState("light");

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // const navigate = useNavigate();

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = SignupValidate(values);

    if (Object.values(validationErrors).every((error) => error === "")) {
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => {
          console.log("hello gautam", res);

          toast("Your Account is Successfully Created...");
          // navigate("/login");
          if (res.status === 200) {
            setValues({
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            });
            setErrors({});
          }
        })
        .catch((err) => console.log(err));
    } else {
      // If there are validation errors, set the errors in the state
      setErrors(validationErrors);
    }
  };

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background:
          "linear-gradient(90.83deg, rgba(185, 152, 255, 0.5) 22%, rgba(15, 134, 255, 0.155) 95.02%)",
      }}
    >
      <NavHeader />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="bg-white p-3 rounded darkmodeDivSignup" id={theme}>
          <h1 style={{ textAlign: "center" }}>Sign up</h1>
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
              <label htmlFor="name" className="name__label">
                <strong>Name</strong>
              </label>
              <input
                type="name"
                placeholder="Enter Name"
                name="name"
                className="form-control name__input__text"
                onChange={handleInput}
                value={values.name}
              />
              {errors.name && (
                <span className="text-danger">{errors.name}</span>
              )}
            </div>
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
                value={values.email}
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
                value={values.password}
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>

            <div className="mb-3">
              <label
                htmlFor="confirm-password"
                className="confirm-password__label"
              >
                <strong>Confirm Password</strong>
              </label>
              <input
                type="Password"
                placeholder="Enter Confirm Password"
                name="confirmPassword"
                className="form-control confirm-password__input_text"
                onChange={handleInput}
                value={values.confirmPassword}
              />
              {errors.confirmPassword && (
                <span className="text-danger">{errors.confirmPassword}</span>
              )}
            </div>

            <button type="submit" className="btn  w-100 login__button">
              SignUp
            </button>
          </form>
          <h5 style={{ textAlign: "center", lineHeight: "3" }}>
            Already have an account?{" "}
            <a href="/login">
              <span style={{ color: "#B998FF" }}>Log in</span>
            </a>
          </h5>
        </div>
        {/* <div className="switcherDivSignup">
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div> */}
      </ThemeContext.Provider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Signup;
