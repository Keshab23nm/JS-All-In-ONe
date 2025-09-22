let obj={id : 2002, name : "keshab"};

sessionStorage.setItem("object", JSON.stringify(obj));


let storedObj = JSON.parse(sessionStorage.getItem("object"));
console.log(storedObj);