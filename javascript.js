// Expand

function expand() {
  var content = document.getElementById("content-wrap");
  var closer = document.getElementById("closer");
  var submenu = document.getElementById("submenu");
  
  if (content.className === "content-wrap") {
	content.className += " opened";
	content.className += " open";
	closer.className += " show-animation";
	setTimeout(() => {  
		closer.className += " show";
	}, 1000);
	
	submenu.className += " submenu-padding";
  }
}

// Close

function closer() {
  var content = document.getElementById("content-wrap");
  var closer = document.getElementById("closer");
  var submenu = document.getElementById("submenu");
  
  if (content.className === "content-wrap opened open") {
	setTimeout(() => {
	closer.className = "selector hidden";
	closer.className += " hidder-animation";
	closer.classList.remove("show-animation");
   	content.className += " close";
	submenu.className = "sub-menu";
	setTimeout(() => {
		content.className = "content-wrap";
	}, 1000);
	}, 400);
  } 
}

// Top Button

function toptrigger() {
	var topid1 = document.getElementById("topid1");
	var topid2 = document.getElementById("topid2");
	var topid3 = document.getElementById("topid3");
	var topid4 = document.getElementById("topid4");
	var topid5 = document.getElementById("topid5");
	var topid6 = document.getElementById("topid6");

	var topcontent = document.getElementById("content");

	if (topcontent.scrollTop > 5 || topcontent.scrollTop < 0) {
		topid1.className = "top top-visible";
		topid2.className = "top top-visible";
		topid3.className = "top top-visible";
		topid4.className = "top top-visible";
		topid5.className = "top top-visible";
		topid6.className = "top top-visible";
	} else {
		topid1.className = "top";
		topid2.className = "top";
		topid3.className = "top";
		topid4.className = "top";
		topid5.className = "top";
		topid6.className = "top";
	}
};

function topFunction() {
	var topcontent = document.getElementById("content");
	topcontent.scrollTop = 0;
}

// Language + Cookies

var arrLang = {
	
  'en': {
	  
	// Left
	
	'freelancer': 'Web/3D Freelancer',
	'webdeveloper': 'Web Developer',
	'3dmodeling': '3D Modeling',
	'softhardware': 'Software/Hardware Helpdesk',
	'introduction-text1': 	`Hi, Welcome to my portafolio webpage!`,
	'introduction-text2': 	`I like making webpages, whether it is Frontend or Backend, there's always something new to learn and a new skill to improve.`,
	'introduction-text3': 	`I also love 3d modeling and texture making`,
	'introduction-text4': 	`I've been interested in computer science from young, the way such complexity worked fascinated me, I still have to discover so much more since there are a lot of layers in the world of computer science.`,
	'introduction-text5': 	`I started learning programming in HTML, CSS and Javascript, I found them like the best way to start learning and getting my career in order.`,
	'introduction-text6': 	`In 2020, during the covid pandemic I started 3D Modeling as a hobbie and it changed my life, I used to procrastinate a lot and Blender changed it, I loved the way progress was made by joining vertices and it remarked my life. I'm currently making websites for small business for free in order to grow my portafolio and gain knowledge.`,
	'introduction-text7': 	`I like to think life is an athletic track, and we must run on our lane, there might be obstacles through it, or terrain malformations but each step counts.`,
	'introduction-text8': 	`???Jump back and get back a little more ???`,
	'introduction-text9':	`--The Qemists`,
	
	// Right

	'introduction': 'Introduction',
	'skills': 'Skills',
	'work': 'Work',
	'contact': 'Contact',
	'powered': 'Powered By',
	
	//Content
	
	'webdevelopment': 'Coding Skills',
	'2d3ddesigner': '2D/3D Designer',
	'general': 'General',
	'helpdesk': 'Helpdesk',
	'contact-text1': 'You can contact me from those options',
	'contact-text2': 'And also download my resume here',
	
	// Language
	
	'english': 'English',
	'spanish': 'Spanish',
	'catalan': 'Catalan',
	'language': 'Language'
	
	},
  
  'es': {
	  	  
	// Left
	
	'freelancer': 'Web/3D Freelancer',
	'webdeveloper': 'Desarollador Web',
	'3dmodeling': 'Modelador 3D',
	'softhardware': 'Resoluciones Software/Hardware',
	
	'introduction-text1': 	`Hola, bienvenidos a mi p??gina web portafolio!`,
	'introduction-text2': 	`Me gusta hacer p??ginas web, ya sea la parte de frontend como la de backend, siempre hay algo nuevo por aprender y una habilidad nueva para mejorar.`,
	'introduction-text3': 	`Tambi??n me gusta el modelaje 3D y texturizado.`,
	'introduction-text4': 	`Empez?? a interesarme en la inform??tica desde joven, la forma en que los ordenadores funcionaban me fascinaba, todav??a me falta aprender mucho ya que hay muchas capas en el mundo de las Ciencias de la Computaci??n`,
	'introduction-text5': 	`Empez?? aprendiendo programaci??n gracias al lenguaje de HTML, CSS y Javascript, fue el mejor camino para empezar a construir una carrera professional.`,
	'introduction-text6': 	`En 2020 durante la pandemia del Covid, empez?? a modelar en 3d como hobby y me cambi?? la vida, Sol??a procrastinar mucho y Blender lo cambi??, me encant?? la forma en la que se ve??a el progreso a trav??s del tiempo, de v??rtice a v??rtice, remarc?? mi vida. Actualmente estoy creando sitios web para peque??as empresas de forma gratuita con el fin de ampliar mi portafolio y adquirir conocimientos.`,
	'introduction-text7': 	`Me gusta pensar que la vida es una pista de atletismo, y nosotros tenemos que correr en nuestra l??nea, puede que haya obstaculos o malformaciones en la pista pero cada paso cuenta.`,
	'introduction-text8': 	`???Jump back and get back a little more ???`,
	'introduction-text9':	`--The Qemists`,
						
	// Right

	'introduction': 'Introducci??n',
	'skills': 'Habilidades',
	'work': 'Trabajo',
	'contact': 'Contacto',
	'powered': 'Impulsado Por',
	
	//Content
	
	'webdevelopment': 'Programaci??n',
	'2d3ddesigner': 'Dise??o 2D/3D',
	'general': 'General',
	'helpdesk': 'Helpdesk',
	'contact-text1': 'Puedes contactarme desde estas opciones',
	'contact-text2': 'Y puedes descargar mi portafolio desde aqu??',
	
	// Language
	
	'english': 'Ingl??s',
	'spanish': 'Espa??ol',
	'catalan': 'Catal??n',
	'language': 'Idioma'
	
	},
  
  'ca': {
	  
	// Left
	
	'freelancer': 'Web/3D Freelancer',
	'webdeveloper': 'Programaci??',
	'3dmodeling': 'Modelador 3D',
	'softhardware': 'Solucions Software/Hardware',
	
	'introduction-text1': 	`Hola, benvinguts a la meva p??gina web portafoli!`,
	'introduction-text2': 	`M'agrada fer p??gines web, ja sigui la part de frontend com la de backend, sempre hi ha alguna cosa nova per descobrir i una nova habilitat per millorar.`,
	'introduction-text3': 	`A m??s m'agrada el modelatge 3D i la texturaci??.`,
	'introduction-text4': 	`La inform??tica em va comen??ar a interessar des de jove, la forma en que els ordinadors funcionaven em fascinava, encara em falta molt per aprendre, ja que en aquest m??n hi ha moltes capes.`,
	'introduction-text5': 	`Vaig comen??ar aprenent programaci?? gr??cies als idiomes HTML, CSS i Javascript, va ser la millor manera d'aprendre i per construir una carrera professional`,
	'introduction-text6': 	`En 2020 durant la pand??mia del Covid, vaig comen??ar a fer models 3d com a hobby i em va canviar la vida, solia procrastinar molt i Blender ho va canviar, m'encantava la forma en la qual ??s podia veure el progr??s a trav??s del temps, de v??rtex en v??rtex, va canviar la meva vida a millor. Actualment estic creant p??gines web per petites empreses de franc amb el fi d'ampliar el meu portafolis i aconseguir m??s coneixements.`,
	'introduction-text7': 	`M'agrada pensar que la vida es una pista d'atletisme, i nosotres tenim de c??rrer en la nostra l??nea, pot ser que hi hagi obstacles o malformacions a la pista per?? cada pas compte.`,
	'introduction-text8': 	`???Jump back and get back a little more ???`,
	'introduction-text9':	`--The Qemists`,
						
	// Right

	'introduction': 'Introducci??',
	'skills': 'Habilitats',
	'work': 'Treball',
	'contact': 'Contacte',
	'powered': 'Impulsat Per',
	
	//Content
	
	'webdevelopment': 'Programaci??',
	'2d3ddesigner': 'Disseny 2D/3D',
	'general': 'General',
	'helpdesk': 'Helpdesk',
	'contact-text1': 'Pots contactar desde aquestes opcions',
	'contact-text2': 'i pots descarregar el meu portafoli desde aqu??',
	
	// Language
	
	'english': 'Angl??s',
	'spanish': 'Espanyol',
	'catalan': 'Catal??',
	'language': 'Idioma'
	
	
	}
};

$(function() {

	if(!localStorage.getItem("lang")){
		localStorage.setItem("lang", "es");
	}
	
	var lang = localStorage.getItem("lang");
	$('.lang').each(function(index, element){
		$(this).text(arrLang[lang][$(this).attr('key')]);
	});
	
	$('.translate').click(function() {
	localStorage.setItem("lang", $(this).attr('id')) ;
		let lang = $(this).attr('id');

	$('.lang').each(function(index, element) {
	  $(this).text(arrLang[lang][$(this).attr('key')]);
	  
	});

  });
});

// Menu Dropper

function menudropper() {
  var menu = document.getElementById("menu");
  var bar = document.getElementById("bar");
  var cross = document.getElementById("cross");
  
  if (menu.className === "left-responsive-dropmenu") {
    
	bar.className += " cover coverhack";
	cross.className += " shown";
	menu.className += " flex";
	
  } else {
   
	bar.className = "left-responsive-each";
	cross.className = "left-responsive-each cover";
	menu.className = "left-responsive-dropmenu";
	
  }	
}
