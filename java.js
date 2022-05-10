function  verif() 
{
    var ccode = document.getElementById('cardcode').value;
    var mon = document.getElementById('Month').value;
    var yer = document.getElementById('Year').value;
    var cav = document.getElementById('CVC').value;
    if( ccode.length<19 ||  mon.length<2 || yer.length<4 || cav.length<3)
    {
        alert("Данные введены неполностью");
    }
    else  document.location='pageSMS.html';
}

const mysql = require('mysql2');
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "numbercard",
  password: ""
});
 
const sql = `SELECT * FROM allcards`;
 
connection.query(sql, function(err, results) {
    if(err) console.log(err);
    console.log(results);
    for(let i=0; i < users.length; i++){
        console.log(allcards[i].ID);
      }
});
 
connection.end();