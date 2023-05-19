function EdgeRunner() {
  var edgeRunnerElement = document.querySelector(".interactable#edge-runner div");
  
  var changeSprite = false;
  var speedUp = false;
  edgeRunnerElement.addEventListener('mousedown', onMouseDown);
  edgeRunnerElement.addEventListener('touchstart', onMouseDown);
  edgeRunnerElement.addEventListener('mouseup', onMouseUp);
  edgeRunnerElement.addEventListener('touchend', onMouseUp);
  // edgeRunnerElement.addEventListener('mouseleave', onMouseUp);
  // edgeRunnerElement.addEventListener('touchcancel', onMouseUp);
  
  function onMouseDown(event) {
    // changeSprite = true;
    speedUp = true;
  }
  function onMouseUp(event) {
    // changeSprite = false;
    speedUp = false;
  }
  
  const URL = "../../images/edge-runner/";

  let dirs = [];
  dirs[0] = "right-side";
  dirs[1] = "front";
  dirs[2] = "left-side";
  dirs[3] = "back";
  let currentDirIndex = 0;

  const FPS_NORMAL = 10;
  const FPS_FAST = 30;
  const FPS_INC = 0.03;
  let currentFPS = FPS_NORMAL;

  
  // Unity's framerate
const TARGET_FPS = 60;
const MS_PER_FRAME = 1000 / TARGET_FPS;
  let lastFrameTime = 0;
  function update(currentTime) {
    const DELTA_TIME = currentTime - lastFrameTime;
  
    if (DELTA_TIME >= MS_PER_FRAME) {
      lastFrameTime = currentTime;
      
      currentFPS = clamp(currentFPS - FPS_INC * DELTA_TIME, FPS_NORMAL, FPS_FAST);
  
      if (changeSprite)
      {
        currentDirIndex = currentDirIndex + 1 > dirs.length - 1 ? currentDirIndex = 0 : currentDirIndex + 1;
        changeSprite = false;
      }

      if(speedUp)
      {
        currentFPS = FPS_FAST;
        console.log(currentFPS)
      }
    }
  
    requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
  
  const SECOND_TO_MILLISECOND = 1000;
  const FRAMES_LENGTH  = 9;
let frameNo = 0;
  function animate() {
    // var FPSToSec = (9 / currentFPS);
    // edgeRunnerElement.style["-webkit-animation-duration"] = FPSToSec + "s";


  setTimeout(function() {
      if (frameNo == FRAMES_LENGTH)
        frameNo = 0;

      let step = 512 * getComputedStyle(edgeRunnerElement).getPropertyValue('--size-factor');
      let posX = step * (9 - frameNo);
      let posY = step;

        console.log(frameNo);
  
    edgeRunnerElement.style["background-position"] = `${posX}px ${posY}px`;

    if (frameNo < FRAMES_LENGTH) {
        animate();
      }
      frameNo++;

    }, (1 / currentFPS) * SECOND_TO_MILLISECOND);
  }
  animate();

  
function clamp(num, min, max) {
    return num <= min 
      ? min 
      : num >= max 
        ? max 
        : num
  }
}
EdgeRunner();