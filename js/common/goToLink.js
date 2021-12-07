//-------------------------------------
// goToLink.js
//-------------------------------------

// github
function linkGithub() {
	window.open("https://github.com/dhdbswl", "_blank")
}

// notion
function linkNotion() {
	window.open("https://spice-chemistry-b6a.notion.site/Web-Application-Developer-yunji-oh-5153132266124628a0a1fb483a76382b", "_blank")
}

// portfolio - Online Shopping mall for Portfolio
function linkSitePortfolioShoppingmall() {
	window.open("http://teamlight.cafe24.com/", "_blank")
}
function linkGithubPortfolioShoppingmall() {
	window.open("https://github.com/rkr0111/TeamProject", "_blank")
}
function linkNotionPortfolioShoppingmall() {
	window.open("https://spice-chemistry-b6a.notion.site/04701e90d56e4ccdaebb6c5a0b740fa8", "_blank")
}

function allPortfolioLink(e) {
	e.classList.add("btnWideView");
	setInterval(() => {
		location.href = "./portfolios/index.html";
	}, 500);
}
function HomeLink(e) {
	e.classList.add("btnWideView");
	setInterval(() => {
		location.href = "../index.html";
	}, 500);
}