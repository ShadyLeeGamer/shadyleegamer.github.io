// Mutliple Accordions
const accordionHeaders = document.querySelectorAll('.accordion:not(.single) > .accordion-item > .accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', event => {
    const accordionItem = event.target.parentNode;
    accordionItem.classList.toggle('active');

    const accordionContent = accordionItem.querySelector(".accordion-content");
    if (accordionItem.classList.contains('active')) {
      TransitionItemOpen(accordionContent, true);

      let videos = accordionItem.querySelectorAll("video");
      videos.forEach(video => {
          if (video.closest(".accordion-item:not(.active)") == null) {
              PlayVideo(video);
          }
      });
    }
    else {
      TransitionItemClose(accordionContent);

      let videos = accordionItem.querySelectorAll("video");
      videos.forEach(video => {
          if (video.closest(".accordion-item:not(.active)") != null) {
              PauseVideo(video);
          }
      });
    }
  });
});

// Single Accordions
const accordionSingleGroups = document.querySelectorAll('.accordion.single');

accordionSingleGroups.forEach(group => {
  let activeAccordionSingle = null;
  let video;
  let accordionContent;
  const accordionSingleHeaders = group.querySelectorAll('.accordion.single > .accordion-item > .accordion-header');

  accordionSingleHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const accordionItem = header.parentNode;

      if (accordionItem.classList.contains('active')) {
        activeAccordionSingle = null;

        accordionContent = accordionItem.querySelector(".accordion-content");
        TransitionItemClose(accordionContent);

        accordionItem.classList.remove('active');

        const video = accordionItem.querySelector('video');
        PauseVideo(video);
      }
      else {
        accordionContent = accordionItem.querySelector(".accordion-content");
        TransitionItemOpen(accordionContent, false);

        const video = accordionItem.querySelector('video');
        PlayVideo(video);

        accordionItem.classList.add('active');

        if (activeAccordionSingle) {
          activeAccordionSingle.classList.remove('active');

          const prevVideo = activeAccordionSingle.querySelector('video');
          PauseVideo(prevVideo);

          const prevAccordionContent = activeAccordionSingle.querySelector(".accordion-content");
          TransitionItemClose(prevAccordionContent);
        }

        activeAccordionSingle = accordionItem;
      }
    });
  });
});

function TransitionItemOpen(content, loadMedia){
    content.style.maxHeight = content.scrollHeight + "px";

    if (loadMedia)
    {
      medias = document.querySelectorAll('.scroll-transition');
      medias.forEach(media => {
        var children = media.children;
        for (var i = 0; i < children.length; i++) {
          let child = children[i];
          child.addEventListener(child.nodeName == "IMG" ? "load" : "loadeddata", () =>
          {
            child.classList.add("end");
            child.addEventListener("transitionend", () => {
              child.classList.remove("scroll-transition");
              child.classList.remove("end");
            });
          });
        }
      });
    }
    
    content.addEventListener('transitionend', () => {
        content.style.maxHeight = 'none';
    }, { once: true });
}

function TransitionItemClose(content){
    content.style.maxHeight = content.scrollHeight + "px";
    content.getBoundingClientRect();
    content.style.maxHeight = 0;
    content.addEventListener('transitionend', () => {
        content.style.maxHeight = '';
    }, { once: true });
}

function PlayVideo(video) {
  if(!video)
    return;
  video.play();
  video.muted = false;
}

function PauseVideo(video) {
  if(!video)
    return;
  video.pause();
  video.currentTime = 0;
  video.muted = true;
}

// Accordion Icons
window.onload = function() {
  let headers = document.querySelectorAll('.accordion-header');
  for (let i = 0; i < headers.length; i++) {
    let element = headers[i];
    const iconType = element.classList[1];
    if(iconType == null)
      continue;
    element.insertAdjacentHTML("afterbegin", `<img src="images/accordion-icons/${iconType}.png">`);
  }
};