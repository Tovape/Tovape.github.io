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
	'introduction-text': 	`Hi, Welcome to my portafolio webpage!
							I like making webpages, whether it is Frontend or Backend, there's always something new to learn and a new skill to improve.
							I also love 3d modeling and texture making
							I've been interested in computer science from young, the way such complexity worked fascinated me, I still have to discover so much more sincethere are a lot of layers in the world of computer science.
							I started learning programming in HTML, CSS and Javascript, I found them like the best way to start learning and getting my career in order.
							In 2020, during the covid pandemic I started 3D Modeling as a hobbie and it changed my life, I used to procrastinate a lot and Blender changed it, I loved the way progress was made by joining vertices and it remarked my life.
							
							I'm currently making websites for small business for free in order to grow my portafolio and gain knowledge.
						
							I like to think life is a train in rails, and our duty is making sure the train doesn't fall over, the more discipline, the more your train will shine.
							❝Jump back and get back a little more❞
							--The Qemists`,
	
	// Right

	'introduction': 'Introduction',
	'skills': 'Skills',
	'work': 'Work',
	'contact': 'Contact',
	'powered': 'Powered By',
	
	//Content
	
	'webdevelopment': 'Web Development',
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
	'introduction-text':	`Hola, bienvenidos a mi página web portafolio!
							Me gusta hacer páginas web, ya sea la parte de frontend como la de backend, siempre hay algo nuevo por aprender y una habilidad nueva para mejorar. 
							También me gusta el modelaje 3D y texturizado.
							Empezé a interesarme en la informática desde joven, la forma en que los ordenadores funcionaban me fascinaba, todavía me falta aprender mucho ya que hay muchas capas en el mundo de las Ciencias de la Computación
							Empezé aprendiendo programación gracias al lenguaje de HTML, CSS y Javascript, fue el mejor camino para empezar a construir una carrera professional
							En 2020 durante la pandemia del Covid, empezé a modelar en 3d como hobby y me cambió la vida, Solía procrastinar mucho y Blender lo cambió, me encantó la forma en la que se veía el progreso a través del tiempo, de vértice a vértice, remarcó mi vida.
							Actualmente estoy creando sitios web para pequeñas empresas de forma gratuita con el fin de ampliar mi portafolio y adquirir conocimientos.
							Me gusta pensar que la vida es un tren sobre railes, y nuestro deber es asegurarnos de que el tren no se caiga, mientras más disciplina, más brillará nuestro tren.
							❝Jump back and get back a little more❞
							--The Qemists`,
							
	// Right

	'introduction': 'Introducción',
	'skills': 'Habilidades',
	'work': 'Trabajo',
	'contact': 'Contacto',
	'powered': 'Impulsado Por',
	
	//Content
	
	'webdevelopment': 'Desarollo Web',
	'2d3ddesigner': 'Diseño 2D/3D',
	'general': 'General',
	'helpdesk': 'Helpdesk',
	'contact-text1': 'Puedes contactarme desde estas opciones',
	'contact-text2': 'Y puedes descargar mi portafolio desde aquí',
	
	// Language
	
	'english': 'Anglès',
	'spanish': 'Espanyol',
	'catalan': 'Català',
	'language': 'Idioma'
	
	},
  
  'ca': {
	  
	// Left
	
	'freelancer': 'Web/3D Freelancer',
	'webdeveloper': 'Desenvolupador Web',
	'3dmodeling': 'Modelador 3D',
	'softhardware': 'Solucions Software/Hardware',
	'introduction-text':	`Hola, benvinguts a la meva pàgina web portafoli!
							M'agrada fer pàgines web, ja sigui la part de frontend com la de backend, sempre hi ha algo nou per descobrir i una nova habilitat per millorar. 
							A més m'agrada el modelatje 3D i la texturació.
							L'informàtica em va començar a interesar desde jove, la forma en la que els ordinadors funcionaven me fascinaba, encara em falta molt per aprendre ja que en aquest mon hi ha moltes capes
							Vaig començar aprenent programació gràcies als idiomes HTML, CSS i Javascript, va ser la millor manera de aprendre i per construir una carrera professional
							En 2020 durant la pandemia del Covid, vaig començar a fer models 3d com a hobby i em va cambiar la vida, solia procrastinar molt i Blender ho va cambiar, m'encantava la forma en la que es podía veure el progrés a través del temps, de vèrtex en vèrtex, va cambiar la meva vida a millor.
							Actualment estic creant pàgines web per petites empreses de franc amb el fi d'ampliar el meu portafolis i conseguir més coneixements.
							M'agrada pensar que vida és un tren sobre rails, i que el nostre deure es assegurar-nos de que aquest no caigui, mentre més disciplina, més brillarà el nostre tren.
							❝Jump back and get back a little more❞
							--The Qemists`,
							
	// Right

	'introduction': 'Introducció',
	'skills': 'Habilitats',
	'work': 'Treball',
	'contact': 'Contacte',
	'powered': 'Impulsat Per',
	
	//Content
	
	'webdevelopment': 'Desenvolupament Web',
	'2d3ddesigner': 'Disseny 2D/3D',
	'general': 'General',
	'helpdesk': 'Helpdesk',
	'contact-text1': 'Pots contactar desde aquestes opcions',
	'contact-text2': 'i pots descarregar el meu portafoli desde aquí',
	
	// Language
	
	'english': 'Anglès',
	'spanish': 'Espanyol',
	'catalan': 'Català',
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