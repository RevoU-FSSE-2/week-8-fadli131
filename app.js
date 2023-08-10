const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = 3001;

app.get("/", (req, res) => {
    res.send("Halo Semuanya");
});

app.listen(port, () =>{
    console.log(`server listen ${port}`);
});
