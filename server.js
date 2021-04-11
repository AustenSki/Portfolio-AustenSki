//Server variables
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
const staticdir = process.env.DEV ? "./app/public":"./app/build"

app.use(express.static(path.resolve(staticdir)));
//Starts the Home page
app.get("*", (req, res) => {
  res.sendFile(path.resolve("./app/build/index.html"));
});

//Allowing the addition port 5000 or original 3000
app.listen(port, () => console.log(`Example app listening on port: ${port}!`));
