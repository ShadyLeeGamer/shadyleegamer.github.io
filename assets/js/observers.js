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
      if (target.classList.contains("project-tech-list") || target.classList.contains("tech") || target.classList.contains("contact") || target.classList.contains("tabs")) {
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
