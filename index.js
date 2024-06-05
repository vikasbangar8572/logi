const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(express.json());

app.use(cors());
var user = [];

app.post("/test", (req, res) => {
  var id = req.body.id;
  var pass = req.body.pass;
  var dummy = {
    id: id,
    pass: pass,
  };
  user.push(dummy);
  console.log(user);
  res.json({ users: user });
});

app.post("/signup", (req, res) => {
  var id = req.body.id;
  var pass = req.body.pass;
  var name = req.body.name;
  var gmail = req.body.gmail;
  var phone = req.body.phone;
  var dummy = {
    id: id,
    pass: pass,
    name: name,
    gmail: gmail,
    phone: phone,
  };
  user.push(dummy);
  console.log(user);
  res.json({ users: user });
});

app.post("/login", (req, res) => {
  var id = req.body.id;
  var pass = req.body.pass;
  console.log({ id, pass });

  for (let i = 0; i < user.length; i++) {
    if (user[i].id == id)
      if (user[i].pass == pass) {
        res.json({
          message: `login successfull `,
          name: user[i].name,
          gmail: user[i].gmail,
          phone: user[i].phone,
        });
      } else {
        res.json({ message: "login fail" });
      }
  }

  res.json({ message: "user not found " });
});

app.post("/forgetpassword", (req, res) => {
  const id = req.body.id;
  const pass = req.body.pass;
  const newpass = req.body.newpass;

  for (let i = 0; i < user.length; i++) {
    if (user[i].id == id) {
      if (user[i].pass == pass) {
        user[i].pass = newpass;
        console.log(user);
        res.json({ message: "password changed" });
      } else {
        console.log({ message: "password not changed" });
        res.json({ message: "password not changed" });
      }
    }
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
