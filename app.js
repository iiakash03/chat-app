const express=require('express');

const messageroute=require('./routes/message');
const loginroute=require('./routes/login');

const app=express();

const fs=require('fs');

app.use(loginroute);

app.use(messageroute);

app.listen(4000);



const parsedbody=require('body-parser');



