const express = require("express");
const mysql = require("mysql2"); 
const path = require("path"); 

const app = express(); 


app.use(express.json());


app.use(express.static(path.join(__dirname, "public")));


const db = mysql.createConnection({
  host: "localhost", 
  user: "root", 
  password: "", 
  database: "MK_Competition", 
});
//-------------------------------------------------------------> GET <---------------------------------------------------------
app.get("/characters", (req, res) => {
  db.query("SELECT * FROM characters", (err, results) => {
    if (err) throw err
    res.json(results);
  })
})
//-------------------------------------------------------------> POST <--------------------------------------------------------
app.post("/characters",(req, res) =>{
  const {create_name, create_type, create_attack} = req.body
  db.query(
    "INSERT INTO characters (character_name, character_type, attack) VALUES (?,?,?)",
  [create_name, create_type, create_attack],
  (err,result) => {
    if (err) throw err;
    res.json({message: "Character added sucessfully"})
  })
})

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000/mkc_title.html http://localhost:3000/mkc.html http://localhost:3000/create_character.html")
)