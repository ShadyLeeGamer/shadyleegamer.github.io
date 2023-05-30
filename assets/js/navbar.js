const element = document.getElementById("nav");

// Initialise
let html = `
<div class="nav-content">
<div>
    <h1><a href="#">Ariya Bayat</a></h1>
    <span>Game Dev, Programmer Portfolio</span>
</div>
<div class="right">
    <div class="resume-and-contacts-container fixed"></div>

    <div class="hamburger-menu-container">
        <label class="hamburger-menu">
            <input type="checkbox" />
        </label>
        <div class="sidebar">
            <nav>
                <div class="resume-and-contacts-container mobile"></div>
            </nav>
        </div>
    </div>
</div>
</div>`
element.innerHTML = html;

const socialContactsElements = document.querySelectorAll(".resume-and-contacts-container")
var socialContactsHTML = `<div class="resume-button-container">
<a class="resume-button">
    <div class="spinner">
        <img src="images/icons/resume-cv.png">
    </div>
</a>
<div class="resume-button-label">
    Resume
</div>
</div>

<div class="contact scroll-transition">
<ul class="spinner-list contact-social">
<li id="github">
    <a href="https://github.com/ShadyLeeGamer" target="_blank">
        <div class="spinner" style="width: 40px; height: 40px;">
            <img src="images/icons/github.png">
        </div>
    </a>
</li>
<li id="linkedin">
    <a href="https://www.linkedin.com/in/ariyabayat/" target="_blank">
        <div class="spinner" style="width: 40px; height: 40px;">
            <img src="images/icons/linkedin.png">
        </div>
    </a>
</li>
<li id="itch-io">
    <a href="https://shadyleegamer.itch.io/" target="_blank">
        <div class="spinner" style="width: 40px; height: 40px;">
            <img src="images/icons/itch-io.png">
        </div>
    </a>
</li>
<li id="youtube">
    <a href="https://www.youtube.com/@shadyleegamer" target="_blank">
        <div class="spinner" style="width: 40px; height: 40px;">
            <img src="images/icons/youtube.png">
        </div>
    </a>
</li>
</ul>
<div class="contact-email">
<a href="mailto:shadyleegamer@gmail.com" >shadyleegamer@gmail.com</a>
</div>
</div></div>`;

socialContactsElements.forEach(socialContacts => {
    socialContacts.innerHTML = socialContactsHTML;
});



// Animate Scroll
var lastScrollTop = 0;
window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        element.style.top = "-8em";
    }
    else {
        element.style.top = "0";
    }
    lastScrollTop = scrollTop;

    UpdateNavColour();
});

function UpdateNavColour() {
    var navOffset = element.offsetTop;
    var scrollPosition = window.scrollY;
    var threshold = 0;
    if (element.parentElement.classList.contains("projects-header-wrapper")) {
        threshold = 10 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }
    else {
        threshold = navOffset + window.innerHeight * 0.7;
    }
    if (scrollPosition > threshold) {
        element.classList.remove('over-big-reel');
    } else {
        element.classList.add('over-big-reel');
    }
}
UpdateNavColour();