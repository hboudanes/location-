// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//slide header 
var i=0;
function silde(){
var img = ["img/img1.jpg", "img/img2.jpg" , "img/img3.jpg" ,"img/texture.jpg"] ;
    if (i<4) {
        i++;
    } 
    if (i===4){
        i=0;
    }
    //pour titre
    if(i!==0){
      document.getElementById("text").style.display = "none";
    }else{
      document.getElementById("text").style.display = "block";
    }
    document.getElementById('her').style.backgroundImage = 'url("'+img[i]+'")';//"'+nom de varible+'"
}
function sildem(){
    var img = ["img/img1.jpg", "img/img2.jpg" , "img/img3.jpg" ,"img/img4.jpg"] ;
        if (i<4) {
            i--;
        } 
        if (i===-1){
            i=3;
        }
        if(i!==0){
          document.getElementById("text").style.display = "none";
        }else{
          document.getElementById("text").style.display = "block";
        }
        document.getElementById('her').style.backgroundImage = 'url("'+img[i]+'")';
}
/////////////////////////////////////////////
// Get the modalsn
var modalsn = document.getElementById('idsn');

// When the user clicks anywhere outside of the modalsn, close it
window.onclick = function(event) {
  if (event.target == modalsn) {
    modalsn.style.display = "none";
  }
}
// Get the modallg
var modallg = document.getElementById('idlg');

// When the user clicks anywhere outside of the modalsn, close it
window.onclick = function(event1) {
  if (event1.target == modallg) {
    modallg.style.display = "none";
  }
}
var j=0;
function dis(){ //reservation 
  if(j===0){
    document.getElementById("cont").style.display = "none";
    document.getElementById("resv").style.display = "flex";
    document.getElementById("chekk").style.display = "none";
   document.body.style.backgroundImage  = "url('img/back.jpg')";
    j++;
  }else{
    document.getElementById("cont").style.display = "flex";
    document.getElementById("resv").style.display = "none";
    document.getElementById("chekk").style.display = "none";
   document.body.style.backgroundImage  = "url('img/back.jpg')";
    j=0;
  }
}
function dis1(){ //home
    document.getElementById("cont").style.display = "flex";
    document.getElementById("resv").style.display = "none";
    document.getElementById("chekk").style.display = "none";
    document.body.style.backgroundImage  = "url('img/back.jpg')";
    j=0;
}
function chek(){ // btn locatin maint
  document.getElementById("chekk").style.display = "block";
  document.getElementById("resv").style.display = "none";
  document.body.style.backgroundImage = "none" ;
  j=0;
}
function logtosin(){
  document.getElementById("idlg").style.display = "none";
  document.getElementById("idsn").style.display = "block";
}
function jour(){
  document.getElementById("sle1").style.display = "block";
  document.getElementById("sle").style.display = "none";
}
function moin(){
  document.getElementById("sle1").style.display = "none";
  document.getElementById("sle").style.display = "block";
}
function totalM(){
  var mm = document.getElementById("moins").value;
  document.getElementById("total").innerHTML= 'totale: ' + mm*200  + '€' ;
  document.getElementById("dure1").innerHTML= 'du duré : ' + mm + "mois"  ;
}
function totalj(){
var jj = document.getElementById("jour").value;
document.getElementById("total").innerHTML= 'totale: ' + jj*20  + '€' ;
document.getElementById("dure1").innerHTML= 'du duré : ' + jj + "jours"  ;
}