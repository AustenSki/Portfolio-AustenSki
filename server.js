//Server variables
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
const public = path.resolve("./public");

app.use(express.static("./client/public"));
//Starts the Home page
app.get("/", (req, res) => {
  res.sendFile(public + "/index.html");
});

//Allowing the addition port 5000 or original 3000
app.listen(port, () => console.log(`Example app listening on port: ${port}!`));
