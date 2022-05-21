document.addEventListener('DOMContentLoaded', function() {
  
	// MY HIDDEN THING
	var listBarDropdown = document.querySelector('.menu .menu__main .menu__main-list .list__bar .list__bar-dropdown');
  
	// MY TOGGLE BUTTON - BY ADDING/REMOVING A CLASS
	var btnMenu = document.querySelector('.menu .menu__main .menu__main-list .list__bar a.btn-menu');
	btnMenu.onclick = function() {
	  listBarDropdown.classList.toggle('active');
	};
	
	// MY CLOSE BUTTON - BY REMOVING A CLASS
	var btnClose = document.querySelector('.menu .menu__main .menu__main-list .list__bar .list__bar-dropdown .btn-close');
	btnClose.onclick = function() {
	  listBarDropdown.classList.remove('active');
	};
	  
  });