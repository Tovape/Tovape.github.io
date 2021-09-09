// Resposnive Nav

function menudropper() {
  var menu = document.getElementById("menudropper");
  if (menu.className === "menutext hoverable") {
    menu.className += " responsive";
  } else {
    menu.className = "menutext hoverable";
  }
}

// Top Button

var mybutton = document.getElementById("topid");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*

Translations:

Benvinguts a la meva web portafoli!<br>
M'agrada crear pàgines web, tant com sigui la part visual Frontend com la Backend, sempre hi ha coses per descobrir i explorar.<br>
També comparteixo el hobby de diseny 3D<br>
Aqui trobaràs tota la informació que necessitis<br>


Programador Web


*/