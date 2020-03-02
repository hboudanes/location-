//why this function retunu value undefi
// function myFunction(){
//     var x = document.getElementById("myText").Value;
//    // document.getElementById("inputlogin").setAttribute('value',emails);  
   
//    document.getElementById("demo").innerHTML = x;
// } 
function myFunction() {
    var x = document.getElementById("myText").value;
  //  document.getElementById("demo").innerHTML = x;
    document.getElementById("inputlogin").setAttribute('value',x);
    return x ;
}
function inform(){
  var name = document.getElementById("myText").value;
  document.getElementById("username").innerHTML = 'Mr'+ ' ' + name ;
  var ag = document.getElementById("mage").value;
  document.getElementById("afd").innerHTML =  ag + ' Ans' ;
  var totall = document.getElementById("total").innerHTML;
  document.getElementById("prix").innerHTML = totall;
  var nbrp = document.getElementById("Person").value;
  document.getElementById("nbrp").innerHTML = 'numbre de person :'+ ' ' + nbrp ;
  var dure = document.getElementById("dure1").innerHTML;
  document.getElementById("dure").innerHTML = dure;
  var nbrd = Math.floor(Math.random() * 10000000000);
  document.getElementById("nbrd").innerHTML = "N : "+nbrd;
}
