
function myFunction(myString: string[],inputArray: number[], array1: number[], array2: number[],filteredArray:{name: string,price:number}[]): void{
  //1st Function
  let add: number=6;
  let add1: number=7;
  let add2: number=0;

  array1.push(add); //Using Push
  console.log("Output1: ",array1);
  const output: number[]=[...array1,add];
  console.log("Output2: ",output);
  const output_con: number[]=array1.concat(add1);
  console.log("Output3: ",output_con);
  array1.unshift(add2);
  console.log("Output4: ",array1);
  
    //Reversal of String
   let reverseString='';
   for(let i=myString[0].length-1;i>=0;i--)
   {
        reverseString=reverseString+myString[0][i];
   }
   console.log("Reversed String: ",reverseString)
   
    //Find Maximum and minimum elements of an array
    const largest=Math.max(...inputArray);
    const smallest=Math.min(...inputArray);
    console.log("Maximum: ",largest);
    console.log("Minimum: ",smallest);

    //Find Duplicate Elements of an array1 and array2
    const duplicateArray: number[]=[];
    for(const a of array1)
    {
        for(const b of array2)
        {
            if(a===b){
            duplicateArray.push(a);
        break;}
        }
    }
    console.log("Common elements ",duplicateArray)
    
//Object filtering
const filterOutput=filteredArray.filter(obj=> obj.price<1000);
console.log("Filtered Categories ",filterOutput);
}
const myString: string[]=["Hello, TypeScript!"]
const myArray: number[] = [5, 12, 7, 2, 8, 15, 3];
const Array1: number[] =[1,2,3,4,5];
const Array2: number[]=[3,4,5,6,7];
const filteredArray: {name: string, price: number}[]=[
    {name: "Laptop", price: 1000},
    {name: "Phone", price: 500},
    {name: "Tablet", price: 300}

];
myFunction(myString,myArray,Array1,Array2,filteredArray);