function navScroll() {
	var nav = document.querySelector('nav');
	var scroll = window.pageYOffset;
	var hidden = "-" + nav.offsetHeight + "px";
	if (scroll > 500) {
		nav.style.top = "0";
	} else {
		nav.style.top = hidden.toString();
	}
}

window.addEventListener('scroll', navScroll);

//Scrolls the blog backgrounds when hovered
var blogs = document.getElementsByClassName('blog');

function blogScroll(e) {
	this.style.backgroundPosition = "center bottom";
}

function blogReset(e) {
	this.style.backgroundPosition = "center top";
}


for (var i = 0; i < blogs.length; i++) {
	blogs[i].addEventListener('mouseover', blogScroll);
	blogs[i].addEventListener('mouseout', blogReset);
}