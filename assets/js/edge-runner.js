function EdgeRunner() {
  var edgeRunnerElement = document.querySelector(".interactable #edge-runner");
  
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
  const FPS_FAST = 35;
  const FPS_INC = 0.03;
  let currentFPS = FPS_NORMAL;
  const SECOND_TO_MILLISECOND = 1000;
  const FRAMES_LENGTH = 9;
  let frameNo = 1;
  
  // Unity's framerate
const TARGET_FPS = 60;
const MS_PER_FRAME = 1000 / TARGET_FPS;
  let lastFrameTime = 0;
  function update(currentTime) {
    const DELTA_TIME = currentTime - lastFrameTime;
  
    if (DELTA_TIME >= MS_PER_FRAME) {
      lastFrameTime = currentTime;
  
      currentFPS = clamp(currentFPS - FPS_INC * DELTA_TIME, FPS_NORMAL, FPS_FAST);
       console.log(currentFPS)
  
      if (changeSprite)
      {
        currentDirIndex = currentDirIndex + 1 > dirs.length - 1 ? currentDirIndex = 0 : currentDirIndex + 1;
        changeSprite = false;
      }

      if(speedUp)
      {
        currentFPS = FPS_FAST;
      }
    }
  
    requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
  
  function animate() {
    setTimeout(function() {
      if (frameNo == FRAMES_LENGTH + 1)
        frameNo = 1
      edgeRunnerElement.src = URL + dirs[currentDirIndex] + "-view/" + frameNo + ".PNG";
  
      if (frameNo < FRAMES_LENGTH + 1) {
        animate();
      }
      frameNo++;
    }, (1 / currentFPS) * SECOND_TO_MILLISECOND)
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