// if (window.innerWidth > 768) {
//     const videoElements = document.querySelectorAll('.project-bg video');
//     videoElements.forEach((videoElement, videoElementIndex) =>
//         {
//             const sideVideoContainers = [];
//             for (let i = 0; i < 4; i++) {
//                 videoElement.parentElement.classList.add(`bg-perspective-${['left', 'right'][videoElementIndex % 2]}`);
    
//                 const sideVideoContainer = document.createElement('div');
//                 sideVideoContainer.classList.add(`project-bg-${['bottom', 'left', 'right', 'top'][i]}-side`);
                
//                 const sideVideoElement = document.createElement('video');
//                 sideVideoElement.src = videoElement.src;
//                 sideVideoElement.autoplay = true;
//                 sideVideoElement.loop = true;
//                 sideVideoElement.muted = true;
                
//                 sideVideoContainer.appendChild(sideVideoElement);
//                 sideVideoContainers.push(sideVideoContainer);
//               }
              
//               const projectBg = videoElement.parentElement;
//               projectBg.appendChild(videoElement);
//               sideVideoContainers.forEach(container => projectBg.appendChild(container));
//         });
// }

const videoElements = document.querySelectorAll('.project-bg video');

function handleResize() {
  if (window.innerWidth < 980) {
    videoElements.forEach((videoElement) => {
      const projectBg = videoElement.parentElement;
      if (projectBg.classList.contains('bg-perspective-left') || projectBg.classList.contains('bg-perspective-right')) {
        projectBg.classList.remove('bg-perspective-left', 'bg-perspective-right');
        const sideVideoContainers = projectBg.querySelectorAll('[class*="project-bg-"]');
        sideVideoContainers.forEach((container) => container.remove());
      }
    });
  } else {
    videoElements.forEach((videoElement, videoElementIndex) => {
      const projectBg = videoElement.parentElement;
      if (!projectBg.classList.contains('bg-perspective-left') && !projectBg.classList.contains('bg-perspective-right')) {
        const sideVideoContainers = [];
        for (let i = 0; i < 4; i++) {
          projectBg.classList.add(`bg-perspective-${['left', 'right'][videoElementIndex % 2]}`);

          const sideVideoContainer = document.createElement('div');
          sideVideoContainer.classList.add(`project-bg-${['bottom', 'left', 'right', 'top'][i]}-side`);

          const sideVideoElement = document.createElement('video');
          sideVideoElement.src = videoElement.src;
          sideVideoElement.autoplay = true;
          sideVideoElement.loop = true;
          sideVideoElement.muted = true;

          // sideVideoContainer.appendChild(sideVideoElement);
          // sideVideoContainers.push(sideVideoContainer);
        }

        projectBg.appendChild(videoElement);
        sideVideoContainers.forEach((container) => projectBg.appendChild(container));
      }
    });
  }
}

window.resizeTo(100, 100);

// handleResize();

// window.addEventListener('resize', handleResize);