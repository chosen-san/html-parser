    /*
    
    alert("ta" + " " + "ralhayat" + " " + "machi" + " " + "sahla") 

  var rase ={first: "san",
            secound: "razor",
            thied:"ahmed",
            fourth:"sady"};
    var rase = {};
    rase.first = "san"
  alert(rase.first)
 var aa = 10, ss = 20;
  if(aa>=ss){
    alert("good");
  }
  else{
    alert("bad")
  }*/

                                                  //[&:and, |:or]

/*
var myName = "sady";

switch(myName){
         case "san":
         alert(1);
         break;
         case "razor":
         alert(2);
         break;
         case "sady":
         alert(3);
         break;
}

var a = 1;
while(a<=1000){
      document.getElementById("san").innerHTML += "number:" + " " + a +"<br/>";
      a++
}

for(var a = 0;a<=20; a++){
    document.getElementById("san").innerHTML += a + "<br/>";
}

var a = 200;
do{
  document.getElementById("san").innerHTML += a + "<br/>";
  a--;
}while(a>=0)  

function test(){
  var name1 = "mokhtar";
  if(name1 ){
    alert("hello " + name1);
  }
}

function names(number){
  alert(number);
}
names(25)



function test(salary){
        var x = 100;
        return salary + x;
}
var y = prompt("claculate age in days");
document.getElementById("san").innerHTML = test(y);






window.onload = function test(){
  document.getElementById("san").innerHTML = "welcome to my world"
}



window.onclick = function test(){
  document.getElementById("san").innerHTML = "welcome to my world"
}


window.ondblclick = function test(){
  document.getElementById("san").innerHTML = "welcome to my world"
}


 
var test = "ana wa3ar ",
    test2 = test.substr(4,5);
console.log(test2);
console.log(typeof (test2));



var test = "ana rany jay bjahd akhawti",
    test2 = test.trim();
alert(test2);



var test = Math.round(7.1)
console.log(test);

var test = Math.ceil(7.1)
console.log(test);


var test = Math.floor(7.1)
console.log(test);


var test = Math.min(7.1)               // (max :kadir l3aks)
console.log(test);                     // (random : katala3 ra9m 3achwa2i )
//                   var test = Math.random();
//                   console.log(Math.ceil(test * 5))



var test = new Date("jan 01 2002 00:00:");
console.log(test)
*/

function input(name1){
  var name1 = document.getElementById("textarea").value;
  document.getElementById("output").innerHTML = name1;
}