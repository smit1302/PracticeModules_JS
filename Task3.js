var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function myFunction(myString, inputArray, array1, array2, filteredArray) {
    //1st Function
    var add = 6;
    var add1 = 7;
    var add2 = 0;
    array1.push(add); //Using Push
    console.log("Output1: ", array1);
    var output = __spreadArray(__spreadArray([], array1, true), [add], false);
    console.log("Output2: ", output);
    var output_con = array1.concat(add1);
    console.log("Output3: ", output_con);
    array1.unshift(add2);
    console.log("Output4: ", array1);
    //Reversal of String
    var reverseString = '';
    for (var i = myString[0].length - 1; i >= 0; i--) {
        reverseString = reverseString + myString[0][i];
    }
    console.log("Reversed String: ", reverseString);
    //Find Maximum and minimum elements of an array
    var largest = Math.max.apply(Math, inputArray);
    var smallest = Math.min.apply(Math, inputArray);
    console.log("Maximum: ", largest);
    console.log("Minimum: ", smallest);
    //Find Duplicate Elements of an array1 and array2
    var duplicateArray = [];
    for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
        var a = array1_1[_i];
        for (var _a = 0, array2_1 = array2; _a < array2_1.length; _a++) {
            var b = array2_1[_a];
            if (a === b) {
                duplicateArray.push(a);
                break;
            }
        }
    }
    console.log("Common elements ", duplicateArray);
    //Object filtering
    var filterOutput = filteredArray.filter(function (obj) { return obj.price < 1000; });
    console.log("Filtered Categories ", filterOutput);
}
var myString = ["Hello, TypeScript!"];
var myArray = [5, 12, 7, 2, 8, 15, 3];
var Array1 = [1, 2, 3, 4, 5];
var Array2 = [3, 4, 5, 6, 7];
var filteredArray = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];
myFunction(myString, myArray, Array1, Array2, filteredArray);
