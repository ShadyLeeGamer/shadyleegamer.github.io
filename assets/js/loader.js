const projectTop = document.getElementById('project-top');
isHomePage = projectTop == null;
// $(document).ready(function() {
//     $("#loader-wrapper").fadeOut("slow");
//     setTimeout(BigReelIntro, isHomePage ? 2000 : 1000);
// });
$(window).on("load", function() {
    $("#loader-wrapper").fadeOut("slow");
    setTimeout(BigReelIntro, isHomePage ? 2000 : 1000);
});

// Big Reel
function BigReelIntro() {
    const bigReelContainer = document.getElementById('big-reel');
    const bigReelVideo = document.querySelector('#big-reel video');
    const bigReelFilter = document.querySelector('#big-reel #filter');
    const bigReelFade = document.querySelector('#big-reel #fade');
    const nav = document.getElementById('nav');
    // Home page
    if (isHomePage)
    {
				// height: 28em;
        bigReelContainer.style.height = bigReelVideo.style.height = '80vh';
    }
    // Project page
    else {
        const projectContentWrapper = document.getElementById('project-content-wrapper');
        projectTop.style.opacity = projectContentWrapper.style.opacity = '1';
        if(window.innerWidth <= 980)
        {
            bigReelContainer.style.height = bigReelVideo.style.height = '28em';
        }
    }
    bigReelFilter.style.opacity = bigReelFade.style.opacity = '1';
    nav.style.opacity = '1';
}