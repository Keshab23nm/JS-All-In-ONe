

let photo=["task001.png","tansedd-2.png","KKKK22.png"];

console.log(photo.length);
let kes=document.getElementById("images");

let count=0;
function next(){
    count++;
if(count>=photo.length)
{
    console.log(count);
    count=0;
   kes.src=photo[count];
}
else{
    kes.src=photo[count];
}

}




function prev(){
count--;
if(count<0)
{
    count=photo.length-1;
    kes.src=photo[count];
}
else{
    kes.src=photo[count];
}
}