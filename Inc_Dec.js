let num=0;
num=Number(num);
console.log(num,typeof num);
console.log(num);
document.getElementById("Inc").onclick=function(){
    console.log(num);
    num=num+1;
    document.getElementById("textBox").innerHTML=num;
}