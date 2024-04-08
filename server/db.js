const { Client } = require('pg'); 

exports.dbconnect =function()  {
  const client = new Client({  
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123456', 
    database: 'postgres',  
  });  

  client.connect(err => {  
    if (err) {  
      console.error('Error connecting to PostgreSQL:', err);  
      return;  
    }  
    console.log('Connected to PostgreSQL successfully!');  
  });
  return client;
};

