function checkloveper(){

  var name = document.getElementById("name").value;
  var lname = document.getElementById("lname").value;

  if(name == ""){
   alert("Bitte gib einen Namen ein");
  }else if (name.length <=2 ) {
   alert("mindestens drei Buchstaben")
  }else if(!isNaN(name)){
   alert("Nummern sind nicht erlaubt");
  }

  else if(lname == ""){
   alert("Bitte gib auch einen Namen zum berechnen an");
  }else if (lname.length <=2 ) {
   alert("mindestens drei Buchstaben")
  }else if(!isNaN(lname)){
   alert("Nummern sind nicht erlaubt");
  }
  else{
  var lovdata = Math.random() * 100;
  lovdata = Math.floor(lovdata);
  document.getElementById("lovevalue").value = lovdata + "%"; 
  }
  
 }
