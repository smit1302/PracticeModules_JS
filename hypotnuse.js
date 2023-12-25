let a,b,c;
document.getElementById("submitButton").onclick=function(){
    a=parseInt(document.getElementById("aTextBox").value);
    b=parseInt(document.getElementById("bTextBox").value);
   // a=Number(a);
    //b=Number(b);
    console.log(a,typeof a);
    console.log(b,typeof b);
  //c=a+b;
      c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
console.log(c);
    document.getElementById("cLabel").innerHTML="Value of C is "+c.toString();
}