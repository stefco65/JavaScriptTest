function EnemyShoot(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.type = "shooter";
}

EnemyShoot.prototype = Object.create(Enemy.prototype);

EnemyShoot.prototype.shoot = function() {
    return this.name + " sobie skaczę!";
}


const enemyN = new Enemy("Normal");
console.log(enemyN.fly()); //Normalny latam
console.log(enemyN.shoot()); //błąd - nie ma takiej metody

const enemyS = new EnemyShoot("Shooter");
console.log(enemyS.fly()); //Shooter latam
console.log(enemyS.shoot()); //Shooter strzelam