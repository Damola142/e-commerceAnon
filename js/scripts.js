window.onscroll = function () {
	footNavTransition () ;
}

window.onload = function () {
	preLoader () ;
}





/*-----------------------------------------
PRE LOADER
-----------------------------------------*/


function preLoader () {
	document.querySelector("div.preLoader").style.display = "none" ;
	document.querySelector("div.body").style.display = "block" ;
}


/*-----------------------------------------
MENU
CATEGORY MENU
-----------------------------------------*/


function showMenu (a) {
	divDark = document.querySelector ("div.dark") ;
	menu = document.querySelector (`section.${a.getAttribute("class")}`) ;
	
	divDark.style.display = "block" ;
	menu.style.transform = "translate(0,0)" ;
}


function closeMenu (a) {
	divDark = document.querySelector ("div.dark") ;
	menu = document.querySelector (`section.${a.getAttribute("class")}`) ;
	
	divDark.style.display = "none" ;
	menu.style.transform = "translate(-100%,0)" ;
	
	clearDropDown () ;
}

droppedMenu = "" ;

function menuDropdown (a,b) {
	z = a.getAttribute ("class") ;
	dropSign = document.querySelector (`span#${z}`) ;
	dropDown = document.querySelector (`ul.${z}`) ;
//	arrowHead = document.querySelector (`img.${z}`) ;
	
	if (dropSign.textContent === "+") {
		a.style.boxShadow = "0 0 var(--cultured)" ;
		dropSign.textContent = "-" ;
		dropDown.style.height = `${b}rem` ;
//		arrowHead.style.transform = "rotate(-180deg)" ;
		
		if (a.getAttribute("id") === "langCurr") {
			arrowHead = document.querySelector (`img.${z}`) ;
			arrowHead.style.transform = "rotate(-180deg)" ;
		} else {}
	} else {
		a.style.boxShadow = "0 1px var(--cultured)" ;
		dropSign.textContent = "+" ;
		dropDown.style.height = "0" ;
//		arrowHead.style.transform = "rotate(-90deg)" ;
		
		if (a.getAttribute("id") === "langCurr") {
			arrowHead = document.querySelector (`img.${z}`) ;
			arrowHead.style.transform = "rotate(-90deg)" ;
		} else {}
	}
	
	
	if (droppedMenu === z) {
	} else {
		if (droppedMenu.length > 0) {
			droppedSign = document.querySelector (`span#${droppedMenu}`) ;
			droppedDown = document.querySelector (`ul.${droppedMenu}`) ;
			droppedA = document.querySelector (`li.${droppedMenu}`) ;
			
			droppedA.style.boxShadow = "0 1px var(--cultured)" ;
			droppedSign.textContent = "+" ;
			droppedDown.style.height = "0" ;
			
			if (droppedA.getAttribute("id") === "langCurr") {
				droppedArrowHead = document.querySelector (`img.${droppedMenu}`) ;
				droppedArrowHead.style.transform = "rotate(-90deg)" ;
			}else {}
		} else {}
	}
	
	droppedMenu = z ;
}



function clearDropDown () {
	droppedMenuLi = document.querySelector (`li.${droppedMenu}`) ;
	droppedMenuSign = document.querySelector (`span#${droppedMenu}`) ;
	droppedMenuUl = document.querySelector (`ul.${droppedMenu}`) ;
	
	droppedMenuLi.style.boxShadow = "0 1px var(--cultured)" ;
	droppedMenuSign.textContent = "+" ;
	droppedMenuUl.style.height = "0" ;
	
	if (droppedA.getAttribute("id") === "langCurr") {
		droppedArrowHead = document.querySelector (`img.${droppedMenu}`) ;
		droppedArrowHead.style.transform = "rotate(-90deg)" ;
	}else {}
}




/*-----------------------------------------
FIRST SLIDE
-----------------------------------------*/


let scrollTimeout ;

function balanceSlide1 () {
	clearTimeout (scrollTimeout) ;
	scrollTimeout = setTimeout (balSlide1, 150) ;
	
	animate () ;
}


function balSlide1 () {
	slide = document.querySelector ("section.slide1 div.slide") ;
	scrollableWidth = slide.scrollWidth - slide.clientWidth ;
	
	if (slide.scrollLeft <= (0.25 * scrollableWidth)) {
		slide.scrollLeft = 0 ;
	} else {
		slide.scrollLeft = (0.5 * scrollableWidth) ;
		
		if (slide.scrollLeft <= (0.75 * scrollableWidth)) {
			slide.scrollLeft = (0.5 * scrollableWidth) ;
		} else {
			slide.scrollLeft = (scrollableWidth) ;
		}
	}
}




/*----------------------------------------------
FOOT NAV
----------------------------------------------*/


intWindScroll = 0 ;
presentWindScroll = "" ;

function footNavTransition () {
	footNav = document.querySelector ("div.footNav") ;
	
	if (window.scrollY > intWindScroll) {
		footNav.style.transform = "translate(0,0)" ;
	} else {
		footNav.style.transform = "translate(0,3.5rem)" ;
		
		setTimeout (function () {
			footNav.style.transform = "translate(0,0)" ;
		}, 200) ;
	}
	
	intWindScroll = window.scrollY ;
}