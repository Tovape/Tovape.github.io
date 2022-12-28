// Global Variables
var menures = null;
var bar = null;
var cross = null;
var temp1 = null;

document.addEventListener("DOMContentLoaded", function(event) { 
	menures = document.getElementById("menu-responsive");
});

// Menu

function menudropper() {
	document.getElementById("nav-icon3").classList.toggle("open");
	
	document.getElementById("menu-overlay").classList.toggle("menu-overlay-display");
	setTimeout(function(){
		document.getElementById("menu-overlay").classList.toggle("menu-overlay-opacity");
	}, 250);
	
	menures.classList.toggle("menu-responsive-toggle");
}

// Menu Items

document.addEventListener("DOMContentLoaded", function(event) {
	$('.menu-nav-item').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
});

// Theme Toggle Listener

document.addEventListener("DOMContentLoaded", function(event) {
	if (localStorage.getItem("theme")) {
		if (localStorage.getItem("theme") === "dark") {
			document.getElementById("home").classList.add("dark-theme");
			document.getElementById("theme-toggle").checked = true;
			document.getElementById("theme-toggle2").checked = true;
		}
	}
	
	document.getElementById("theme-toggle").addEventListener('change', function() {
		if (this.checked) {
			themeChange("dark");
			document.getElementById("theme-toggle2").checked = true;
			localStorage.setItem("theme", "dark");
		} else {
			themeChange("light");
			document.getElementById("theme-toggle2").checked = false;
			localStorage.setItem("theme", "light");
		}
	});
	
	document.getElementById("theme-toggle2").addEventListener('change', function() {
		if (this.checked) {
			themeChange("dark");
			document.getElementById("theme-toggle").checked = true;
			localStorage.setItem("theme", "dark");
		} else {
			themeChange("light");
			document.getElementById("theme-toggle").checked = false;
			localStorage.setItem("theme", "light");
		}
	});
});

function themeChange(theme) {
	if (theme === "dark") {
		document.getElementById("theme-overlay").classList.remove("theme-overlay-light");
		document.getElementById("theme-overlay").classList.add("theme-overlay-dark");
	} else {
		document.getElementById("theme-overlay").classList.remove("theme-overlay-dark");
		document.getElementById("theme-overlay").classList.add("theme-overlay-light");
	}
	document.getElementById("theme-overlay").classList.add("theme-overlay-animation");
	document.getElementById("home").classList.add("theme-overlay-body");
	
	setTimeout(function(){
		if (theme === "dark") {
			document.getElementById("home").classList.add("dark-theme");
		} else {
			document.getElementById("home").classList.remove("dark-theme");
		}
	}, 1000);
	
	setTimeout(function(){
		document.getElementById("theme-overlay").classList.remove("theme-overlay-animation");
		document.getElementById("home").classList.remove("theme-overlay-body");
	}, 2000);

}

// Lazy Image Load

document.addEventListener("DOMContentLoaded", function(event) { 
	const targets = document.querySelectorAll('body img');
	const lazyLoad = target => {
		const io = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			
			if (entry.isIntersecting) {
				const img = entry.target;
				const src = img.getAttribute('data-lazy');
				
				img.setAttribute('src', src);
				
				observer.disconnect();
				}
			});
		});
	io.observe(target);
	};
	targets.forEach(lazyLoad);
});

// Opacity Transition

document.addEventListener("DOMContentLoaded", function(event) { 
	const targets = document.querySelectorAll('.io-animate');
		const lazyLoad = target => {
		const io = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const item = entry.target;
					setTimeout(() => {
						item.classList.add("fade-animation");
						observer.disconnect();
					}, 300)
				}
			});
		});
		io.observe(target);
	};
	targets.forEach(lazyLoad);
});

// Scroll Top

function scrollerTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#top-button:hidden').stop(true, true).fadeIn();
    } else {
        $('#top-button').stop(true, true).fadeOut();
    }
});

document.addEventListener("DOMContentLoaded", function(event) { 
	$('#top-button').stop(true, true).fadeOut();
});

// Portfolio

$(document).ready(function(){
	$('.portfolio-toggle').click(function(){
		const value = $(this).attr('data-filter');
		$('.portfolio-flex').not('.'+value).hide();
		$('.portfolio-flex').filter('.'+value).show();
	})

	$('.portfolio-toggle').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	
	$("#portfolio-default").click();

	/*
    temp1 = document.querySelectorAll(".portfolio-flex");
    for(let i = 0; i < temp1.length; i++) {
        temp1[i].addEventListener("mousemove", (e) => { const { x, y } = temp1[i].getBoundingClientRect(); temp1[i].style.setProperty("--x", e.clientX - x); temp1[i].style.setProperty("--y", e.clientY - y); });
    }
	*/
})

// Experience

$(document).ready(function(){
	$('.experience-toggle').click(function(){
		const value = $(this).attr('data-filter');
		$('.experience-flex').not('.'+value).hide();
		$('.experience-flex').filter('.'+value).show();
	})

	$('.experience-toggle').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	
	$("#experience-default").click();
})

// ASCII

var backtick = "`";
console.log(`%c 

  _                                    _ _   _           _      _       \r\n | |                                  (_) | | |         | |    (_)      \r\n | |_ _____   ____ _ _ __   ___   __ _ _| |_| |__  _   _| |__   _  ___  \r\n | __\/ _ \\ \\ \/ \/ _\ ${backtick}| \'_ \\ \/ _ \\ \/ _\ ${backtick}| | __| \'_ \\| | | | \'_ \\ | |\/ _ \\ \r\n | || (_) \\ V \/ (_| | |_) |  __\/| (_| | | |_| | | | |_| | |_) || | (_) |\r\n  \\__\\___\/ \\_\/ \\__,_| .__\/ \\___(_)__, |_|\\__|_| |_|\\__,_|_.__(_)_|\\___\/ \r\n                    | |           __\/ |                                 \r\n                    |_|          |___\/                                   


`, 'color: #F2DC9D; font-family: Monospace;');