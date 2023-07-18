const projectTop = document.getElementById('project-top');
isProjectPage = projectTop != null;
// $(document).ready(function() {
//     $("#loader-wrapper").fadeOut("slow");
//     setTimeout(BigReelIntro, isProjectPage ? 2000 : 1000);
// });
$(window).on("load", function() {
    $("#loader-wrapper").fadeOut("slow");
    setTimeout(BigReelIntro, isProjectPage ? 1000 : 2000);
});

// Big Reel
function BigReelIntro() {
    const bigReelContainer = document.getElementById('big-reel');
    const bigReelVideo = document.querySelector('#big-reel video');
    const bigReelFilter = document.querySelector('#big-reel #filter');
    const bigReelFade = document.querySelector('#big-reel #fade');
    const nav = document.getElementById('nav');
    // Project page
    if (isProjectPage)
    {
        const projectContentWrapper = document.getElementById('project-content-wrapper');
        projectTop.style.opacity = projectContentWrapper.style.opacity = '1';
        if(window.innerWidth <= 980 && document.querySelector(".tabs") == null)
        {
            bigReelContainer.style.height = bigReelVideo.style.height = '28em';
        }
    }
    // Home page
    else {
        bigReelContainer.style.height = bigReelVideo.style.height = '80vh';
    }
    bigReelFilter.style.opacity = bigReelFade.style.opacity = '1';
    nav.style.opacity = '1';
}