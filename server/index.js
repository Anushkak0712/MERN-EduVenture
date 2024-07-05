const express = require("express");
const path = require("path");
const cors=require('cors');
const app = express();
const publicPath = path.join(__dirname, "..", "client/public");
app.use(cors());
app.use(express.static(publicPath));
app.get("/*", function (req, res) {
res.json({message:"this is from backend"})
//res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(process.env.PORT || 7070);