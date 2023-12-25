document.getElementById("submitButton").onclick = function () {
  let temp;
  temp = document.getElementById("textBox").value;
  if (document.getElementById("celsBtn").checked) {
    console.log(typeof(temp));
    temp = Number(temp);
    temp = toCelsius(temp);
    document.getElementById("tempLabel").innerHTML = temp + "C";
  } else if (document.getElementById("farenBtn").checked) {
    temp = Number(temp);
    temp = toFarenheit(temp);
    document.getElementById("tempLabel").innerHTML = temp + "F";
  } else {
    document.getElementById("tempLabel").innerHTML = "Select a unit";
  }
};

//temp=toFarenheit(temp);
//console.log(temp);
function toCelsius(temp) {
  return (temp - 32) * (5 / 9);
}
function toFarenheit(temp) {
  return (temp * 9) / 5 + 32;
}
