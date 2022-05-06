const navToggler = document.querySelector(".ham");
navToggler.addEventListener("click",navToggle);

function navToggle() {
	// body...


	navToggler.classList.toggle("active");
	const nav = document.querySelector("nav");
	nav.classList.toggle('open');
	if (nav.classList.contains('open')) {
		nav.style.maxHeight = nav.style.maxHeight = nav.scrollHeight + 'px';

	}
	else{
		nav.removeAttribute('style');
	}
}