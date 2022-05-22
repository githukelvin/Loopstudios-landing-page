const navBar= document.querySelector('.navbar');
const navtoggle = document.querySelector('.toggle');

navtoggle.addEventListener('click', () =>{
	const visibility = navBar.getAttribute("data-visible");
	if (visibility === "true") {
		navBar.setAttribute('data-visible', false);
		navtoggle.setAttribute('aria-expanded', false);
	}
	else if (visibility === "false") {
		navBar.setAttribute('data-visible', true);
		navtoggle.setAttribute('aria-expanded', true);
	}
});