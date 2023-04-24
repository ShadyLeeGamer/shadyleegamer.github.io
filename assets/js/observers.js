const faders = document.querySelectorAll
('.scroll-transition');

const appearOptions = {
     threshold: 0.5
    // rootMargin: "0px 0px -200px 0px"
};

const APPEAR_ON_SCROLL = new IntersectionObserver
(function(
    entries,
    APPEAR_ON_SCROLL
) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("end");
            entry.target.addEventListener("transitionend", () => {
                entry.target.classList.remove("scroll-transition");
                entry.target.classList.remove("end");
            });
            APPEAR_ON_SCROLL.unobserve(entry.target);

        }
    });
},
appearOptions);

faders.forEach(fader => {
    APPEAR_ON_SCROLL.observe(fader);

});