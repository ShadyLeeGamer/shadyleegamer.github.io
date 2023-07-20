const projectTop = document.getElementById('project-top');
const bigReelVideo = document.querySelector('#big-reel video');
isProjectPage = projectTop != null;
// $(document).ready(function() {
//     $("#loader-wrapper").fadeOut("slow");
//     setTimeout(BigReelIntro, isProjectPage ? 2000 : 1000);
// });
$(window).on("load", function() {
    $("#loader-wrapper").fadeOut("slow");
    bigReelVideo.style.width = "100%";
    setTimeout(BigReelIntro, isProjectPage ? 1000 : 2000);
    StartObservers();
});

// Big Reel (& Nav) Intro
function BigReelIntro() {
    const bigReelContainer = document.getElementById('big-reel');
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

// Observers
function StartObservers()
{
    const faders = document.querySelectorAll('.scroll-transition');

    const appearOptions = {
      threshold: 0.5
      // rootMargin: "0px 0px -200px 0px"
    };
    
    const APPEAR_ON_SCROLL = new IntersectionObserver(function(entries, APPEAR_ON_SCROLL) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          let target = entry.target;
          let isDelayedItemTypes = false;
          const delayedItemTypes = ["project-tech-list", "spinner-list", "contact", "tabs"]
          delayedItemTypes.every(function(type)
          {
            if (target.classList.contains(type))
            {
              console.log(type);
              isDelayedItemTypes = true;
              return false;
            }
            return true;
          });
          if (isDelayedItemTypes) {
            addDelayToListElements(target);
          } else {
            target.classList.add("end");
            target.addEventListener("transitionend", () => {
              target.classList.remove("scroll-transition");
              target.classList.remove("end");
            });
            APPEAR_ON_SCROLL.unobserve(target);
          }
        }
      });
    }, appearOptions);
    
    faders.forEach(fader => {
      APPEAR_ON_SCROLL.observe(fader);
    });
    
    async function addDelayToListElements(target) {
      var listElements = target.getElementsByTagName("li");
      for (var i = 0; i < listElements.length; i++) {
        listElements[i].classList.add("end");
        await new Promise(resolve => setTimeout(resolve, 150));
      }
    }
}

