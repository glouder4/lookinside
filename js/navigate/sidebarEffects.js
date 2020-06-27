/* 
Inspired from: https://tympanus.net/codrops/2013/08/28/transitions-for-off-canvas-navigations/

there are still some quirks for animation 3, 6, 7, 8 & 14 
as they do not animate back gracefully  
(those are the navs in the div with class st-pusher)
*/
$(document).ready(function(){

var click = document.querySelectorAll('#filters');
var menu = document.querySelector('#main');
var pusher = document.querySelector('#st-pusher');
// to store the corresponding effect
var effect;

// adding a click event to all the buttons
click[0].addEventListener('click', addClass)

pusher.addEventListener('click', closeMenu);



function addClass(e) {
  // to get the correct effect
  effect = e.target.getAttribute('data-effect');
  // adding the effects
  menu.classList.toggle(effect);
  menu.classList.toggle('st-menu-open');
  
  // console.log(e.target.getAttribute('data-effect'));
}

function closeMenu(el) {
  // if the click target has this class then we close the menu by removing all the classes
  if (el.target.classList.contains('st-pusher')) {
    menu.classList.toggle(effect);
    menu.classList.toggle('st-menu-open');
    // console.log(el.target);
  } 
}

$('#main').multiscroll({
	sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
	anchors: ['first', 'second', 'third'],
	menu: '#navigation_departments',
	navigation: true,
	navigationTooltips: ['One', 'Two', 'Three'],
	loopBottom: true,
	loopTop: true
});

$('#navigation_departments').onePageNav();

})
