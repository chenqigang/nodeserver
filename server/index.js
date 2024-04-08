const express = require("express");
const { Client } = require('pg'); 
const  db  = require('./db'); 
const port = process.env.PORT || 3001;

const app = express();

app.get("/react/login", (req,res) => {
  let id = req.query.id;  
  let pw = req.query.pw;
  const client = db.dbconnect();
  client.query("SELECT * FROM public.user WHERE id='"+id+"' AND pw='"+pw+"'", (err, result) => {  
      if (err) {
        console.error('Error executing query:', err);  
        return;  
      }  
      console.log('Query results:', result.rows.length); 
      res.json({'count':result.rows.length}); 
      client.end();  
    });
  });
  
app.get("/react/api", (req,res) => {
const client = db.dbconnect();
client.query('SELECT * FROM public."user"', (err, result) => {  
    if (err) {  
      console.error('Error executing query:', err);  
      return;  
    }  
    console.log('Query results:', result.rows.length); 
    res.json(result.rows); 
    client.end();  
  });
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});