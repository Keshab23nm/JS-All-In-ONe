// array syntax and all aboute array 

/*let array=["ram","sam","jadu","madhu","keshab","hari"];
 console.log(array.length);
 array.pop();

 console.log(array);
 array.push("hellow");
  console.log(array);*/


let array=["ram","sam","jadu","madhu","keshab","hari"];



let a=prompt("how many times do you want pop");
a=parseInt(a);


  function kesh(){

         
    document.writeln(array+"<br>");
    array.pop()
    console.log(array);
  }

  for(let i=0;i<a;i++){
    kesh();
  }

let k=array.length;
document.writeln(k);

if(k==0){
    alert("the array is empty");
}
