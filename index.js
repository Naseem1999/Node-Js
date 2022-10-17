// var a=20;
// var b=30;
// var c=50;

// console.log(a+b+c);

// var x='20';
// if(x===20){
//     console.log("matched");
// }

// for(i=0;i<10;i++){
//     console.log(i);
// }
// import {x} from './app'

// const app=require('./app');

// const arr=[1,2,3,4,3,5]
// console.log(app.y);

// const arr=[1,2,3,1,2,3,7,8,8];
// let result=arr.filter((item)=>{
//    return item>3;
// });
// console.log(result);

//   global modules console.log("code step by step");

//non global module
// const fs=require('fs');
// fs.writeFileSync("hello.txt","code step by step");
// fs.writeFileSync("hello2.txt","My Name is Naseem");
// console.log(__dirname);

const http=require('http');

// http.createServer((req,resp)=>{
//     resp.write("<h1>My Name is Naseem</h1>");
//     resp.end();
// }).listen(4500);

function dataControl(req,resp){
    resp.write("<h1>My Name is waseem</h1>");
    resp.end();
}
http.createServer(dataControl).listen(4500);

