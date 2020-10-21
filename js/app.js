/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbarElement = document.querySelector('#navbar__list');
const sectionElements = document.querySelectorAll('section');
//document.addEventListener('mouseover',function checkActiveSection(){});
// for(const elemenet of sectionElements)
// {
//     console.log(elemenet);
// }

document.addEventListener('scroll',function(event){
    console.log(event);
});
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
document.addEventListener('mouseover',checkActiveSectionPc);
function checkActiveSectionPc(event)
{
for (const iterator of event.path) {
    console.log(typeof(iterator));
    if(iterator.toString().includes('section1') == true)
    {
        console.log("what");
    }
    //console.log(iterator);
}
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


