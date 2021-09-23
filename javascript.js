// Resposnive Nav

function menudropper() {
  var menu = document.getElementById("responsive");
  if (menu.className === "responsive") {
    menu.className += " menutext";
  } else {
    menu.className = "responsive";
  }
}

// Top Button

var mybutton = document.getElementById("topid");

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// Language + Cookies

var arrLang = {
	
  'en': {
	  
	// General
	
	'home': 'Home',
	'introduction': 'Introduction',
	'projects': 'Projects',
	'contact': 'Contact',
	
	'scroll': 'Scroll',
	
	'webdeveloper': 'Web Developer', 
	'2d3ddesigner': '2D/3D Designer',
	'helpdesk': 'Helpdesk',
	
	// Bio
	
	'bio1': `Welcome to my portafolio webpage!`,
	'bio2': `I like making webpages, whether it is Frontend or Backend, there's always something new to learn and a new skill to improve.`,
	'bio3': `I also love 3d modeling and texture making`,
	'bio4': `Here you will find any information you need about me`,
	
	// Showdown
	
	'skills': 'Skills',
	'work': 'Work',
	
	// Contact
	
	'phone': 'Phone',
	
	// Resume
	
	'resume': 'Resume',
	
	// Languages
	
	'english': 'English',
	'spanish': 'Spanish',
	'catalan': 'Catalan'
	
	},
  
  'es': {
	  	  
	// General
	
	'home': 'Inicio',
	'introduction': 'Introducción',
	'projects': 'Proyectos',
	'contact': 'Contacto',
	
	'scroll': 'Baja',
	
	'webdeveloper': 'Desarollador Web', 
	'2d3ddesigner': 'Diseñador 2D/3D',
	'helpdesk': 'Helpdesk',
	
	// Bio
	
	'bio1': `¡Bienvenidos a mi página web portafolio!`,
	'bio2': `Me gusta hacer páginas web, tal sea la parte de "Frontend" como la de "Backend", siempre hay algo nuevo que aprender y una nueva habilidad que mejorar`,
	'bio3': `Además me encanta hacer modelos 3d y texturizarlos`,
	'bio4': `Aquí encontrarás todo lo que necesitarás saber sobre mi`,
		
	// Showdown
	
	'skills': 'Habilidades',
	'work': 'Trabajo',
	
	// Contact
	
	'phone': 'Mobil',
	
	// Resume
	
	'resume': 'Curriculum',
	
	// Languages
	
	'english': 'Inglés',
	'spanish': 'Español',
	'catalan': 'Catalan'

	},
  
  'ca': {
	  	  
	'home': 'Inici',
	'introduction': 'Introducció',
	'projects': 'Projectes',
	'contact': 'Contacte',
	
	'scroll': 'Baixa',
	
	'webdeveloper': 'Desenvolupador Web', 
	'2d3ddesigner': 'Disenyador 2D/3D',
	'helpdesk': 'Helpdesk',
	
	// Bio
	
	'bio1': `Benvinguts a la meva pàgina web portafoli!`,
	'bio2': `M'agrada fer pàgines web, tal com sigui la part de "Frontend" com la de "Backend", sempre hi ha alguna cosa que aprendre i una nova habilitat que millorar`,
	'bio3': `També m'encanta fer models 3d i texturitzar-los`,
	'bio4': `Aquí trobaràs tot el que necessitaràs saber sobre mi`,
	
	// Showdown
	
	'skills': 'Habilitats',
	'work': 'Treball',
	
	// Contact
	
	'phone': 'Mobil',
	
	// Resume
	
	'resume': 'Currículum',
	
	// Language
	
	'english': 'Anglès',
	'spanish': 'Espanyol',
	'catalan': 'Català'

	}
};

$(function() {

	const langImage = document.getElementById("languageimg")

	if(!localStorage.getItem("lang")){
		localStorage.setItem("lang", "es");
	}
	
	if (localStorage.getItem("lang") === "en") {
		langImage.src="./img/media/us.png";
	} else if (localStorage.getItem("lang") === "es") {
		langImage.src="./img/media/es.png";
	} else if (localStorage.getItem("lang") === "ca") {
		langImage.src="./img/media/cat.png";
	};
	
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
	
	if (localStorage.getItem("lang") === "en") {
		langImage.src="./img/media/us.png";
	} else if (localStorage.getItem("lang") === "es") {
		langImage.src="./img/media/es.png";
	} else if (localStorage.getItem("lang") === "ca") {
		langImage.src="./img/media/cat.png";
	};

  });
});

