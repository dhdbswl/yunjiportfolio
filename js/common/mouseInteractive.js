//-------------------------------------
// mouseInteractive.js
//-------------------------------------

// index - main section interactive
let portfolioListLi;
let portfolioListBg;
let portfolioListBg_img;
let portfolioText;
let indexPortfolioListWrapImg;
let arrowImg;

let bgX = 0;
let bgY = 0;
let mouseX = 0;
let mouseY = 0;
let mouseSpeed = 0.05;

window.onload = function(){
	portfolioListLi = document.querySelectorAll(".portfolioList > li > a");
	portfolioListBg = document.querySelector(".portfolioListBg");
	portfolioListBg_img = document.querySelector(".portfolioListBg > img");
	portfolioText = document.querySelectorAll("#portfolioText");
	indexPortfolioListWrapImg = document.querySelectorAll(".portfolioListWrapImg");
	arrowImg = document.querySelector(".arrowImg");

	//window.addEventListener("scroll", scrollFunc, false);
	window.addEventListener("mousemove", mouseFunc, false);
}

function mouseFunc(e) {
	bgX = (e.clientX - window.innerWidth / 2);
	bgY = (e.clientY - window.innerHeight / 2);

	mouseFuncLoop();
}

function mouseFuncLoop() {
	mouseX += (bgX - mouseX) * mouseSpeed;
	mouseY += (bgY - mouseY) * mouseSpeed;

	if(portfolioListBg !== null) {
		portfolioListBg.style.transform = "translate(" + (mouseX/15) + "px," + (mouseY/15) + "px)";
	}
	for(var i=0; i<indexPortfolioListWrapImg.length; i++) {
		indexPortfolioListWrapImg[i].style.transform = "translate(" + -(mouseX/3) + "px," + -(mouseY/3) + "px)";
	}
	if(arrowImg !== null) {
		arrowImg.style.transform = "translate(" + (mouseX/20) + "px," + (mouseY/20) + "px)";
	}

	window.requestAnimationFrame(mouseFuncLoop);
}

//function scrollFunc(e) {
//	scrollTop = this.scrollY;
//	console.log(scrollTop)
//}

function portfolioMouseOverFunc(e, idx) {
	portfolioListBg_img.src = "../images/portfolio/" + e.id + "_01.png";

	for(var i=0; i<portfolioListLi.length; i++) {
		portfolioListLi[i].classList.remove("textShadow");
		portfolioText[i].classList.remove("visible");
	}
	if(portfolioListLi[idx].classList.value == "" && portfolioText[idx].classList.value == "") {
		portfolioListLi[idx].classList.toggle("textShadow");
		portfolioText[idx].classList.toggle("visible");
	}
}