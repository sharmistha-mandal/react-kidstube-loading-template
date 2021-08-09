const express = require("express");
const {videos,user} = require("./fakeData");
const app = express();
app.use(express.json());

app.get("/api/user/1", (req,res)=>{
    setTimeout(()=>{
        res.json(user);
    },3000);
});

app.get("/api/videos/1", (req,res)=>{
    setTimeout(()=>{
        res.json(videos);
    },5000);
});

app.listen(5000, () => {
  console.log("Backend server is running");
});
