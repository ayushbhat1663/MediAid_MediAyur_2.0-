
// Node.js Mock Backend
const express = require('express');
const app = express();
app.get('/api/status',(req,res)=>{
  res.json({status:"Server running"});
});
app.listen(3000,()=>console.log("Backend running"));
