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
let currentActiveNavbarli = null;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


function fillNavBarSections()
{

   for (const section of sectionElements) {

        const listItem = document.createElement('li');
        const url = document.createElement('a');
        url.style.textDecoration="none";
        url.style.display="block";
        url.style.color="black";
        url.style.padding="10px";
        url.setAttribute('href',"#"+section.id);
        url.textContent = section.querySelector('h2').textContent
        listItem.appendChild(url);
        listItem.className = 'menu__link';
        listItem.dataset.nav = section.id;
        listItem.id = section.id + "-nav"
        navbarElement.appendChild(listItem);
   }
}
fillNavBarSections();


// Detect Active Section Code
function detectActiveSection(event)
{
    if(event.target.className !=null)
    {
        if(event.target.className == 'landing__container')
        {
           let activeNavbarli =  navbarElement.querySelector('#'+event.target.parentElement.id+"-nav");
           if(currentActiveNavbarli == null)
           {
               for (const li of navbarElement.children) {
                   li.classList.remove("active__link");
               }
               currentActiveNavbarli = activeNavbarli;
               activeNavbarli.classList.add('active__link');

           }
           else
           {
            for (const li of navbarElement.children) {
                li.classList.remove("active__link");
            }
               currentActiveNavbarli.classList.remove('active__link');
               currentActiveNavbarli = activeNavbarli;
               activeNavbarli.classList.add('active__link');

           }
        }
        else if(event.target.parentElement.className=='landing__container')
        {
            if(event.target.parentElement.className == 'landing__container')
            {
               let activeNavbarli =  navbarElement.querySelector('#'+ event.target.parentElement.parentElement.id+"-nav");
               
               for (const li of navbarElement.children) {
                li.classList.remove("active__link");
                }
               if(currentActiveNavbarli == null)
               {
                   currentActiveNavbarli = activeNavbarli;
                   activeNavbarli.classList.add('active__link');
    
               }
               else
               {
            
                   currentActiveNavbarli.classList.remove('active__link');
                   currentActiveNavbarli = activeNavbarli;
                   activeNavbarli.classList.add('active__link');
    
               }
            }
        }
    }


}
document.addEventListener('mouseover',detectActiveSection);
document.addEventListener('touchstart',detectActiveSection);
navbarElement.addEventListener('click',function(event){
    for (let li of navbarElement.children) {
        li.classList.remove("active__link");    
    }
    if(event.target.tagName == 'A')
    {
        event.target.parentElement.classList.add('active__link');
    }
});

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


