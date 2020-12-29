const navi = document.querySelector(".mynav");
window.onscroll = function () {if(window.pageYOffset >= 500){
	navi.classList.add('mynavfix');
	navi.style.position = 'sticky';
	}else {navi.classList.remove('mynavfix');
	navi.style.position = 'fixed';}
	// console.log(window.pageYOffset)
}
// features tabs
const act = document.querySelectorAll(".feature:first-of-type span");
// for(var i = 0; i < act.length; i++){
// 	act[i].classList.remove("activated");
// }
for(var g = 0; g < act.length - 1; g++){
	act[g].onclick = function () {
		for(var i = 0; i < act.length; i++){
			act[i].classList.remove("activated");
			this.classList.add('activated');
		}
	}
}
// pricing hover
const AKAPrice = document.querySelectorAll(".price");
for(var i = 0; i < AKAPrice.length; i++){
	AKAPrice[i].onmouseover = function () {this.classList.add('hov');
	if (AKAPrice[0].classList == ('price col-12 col-md-3 offset-md-1 hov') || AKAPrice[2].classList == ('price col-12 col-md-3 .offset-right-1 hov')) {
		AKAPrice[1].classList.remove("hovered");
	}
	else {
		AKAPrice[1].classList.add("hovered");
	}
};
	AKAPrice[i].onmouseout = function () {this.classList.remove('hov');AKAPrice[1].classList.add("hovered");};
	
}

 // nav high lights and smoothness
let smoothlinks = document.querySelectorAll("nav li a");
 function highLight(target, duration) {
	var target = document.querySelector(target);
	let targetPosition = target.getBoundingClientRect().top;
	let startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	let startTime = null;

	function animationScroll(currentTime) {
		if (startTime === null) {startTime = currentTime;}
		let timeElapsed = currentTime - startTime;
		let runIt = easing(timeElapsed, startPosition, targetPosition, duration);
		window.scrollTo(0, runIt);
		if (timeElapsed < duration) {
			requestAnimationFrame(animationScroll);	
		}
	}

	function easing(t, b, c, d) {
	    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
	    return -c / 2 * ((--t) * (t - 2) - 1) + b;
	};
	requestAnimationFrame(animationScroll);
}
// AXIT nav
let home = document.querySelector("nav h3 a");

for(var i = 0; i < smoothlinks.length; i++){
	smoothlinks[i].addEventListener("click", function() {
		highLight(this.getAttribute("href"), 1500);
	}, false)
}
// nice navbar onscroll
let smoothTargets = document.querySelectorAll(".haha > section");
let smoothTargetsevent = document.querySelector(".mynav .container");
window.addEventListener("scroll", function(){
	for(var i = 0; i < smoothlinks.length; i++){
		if (window.pageYOffset >= smoothTargets[i].offsetTop && window.pageYOffset <= (smoothTargets[i].offsetTop + smoothTargets[i].offsetHeight)) {
			smoothlinks[i].classList.add('moveRight');
			smoothlinks[i].classList.remove('moveLeft');
			smoothlinks[i].classList.remove('moveOut');
		}
		else if (window.pageYOffset > (smoothTargets[i].offsetTop + smoothTargets[i].offsetHeight)) {
			smoothlinks[i].classList.remove('moveRight');
			smoothlinks[i].classList.remove('moveLeft');
			smoothlinks[i].classList.add('moveOut');
		}
		else {smoothlinks[i].classList.remove('moveRight');
			smoothlinks[i].classList.remove('moveOut');
			smoothlinks[i].classList.add('moveLeft');}
	}
}, false)

// navbtn
let menubtn = document.querySelector('nav > span');
let menulist = document.querySelector('nav > ul');
let menubars = document.querySelector('nav > span .bars');
let menubarsW = document.querySelector('nav > span .barsW');
let showmenav = false;
menubtn.onclick = function() {
	if (!showmenav) {
		menulist.classList.add('showen');
		menubars.classList.add('mover');
		menubarsW.classList.add('moverW');

		showmenav = true;
	}
	else {
		menulist.classList.remove('showen');
		menulist.classList.add('hiding');
		menubars.classList.remove('mover');
		menubarsW.classList.remove('moverW');

		showmenav = false;
	}
}