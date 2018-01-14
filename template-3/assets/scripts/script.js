function scrollFunction() {
	if(document.documentElement.scrollTop > 500) {
		document.querySelector('nav').style.top = "0";
	} else {
		document.querySelector('nav').style.top = "-100px";
	}
}

window.addEventListener('scroll', scrollFunction);