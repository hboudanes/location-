// function test(){
//     var entredate = "shdjdkj"; // input docume
//         var y = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
//         var x = y.test(entredate); //regulaire ex.test(inputde date); 
//         document.getElementById("dd").innerHTML = x;
//        re
//       };
function nothing(){
    
    var userin = document.getElementById("myText").value;
    var mot1 = document.getElementById("myText1").value;
    var mot2 = document.getElementById("myText2").value;
    var mot3 = document.getElementById("mot1").value;
    var mage = document.getElementById("mage").value;
    l=mage.length;
    
    if(userin == "" || mage == "" || mot1 == "" || mot2 == ""){
        alert("Veuillez remplir tous les champs obligatoires");
    }
    if(userin.length<4){
        alert("Le nom d'utilisateur invalide ");
    }
    if( mage < 18){
         alert("votre âge est inférieure à nous condution");
     }
    if(mot1.length < 9 ){
        alert("Le mot de passe invalide ");
    }
    if( mot1 !== mot2){
        alert("saise la meme mot de passe");
    }
}