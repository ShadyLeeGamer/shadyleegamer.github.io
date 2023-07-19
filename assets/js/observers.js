// const faders = document.querySelectorAll('.scroll-transition');

// const appearOptions = {
//   threshold: 0.5
// };

// const APPEAR_ON_SCROLL = new IntersectionObserver(function(entries, APPEAR_ON_SCROLL) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       let target = entry.target;
//       let isDelayedItemTypes = false;
//       const delayedItemTypes = ["project-tech-list", "spinner-list", "contact", "tabs"]
//       delayedItemTypes.every(function(type)
//       {
//         if (target.classList.contains(type))
//         {
//           console.log(type);
//           isDelayedItemTypes = true;
//           return false;
//         }
//         return true;
//       });
//       if (isDelayedItemTypes) {
//         addDelayToListElements(target);
//       } else {
//         target.classList.add("end");
//         target.addEventListener("transitionend", () => {
//           target.classList.remove("scroll-transition");
//           target.classList.remove("end");
//         });
//         APPEAR_ON_SCROLL.unobserve(target);
//       }
//     }
//   });
// }, appearOptions);

// faders.forEach(fader => {
//   APPEAR_ON_SCROLL.observe(fader);
// });

// async function addDelayToListElements(target) {
//   var listElements = target.getElementsByTagName("li");
//   for (var i = 0; i < listElements.length; i++) {
//     listElements[i].classList.add("end");
//     await new Promise(resolve => setTimeout(resolve, 150));
//   }
// }
