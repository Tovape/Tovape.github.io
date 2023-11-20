// Global Variables
var body = null;
var menures = null;
var bar = null;
var cross = null;
var temp1 = null;
var temp2 = null;
var viewer = null;
var viewer_src = null;
var theme_overlay = null;
var menu_overlay = null;
var portfolio_toggle = 0;

// Menu
document.addEventListener("DOMContentLoaded", function(event) { 
	menures = document.getElementById("menu-responsive");
	theme_overlay = document.getElementById("theme-overlay");
	menu_overlay = document.getElementById("menu-overlay");
	viewer = document.getElementById("image-viewer-wrap");
	viewer_src = document.getElementById("image-viewer-src");
	body = document.getElementById("home");
});

function menudropper() {
	body.classList.toggle("locked")
	document.getElementById("nav-icon3").classList.toggle("open");
	
	menu_overlay.classList.toggle("menu-overlay-display");
	setTimeout(function(){
		menu_overlay.classList.toggle("menu-overlay-opacity");
	}, 250);
	
	menures.classList.toggle("menu-responsive-toggle");
}

// Menu Items
document.addEventListener("DOMContentLoaded", function(event) {
	$('.menu-nav-item').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
});

// Menu Items Listener 
document.addEventListener("DOMContentLoaded", function(event) { 
	window.onscroll = function(){
		if(body.getBoundingClientRect().top <= 0){
			$('.menu-nav-item:nth-child(1)').addClass('active').siblings().removeClass('active');
		}
		if(document.getElementById("portfolio-id").getBoundingClientRect().top <= 0){
			$('.menu-nav-item:nth-child(2)').addClass('active').siblings().removeClass('active');
		}
		if(document.getElementById("skills-id").getBoundingClientRect().top <= 0){
			$('.menu-nav-item:nth-child(3)').addClass('active').siblings().removeClass('active');
		}
		if(document.getElementById("experience-id").getBoundingClientRect().top <= 0){
			$('.menu-nav-item.extra:nth-child(4)').addClass('active').siblings().removeClass('active');
		}
		if(document.getElementById("contact-id").getBoundingClientRect().top <= 0){
			$('.menu-nav-item.extra:nth-child(5)').addClass('active').siblings().removeClass('active');
		}
	}
});

// Theme Toggle Listener
document.addEventListener("DOMContentLoaded", function(event) {
	if (localStorage.getItem("theme")) {
		if (localStorage.getItem("theme") === "dark") {
			body.classList.add("dark-theme");
			document.getElementById("theme-toggle").checked = true;
			document.getElementById("theme-toggle2").checked = true;
			document.getElementById("waves-background").style.backgroundImage = "url(./files/images/icons/waves-dark.svg)"
		} else {
			document.getElementById("waves-background").style.backgroundImage = "url(./files/images/icons/waves-light.svg)"
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
	setTimeout(function(){
		if (theme === "dark") {
			theme_overlay.classList.remove("theme-overlay-light");
			theme_overlay.classList.add("theme-overlay-dark");
		} else {
			theme_overlay.classList.remove("theme-overlay-dark");
			theme_overlay.classList.add("theme-overlay-light");
		}
		theme_overlay.classList.add("theme-overlay-animation");
		body.classList.add("theme-overlay-body");
		
		setTimeout(function(){
			if (theme === "dark") {
				document.getElementById("waves-background").style.backgroundImage = "url(./files/images/icons/waves-dark.svg)"
				body.classList.add("dark-theme");
			} else {
				document.getElementById("waves-background").style.backgroundImage = "url(./files/images/icons/waves-light.svg)"
				body.classList.remove("dark-theme");
			}
		}, 1000);
		
		setTimeout(function(){
			theme_overlay.classList.remove("theme-overlay-animation");
			body.classList.remove("theme-overlay-body");
		}, 2000);
	}, 300);
}

// Lazy Image Load
document.addEventListener("DOMContentLoaded", function(event) { 
	const targets = document.querySelectorAll('body img:not(.loadlazyignore)');
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

// Portfolio Showcase
document.addEventListener("DOMContentLoaded", function(event) { 
	const targets = document.querySelectorAll('.portfolio-flex.code .portfolio-each');
	const cross = document.querySelectorAll('.portfolio-flex.code .portfolio-each .closer');

	for (let i = 0; i < targets.length; i++) {
		targets[i].addEventListener("click", function(event) {
			if (portfolio_toggle === 0) {
				for (let j = 0; j < targets.length; j++) {
					if (j !== i) {
						setTimeout(function(){
							targets[j].style.visibility = "none";
						}, 500);
						targets[j].classList.add("portfolio-fadeout");
					} else {
						targets[j].classList.add("portfolio-showcase");
					}
				}
				location.href = "#portfolio";
				setTimeout(function(){
					location.href = "#portfolio";
				}, 500);
				portfolio_toggle = 1;
			}
		});
		cross[i].addEventListener("click", function() {
			if (portfolio_toggle === 1) {
				for (let j = 0; j < targets.length; j++) {
					targets[j].style.visibility = "visible";
					targets[j].classList.remove("portfolio-showcase");
					setTimeout(function(){
						targets[j].classList.remove("portfolio-fadeout");
					}, 300);
				}
				setTimeout(() => {
					portfolio_toggle = 0;
				}, 400)
			}
		});
	}
});

// Portfolio Switch
document.addEventListener("DOMContentLoaded", function(event) { 
	$('.portfolio-toggle').click(function(){
		const value = $(this).attr('data-filter');
		$('.portfolio-flex').not('.'+value).hide();
		$('.portfolio-flex').filter('.'+value).show();
	})

	$('.portfolio-toggle').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	
	$("#portfolio-default").click();
});

// Skills Switch
document.addEventListener("DOMContentLoaded", function(event) { 
	$('.skills-toggle').click(function(){
		const value = $(this).attr('data-filter');
		$('.skills-flex').not('.'+value).hide();
		$('.skills-flex').filter('.'+value).show();
	})

	$('.skills-toggle').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	
	$("#skills-default").click();
});

// Experience Switch
document.addEventListener("DOMContentLoaded", function(event) { 
	$('.experience-toggle').click(function(){
		const value = $(this).attr('data-filter');
		$('.experience-flex').not('.'+value).hide();
		$('.experience-flex').filter('.'+value).show();
	})

	$('.experience-toggle').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	
	$("#experience-default").click();
});

// Image Viewer
document.addEventListener("DOMContentLoaded", function(event) { 
	temp2 = document.querySelectorAll(".portfolio-flex.model .portfolio-each")
	
	for (let i = 0; i < temp2.length; i++) {
		temp2[i].addEventListener("click", function() {
			var imgdom = temp2[i].querySelector("img")
			viewer_src.setAttribute("src", imgdom.getAttribute("src"))
			viewer.classList.add("active")
			menu_overlay.classList.toggle("menu-overlay-display");
			setTimeout(function(){
				viewer.classList.add("opacity")
				menu_overlay.classList.toggle("menu-overlay-opacity");
				body.classList.add("locked")
			}, 250);
		})
	}
});

function closeViewer() {
	body.classList.remove("locked")
	viewer.classList.remove("opacity")
	menu_overlay.classList.toggle("menu-overlay-opacity");
	setTimeout(function(){
		viewer_src.setAttribute("src", "")
		menu_overlay.classList.toggle("menu-overlay-display");
		viewer.classList.remove("active")
	}, 250);
}

// Image HREF Filler
document.addEventListener("DOMContentLoaded", function(event) { 
	var images = document.querySelectorAll("img");
	for (let i = 0; i < images.length; i++) {
		if (!images[i].getAttribute('alt')) {
			images[i].setAttribute("alt", "generic")
		}
	}
});

// ASCII
var backtick = "`";
console.log(`%c 

  _                                    _ _   _           _      _       \r\n | |                                  (_) | | |         | |    (_)      \r\n | |_ _____   ____ _ _ __   ___   __ _ _| |_| |__  _   _| |__   _  ___  \r\n | __\/ _ \\ \\ \/ \/ _\ ${backtick}| \'_ \\ \/ _ \\ \/ _\ ${backtick}| | __| \'_ \\| | | | \'_ \\ | |\/ _ \\ \r\n | || (_) \\ V \/ (_| | |_) |  __\/| (_| | | |_| | | | |_| | |_) || | (_) |\r\n  \\__\\___\/ \\_\/ \\__,_| .__\/ \\___(_)__, |_|\\__|_| |_|\\__,_|_.__(_)_|\\___\/ \r\n                    | |           __\/ |                                 \r\n                    |_|          |___\/                                   


`, 'color: #F2DC9D; font-family: Monospace;');