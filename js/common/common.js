//-------------------------------------
// common.js
//-------------------------------------

let media;
let indexWrap;
let idexNavLink;
let indexSection;

media = matchMedia("screen and (max-width: 1024px)");
indexWrap = document.querySelector(".index");
idexNavLink = indexWrap.querySelectorAll(".navLink li");
indexSection = indexWrap.querySelectorAll(".indexSection");

window.onload = function() {
	media.addListener((e) => {
		console.log(e)
	});
}

window.addEventListener("scroll", indexScrollFunc, false);

function indexNavClickFunc(e,cnt) {
	e.classList.add("active");
	indexSection[cnt].scrollIntoView(true);
}

function indexScrollFunc(e) {
	scrollTop = this.scrollY;

	for(var i=0; i<indexSection.length; i++) {
		if(scrollTop > (indexSection[i].offsetTop-100)) {
			if(i > 0){
				idexNavLink[i-1].classList.remove("active");
			}
			idexNavLink[i].classList.add("active");
		} else if(scrollTop != 0) {
			idexNavLink[i].classList.remove("active");
		}
	}
}