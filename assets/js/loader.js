const projectTop = document.getElementById('project-top');
const bigReelVideo = document.querySelector('#big-reel video.main-video');
isProjectPage = projectTop != null;

window.addEventListener("load", (event) => {
  FadeOutPreloader(document.getElementById('loader-wrapper'));
  bigReelVideo.style.width = "100%";
  setTimeout(BigReelIntro, isProjectPage ? 1000 : 1500);
  StartObservers();
});

function FadeOutPreloader(loaderWrapper) {
  var fadeEffect = setInterval(function () {
    if (!loaderWrapper.style.opacity) {
        loaderWrapper.style.opacity = 1;
    }
    if (loaderWrapper.style.opacity > 0) {
        loaderWrapper.style.opacity -= 0.1;
    } else {
        clearInterval(fadeEffect);
        loaderWrapper.remove();
    }
}, 25);
}

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
    
    if (bigReelFilter) {
      bigReelFilter.style.opacity =  '1';
    }
    bigReelFade.style.opacity = '1';
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
              isDelayedItemTypes = true;
              return false;
            }
            return true;
          });
          if (isDelayedItemTypes) {
            addDelayToListElements(target);
          } else {
            target.classList.add("end");
            
            var children = target.children;
            for (var i = 0; i < children.length; i++) {
              let child = children[i];
              if (child.hasAttribute("data-src"))
              {
                child.src = child.getAttribute("data-src");
                child.classList.add("scroll-transition");
                child.addEventListener(child.nodeName == "IMG" ? "load" : "loadeddata", () => {
                  child.classList.add("end");
                  child.addEventListener("transitionend", () => {
                    child.classList.remove("scroll-transition");
                    child.classList.remove("end");
                  });
                });
              }
            }

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
        let element = listElements[i];
        element.classList.add("end");
        await new Promise(resolve => setTimeout(resolve, 150));
      }
      // target.classList.remove("scroll-transition");
      APPEAR_ON_SCROLL.unobserve(target);
            // for (var i = 0; i < listElements.length; i++) {
      //   listElements[i].classList.remove("end");
      // }
    }
}

