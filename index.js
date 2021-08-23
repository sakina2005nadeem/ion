  // LOADER
    
   var myVar;
   function myFunction() {
      myVar = setTimeout(showPage, 3000);
   }
    
   function showPage() {
      document.getElementById("load").style.display = "none";
      document.getElementById("mainBod").style.display = "block";
   }

// SIDENAV 
	function openNav(){
		document.getElementById("sidenav").style.width="50%";
	}
	function closeNav () {
		document.getElementById("sidenav").style.width="0";
	}
	
// BG color white on scroll
var myNav = document.getElementById('mynav');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};




	