const player = document.getElementById("player");
const attack = document.getElementById("attack");

const playerHP = document.getElementById("playerHP");
const enemyHP = document.getElementById("enemyHP");
const info = document.getElementById("info");

const next = document.getElementById("next");
const count = document.getElementById("count");
const dmgUp = document.getElementById("dmgUp");
const hpUp = document.getElementById("hpUp");

let coins = 0;

let playHP = 10;
let eneHP = 10;

let dmgUpgrade = 1;
let dmgUpgradePrice = 50;

let hpUpgradePrice = 50;

let scaling = 1;



attack.onmousedown = () => {
    

    if (enemyHP.innerHTML > 0 && playerHP.innerHTML > 0) {
    enemyHP.innerHTML -= dmgUpgrade;
    player.style.left = "200px";
    }

    if (enemyHP.innerHTML < 0.1) {
        info.innerHTML = "Info: +1 coin";
        coins += 15;
        count.innerHTML = "COINS: " + coins;
        clearInterval(enemyAttackInterval);

        playerHP.innerHTML = playHP;
        enemyHP.innerHTML = 10*scaling;
        scaling += 0.50;
        info.innerHTML = "Info: New Enemy Arrived";
    
    enemyAttackInterval = setInterval(dmgPlayer, 600)

    }

}

attack.onmouseup = () => {
    player.style.left = 0;
    
}

const dmgPlayer = () => {
    playerHP.innerHTML--;
    

    if (playerHP.innerHTML <= 0) {
        clearInterval(enemyAttackInterval);
        info.innerHTML = "Info: u ded lmao"
    }

    

}

let enemyAttackInterval = setInterval(dmgPlayer, 600)


dmgUp.onclick = () => {
    if(coins >= dmgUpgradePrice){
        coins -= dmgUpgradePrice;
        
        count.innerHTML = "COINS: " + coins;
        dmgUpgrade += 2;

    }
}

hpUp.onclick = () => {
    if(coins >= hpUpgradePrice){
        coins -= hpUpgradePrice;
        
        count.innerHTML = "COINS: " + coins;
        playHP += 2;

    }
}