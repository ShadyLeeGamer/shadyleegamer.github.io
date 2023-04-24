const CANVAS = document.getElementById("survival-game-2020-canvas");
CANVAS.width = 200;
CANVAS.height = 64;
const CONTEXT = CANVAS.getContext("2d");
CONTEXT.imageSmoothingEnabled = false;
let projectileImage = new Image();
projectileImage.src = "images/2020-survival-game/soap-projectile.png";

let projectiles = [];
let particleSystems = [];

const FIRE_RATE = 4;
let timeSinceLastShot = 0;


var lockdowneerElement = document.getElementById("lockdowneer");
var shootInput = false;

lockdowneerElement.addEventListener('mousedown', handleShootInputEnter);
lockdowneerElement.addEventListener('touchstart', handleShootInputEnter);
lockdowneerElement.addEventListener('mouseup', handleShootInputExit);
lockdowneerElement.addEventListener('touchend', handleShootInputExit);
lockdowneerElement.addEventListener('mouseleave', handleShootInputExit);
lockdowneerElement.addEventListener('touchcancel', handleShootInputExit);

function handleShootInputEnter(event) {
  shootInput = true;
}
function handleShootInputExit(event) {
  shootInput = false;
}

// Unity's framerate
const TARGET_FPS = 60;
const MS_PER_FRAME = 1000 / TARGET_FPS;
let lastFrameTime = 0;

function update(currentTime) {
  const DELTA_TIME = currentTime - lastFrameTime;

  if (DELTA_TIME >= MS_PER_FRAME) {
    lastFrameTime = currentTime;
    timeSinceLastShot += DELTA_TIME;

    CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);

    if(shootInput && timeSinceLastShot >= 1000 / FIRE_RATE) {
      timeSinceLastShot = 0;

      shoot();
    }

    updateProjectiles();
    updateParticleSystems();
  }

  requestAnimationFrame(update);
}

requestAnimationFrame(update);

function updateProjectiles(){
  projectiles.forEach(function(projectile) {
    projectile.x += projectile.speedX;
    projectile.y += projectile.speedY;

    projectile.speedY += 2.5; // Add gravity

    CONTEXT.save();
    CONTEXT.translate(projectile.x, projectile.y);
    CONTEXT.rotate(Math.atan2(projectile.speedY, projectile.speedX));
    CONTEXT.drawImage(projectileImage,
                      -projectileImage.width,
                      -projectileImage.height,
                      projectileImage.width * 2,
                      projectileImage.height * 2);
    CONTEXT.restore();

    if (projectile.y + 5 >= CANVAS.height) { // Check if projectile hits the ground
      projectile.isAlive = false;

      // Spawn particle EFX
      const particleSystem = new ParticleSystem(projectile.x, projectile.y);
      particleSystems.push(particleSystem);

      const soapSplashSFX = new Audio('sounds/soap-splash.mp3');
      soapSplashSFX.play();
    }
  });

  projectiles = projectiles.filter(function(projectile) {
    return projectile.isAlive;
  });
}

function updateParticleSystems() {
  particleSystems.forEach(particleSystem => {
    particleSystem.update();
    particleSystem.draw(CONTEXT);
  });
  particleSystems = particleSystems.filter(particleSystem => particleSystem.particles.length > 0);
}

function shoot()
{
  lockdowneerElement.id = "lockdowneer-shooting";
  lockdowneerElement.addEventListener("animationend", () => {
    lockdowneerElement.id = "lockdowneer";
});

  const RANDOM_ANGLE_DATA = randomRangeValue(-15, 15);
  const ANGLE = ((90 + RANDOM_ANGLE_DATA) - 90) * (Math.PI / 180); // Angle in radians
  const SPEED = 15; // Magnitude of speed

  const SPEED_X = SPEED * Math.cos(ANGLE);
  const SPEED_Y = SPEED * Math.sin(ANGLE);

  const projectile = {
    x: 30,
    y: 30,
    speedX: SPEED_X,
    speedY: SPEED_Y,
    isAlive: true
  };

  projectiles.push(projectile);

  const soapPumpSFX = new Audio('sounds/soap-pump.mp3');
  soapPumpSFX.play();
}


// Particle EFX
let particleImage = new Image();
particleImage.src = "images/2020-survival-game/soap-projectile.png";
class Particle {
  constructor(x, y, vx, vy, startLifetime, startSize) {
   this.x = x;
   this.y = y;
   this.vx = vx;
   this.vy = vy;
   this.startLifetime = startLifetime;
   this.lifetime = startLifetime;
   this.startSize = startSize;
   this.size = startSize;
   this.active = true;
  }

  update(){
    if(this.active)
    {
      // Move
      this.x += this.vx;
      this.y += this.vy;
      this.vy += 2; // Apply gravity

      if (this.y + this.startSize >= CANVAS.height && this.vy > 0) {
          this.y = CANVAS.height - this.startSize * 2;

          if(this.vy > 0.7) {
            this.vy = -0.6; // Bounce
    
            this.vx *= 0.6; // Friction
          }
          else {
            this.active = false;
          }
      }
    }

    this.lifetime -= 0.025;
    let lifetimePercent = (1 / (this.startLifetime / this.lifetime));
    if (lifetimePercent <= 0.5)
    this.size = this.startSize * (lifetimePercent * 2);
  }
}

class ParticleSystem {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.particles = [];

    for(let i = 0; i < randomRangeValue(4, 7); i++)
    {
      const randomAngleDelta = randomRangeValue(-25, 25);
      const angle = ((0 + randomAngleDelta) - 90) * (Math.PI / 180); // Angle in radians
      const speed = randomRangeValue(3, 5); // Magnitude of speed
    
      const vx = speed * Math.cos(angle);
      const vy = speed * Math.sin(angle);

      const startSize = randomRangeValue(0.04, 0.125);

      const startLifetime = 0.5;

      this.particles.push(new Particle(x, y, vx, vy, startLifetime, startSize));
    }
  }
  
  update(){
    this.particles.forEach(particle => {
      particle.update();
    });

    this.particles = this.particles.filter(particle => particle.lifetime > 0);
  }

  draw(context) {
    this.particles.forEach(particle => {
      // context.globalAlpha = particle.lifetime;
      context.fillStyle = '#BBFFCE';
      context.fillRect(particle.x, particle.y, particle.size * 2, particle.size * 2);
    });
  }
}


function randomRangeValue(min, max)
{
  return Math.random() * (max - min + 1) + min;
}