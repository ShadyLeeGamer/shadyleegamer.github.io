var lockdowneerElement = document.getElementById("lockdowneer");

document.addEventListener('click', function (event) {
if (event.target.closest('#lockdowneer'))
{
    shoot();
}
}, false);

let projectiles = [];

function shoot()
{
    lockdowneerElement.id = "lockdowneer-shooting";

    var projectileInstanceImg = new Image(64,32); // width, height values are optional params
    projectileInstanceImg.src = "../../images/2020-survival-game/lockdowneer-idle.png";
    lockdowneerElement.appendChild(projectileInstanceImg);
    projectiles.push(new Projectile(projectileInstanceImg, 90, 50, 50));


    lockdowneerElement.addEventListener("animationend", () => {
        lockdowneerElement.id = "lockdowneer";
});
}

class Projectile {
    constructor(element, angle, x, y)
    {
        this.element = element;
        this.radius = 15;
        this.mass = this.radius;
        this.angle = angle;
        this.x = x;
        this.y = y;
        // this.dx = Math.cos(angle) * 7;
        // this.dy = Math.sin(angle) * 7;
    }

    move()
    {
        this.element.style.transform =`translate(${this.x}px, ${this.y}px)`
        // this.x += this.dx;
        // this.y += this.dy;
    }
}
function animate()
{
    requestAnimationFrame(animate);
    
    projectiles.forEach(projectile =>
        {
            projectile.move();
        })
}

animate();