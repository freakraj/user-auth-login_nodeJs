import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
// import bcrypt from 'bcrypt';
// const salt = 10;

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Message: "we need token please provide it." });
  } else {
    jwt.verify(token, "our-jsonwebtoken-secret-key", (err, decoded) => {
      if (err) {
        return res.json({ Message: "Authentication Error" });
      } else {
        req.name = decoded.name;
        next();
      }
    });
  }
};

app.get("/", verifyUser, (req, res) => {
  return res.json({ Status: "Success", name: req.name });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE email = ? and password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json({ Message: "server side error" });
    if (data.length > 0) {
      const name = data[0].name;
      console.log("hello gautam", name);
      const token = jwt.sign({ name }, "our-jsonwebtoken-secret-key", {
        expiresIn: "1d",
      });
      res.cookie("token", token);
      return res.json({ Status: "Success" });
    } else {
      return res.json({ Message: "No Record Existed" });
    }
  });
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
});

app.post("/signup", (req, res) => {
  const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, [values], (err, result) => {
    if (err) {
      return res.json({ Message: "Inserting data Error in server" });
    }
    return res.json({Success:"Success"});
  });
});

// app.post("/signup", (req, res) => {
//   const sql = "INSERT INTO usersdata(`name`,`email`,`password`) VALUES (?)";
//   bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
//     if(err) return res.json({Error:"Error for hashing password"});
//     const values = [
//       req.body.name,
//       req.body.email,
//       hash
//     ]
//     db.query(sql, [values], (err, result) => {
//       if (err) {
//         return res.json({ Error: "Inserting data Error in server" });
//       }
//       return res.json({Success:"Success"});
//     });
//   })
// });

app.listen(8081, () => {
  console.log("Running ...");
});
