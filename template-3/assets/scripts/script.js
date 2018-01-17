//Navigation scroll
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

//Makes Navbar appear when the user clicks the arrow
var navCollapse = document.querySelector('#nav-collapse');

function navToggle(e) {
	this.classList.toggle('fa-arrow-down');
	this.classList.toggle('fa-arrow-up');
	var navbar = document.querySelector('.navigation');
	navbar.classList.toggle('show');
}

navCollapse.addEventListener('click', navToggle);


//Scrolls the blog backgrounds when hovered
var blogs = document.getElementsByClassName('blog');

function blogScroll(e) {
	this.style.backgroundPosition = "center bottom";
}

function blogReset(e) {
	this.style.backgroundPosition = "center top";
}


if (window.screen.width > 700) {
		for (var i = 0; i < blogs.length; i++) {
		blogs[i].addEventListener('mouseover', blogScroll);
		blogs[i].addEventListener('mouseout', blogReset);
	}
}


//Quote Generator
var quote = document.querySelector('.quotes'),
quote1 = document.querySelector('#quote1'),
quote2 = document.querySelector('#quote2'),
quote3 = document.querySelector('#quote3'),
quote4 = document.querySelector('#quote4');

var quotes = [quote1, quote2, quote3, quote4];

var text1 = `When I started lifting weights in Jan, 2016, I weighed 
135 pounds and as of Dec, 2017, I now weigh 185. I had no clue how to lift 
until Greg showed me how to hit each muscle. Without Greg I would still 
weigh 135 pounds and be a scrawny little boy. Instead, 
I am now 185 and the most confident I have ever been.`
var text2 = `Greg pushed me to be the best version of myself both 
hysically and mentally. He was SUPER helpful in teaching technique 
and helping make a workout and meal plan to help me reach my goals. 
It is definitely in my New Years resolution to work with him again!`;
var text3 = `Greg put me on an 8 week workout plan 
where I saw an enormous amount of improvement. The mixture between 
lifting weights and doing cardio had me leaner and stronger all 
around . . . Overall, those 8 weeks were 
filled with the quickest amount of physical improvement that I’ve 
seen since having mandatory 2 hour a day lacrosse practice followed 
by an hour and half swim practice 4-5 times a week. I couldn’t 
have been happier with the workout plan set out for me during 
those 8 weeks and never lost interest in continuing to improve 
every single day.`;
var text4 = `Greg has been a great resource! I told him what 
I wanted to work on and what I was currently doing and he 
gave me a routine to help me towards my goals. He's always 
willing to help and I know I can come to him with any 
questions. There were a few exercises that I was unsure about 
and when I asked him, he sent me videos of the workouts and 
tips on how to do them. If you're in need of a personal 
trainer, I would definitely recommend Greg!`;
var citation = document.querySelector('.citation');
	  person1 = "Matt Massullo",
		person2 = "Kailey Phillips",
		person3 = "Tyler Senn",
		person4 = "Kimberl Zdanowicz";

//Sets the first quote as inital
window.onload = () => {
	quote.textContent = text1;
	citation.textContent = person1;
	quote1.classList.add('active-quote');
};

function quoteSetter(e) {
	quote.textContent = (this === quote1 ? text1 :
											(this === quote2 ? text2 :
											(this === quote3 ? text3 :
											(this === quote4 ? text4 : text1)
											)));
	citation.textContent = (this === quote1 ? person1 :
												 (this === quote2 ? person2 :
												 (this === quote3 ? person3 :
												 (this === quote4 ? person4 : person1)
												 )));
	//Removes active quote class to unactive quotes
	quotes.forEach(quote => quote.classList.remove('active-quote'));
	this.classList.add('active-quote');


	//Creates a scrolling effect
	quote.classList.add('slide', 'slide-left');
	setTimeout(function() {
		quote.classList.add('slide-right');
	}, 1000);
	setTimeout(function() {
		quote.classList.add('visible');
	}, 1100);
	setTimeout(function() {
		quote.classList.remove('slide', 'slide-left', 'slide-right', 'visible');
	}, 1200);

	citation.classList.add('slide', 'slide-left');
	setTimeout(function() {
		citation.classList.add('slide-right');
	}, 1000);
	setTimeout(function() {
		citation.classList.add('visible');
	}, 1100);
	setTimeout(function() {
		citation.classList.remove('slide', 'slide-left', 'slide-right', 'visible');
	}, 1200);
}

quotes.forEach(quote => quote.addEventListener('click', quoteSetter));


//Slide in Animations when the user scrolls in the area

	//Function that keeps the window from checking scroll so much
function debounce(func, wait) {
	let timeout;
	return function() {
		const context = () => func.apply(this, arguments);
		clearTimeout(timeout);
		timeout = setTimeout(context, wait);
	}
}

var slideElements = document.querySelectorAll('.slide');

function slide(e) {
	slideElements.forEach(slideElement => {
		const slideInLocation = window.scrollY + window.innerHeight;
		if (slideInLocation > slideElement.offsetTop) {
			slideElement.classList.add('visible');
		}
	});
}

window.addEventListener('scroll', debounce(slide, 15));


//Navigational scroll animation using jQuery and taken from css-tricks.com
$('a[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(e) {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

			if (target.length) {
				e.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function() {
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) {
						return false;
					} else {
						$target.attr('tabindex', '-1');
						$target.focus();
					};
				});
			}
		}
	});