const navbar = document.getElementById("nav");

// Initialise
let html = `
<div class="nav-content">
    <div>
        <h1><a href="#">Ariya Bayat</a></h1>
        <span>Game Dev, Programmer Portfolio</span>
    </div>
    <div class="right">
        <a class="resumeBtn"><img src="images/icons/resume-cv.png"></a>
        <div class="contact fixed scroll-transition">
            <ul class="contact-social">
                <li>
                    <a href="https://github.com/ShadyLeeGamer" target="_blank">
                        <div class="spinner" style="width: 40px; height: 40px; background: var(--colour-1-bright);">
                            <img src="images/icons/github.png">
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/ariyabayat/" target="_blank">
                        <div class="spinner" style="width: 40px; height: 40px; background: var(--colour-4-bright);">
                            <img src="images/icons/linkedin.png">
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://shadyleegamer.itch.io/" target="_blank">
                        <div class="spinner" style="width: 40px; height: 40px; background: var(--colour-2-bright);">
                            <img src="images/icons/itch-io.png">
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@shadyleegamer" target="_blank">
                        <div class="spinner" style="width: 40px; height: 40px; background: var(--colour-3-bright);">
                            <img src="images/icons/youtube.png">
                        </div>
                    </a>
                </li>
            </ul>
            <div class="contact-email">
                <a href="mailto:shadyleegamer@gmail.com" >shadyleegamer@gmail.com</a>
            </div>
        </div>
        <div class="hamburger-menu-container">
            <label class="hamburger-menu">
                <input type="checkbox" />
            </label>
            <div class="sidebar">
                <nav>
                    <a class="resumeBtn"><img src="images/icons/resume-cv.png"></a>
                    <div class="contact mobile scroll-transition">
                        <ul class="contact-social">
                            <li>
                                <a href="https://github.com/ShadyLeeGamer" target="_blank">
                                    <div class="spinner" style="width: 40px; height: 40px; background: var(--colour-1-bright);">
                                        <img src="images/icons/github.png">
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/ariyabayat/" target="_blank">
                                    <div class="spinner" style="width: 40px; height: 40px; background: var(--colour-4-bright);">
                                        <img src="images/icons/linkedin.png">
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="https://shadyleegamer.itch.io/" target="_blank">
                                    <div class="spinner" style="width: 40px; height: 40px; background: var(--colour-2-bright);">
                                        <img src="images/icons/itch-io.png">
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@shadyleegamer" target="_blank">
                                    <div class="spinner" style="width: 40px; height: 40px; background: var(--colour-3-bright);">
                                        <img src="images/icons/youtube.png">
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div class="contact-email">
                            <a href="mailto:shadyleegamer@gmail.com" >shadyleegamer@gmail.com</a>
                        </div>
                    </div>
                </nav>
                </div>
        </div>
    </div>
</div>`

navbar.innerHTML = html;

// Animate Scroll
var lastScrollTop = 0;
window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-8em";
    }
    else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});