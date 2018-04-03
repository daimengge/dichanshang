const express=require('express');

const mysql=require('mysql');

const static = require('express-static');

const app=express()

const pool=mysql.createPool({
    host:'localhost',   //主机名
    user:'root',        //用户名
    password:'root',  //密码
    database:'fdck',    //数据库名
    port:3307           //端口号
})
app.use('/',(req,res,next)=>{   
  res.setHeader('Access-Control-Allow-Origin','*')
 pool.getConnection((err,connection)=>{
        if(err) throw err;
  connection.query('SELECT * FROM fd LIMIT 3',(err,rows)=>{
         if (err) throw err;
            console.log(rows)
        res.send(rows);
        // res.end()
        connection.end();

  })
 })

})



app.listen(8000,()=>{
console.log('OK')
})

