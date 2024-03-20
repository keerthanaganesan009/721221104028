const express=require("express");
const route=require("./routing");

const app=express();
app.use(express.json());

app.get("/numbers",route.number);
app.get("/e",route.even);
app.get("/numbers/primes",route.primes);
app.get("/numbers/fibo",route.fibonacci);
app.get("/numbers/rand",route.random)

app.listen(4000,()=>{
    console.log("Server Started");
});

