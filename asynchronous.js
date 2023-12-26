console.log("Start");
setTimeout(() => console.log("This will be displayed after 5 seconds"),5000);
console.log("End");

//Asynchronus function
const promise=new Promise((resolve,reject)=>{
let fileLoaded=true;
if(fileLoaded)
{
    resolve("File Loaded");
}
else
{
    reject("File Not Loaded");
}
});
promise.then(value => console.log(value))
.catch(error=>console.log(error));