console.log("credit to vojta for some code lol");

const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const attack = document.getElementById("attack");

const playerHP = document.getElementById("playerHP");
const enemyHP = document.getElementById("enemyHP");

const next = document.getElementById("next");
const count = document.getElementById("count");
const dmgUp = document.getElementById("dmgUp");
const hpUp = document.getElementById("hpUp");

const start = document.getElementById("start");

const dallas_house = document.getElementById("dallas_house");
const dallas_shop = document.getElementById("dallas_shop");

const fight_button = document.getElementById("fight_button");
const shop_button = document.getElementById("shop_button");
const back_shop = document.getElementById("back_shop");
const back_fight = document.getElementById("back_fight");

const dozerSFX = document.getElementById("dozerSFX");




//-------------------------------------------------------------------------------------

let coins = 0;

let playHP = 10;
let eneHP = 10;

let dmgUpgrade = 1;
let dmgUpgradePrice = 50;

let hpUpgradePrice = 50;

let scaling = 1;

//-------------------------------------------------------------------------------------

attack.onmousedown = () => {
    

    if (enemyHP.innerHTML > 0 && playerHP.innerHTML > 0) {
    enemyHP.innerHTML -= dmgUpgrade;
    player.style.left = "55%";
    }

    if (enemyHP.innerHTML < 0.1) {
        coins += 30;
        count.innerHTML = "Cash: " + coins;

        playerHP.innerHTML = playHP;
        enemyHP.innerHTML = eneHP;

        enemyHP.innerHTML = eneHP*scaling;
        scaling += 0.50;

        
    }

}

//-------------------------------------------------------------------------------------

attack.onmouseup = () => {
    player.style.left = "30%";
    
}

const dmgPlayer = () => {
    playerHP.innerHTML--;
    

    if (playerHP.innerHTML <= 0) {
        clearInterval(enemyAttackInterval);
    }

//-------------------------------------------------------------------------------------    

}


//-------------------------------------------------------------------------------------

dmgUp.onclick = () => {
    if(coins >= dmgUpgradePrice){
        coins -= dmgUpgradePrice;
        
        count.innerHTML = "Cash: " + coins;
        dmgUpgrade += 2;
        dmgUpgradePrice += 50;
        dmgUp.innerHTML = "Better Gun (Increase DMG) = " + dmgUpgradePrice;

    }
}

hpUp.onclick = () => {
    if(coins >= hpUpgradePrice){
        coins -= hpUpgradePrice;
        
        count.innerHTML = "Cash: " + coins;
        playHP += 2;
        hpUpgradePrice += 50;
        hpUp.innerHTML = "Medic Bag (Increase HP) = " + hpUpgradePrice;
    }
}

//-------------------------------------------------------------------------------------
 
start.onclick = () => {
        document.body.style.background = "url(./res/img/safehouse.jpeg)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";

        start.style.display = "none";

        dallas_house.style.display = "block";
        fight_button.style.display = "block";
        shop_button.style.display = "block";

        
}

shop_button.onclick = () => {
        document.body.style.background = "url(./res/img/shop.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";

        dallas_house.style.display = "none";
        fight_button.style.display = "none";
        shop_button.style.display = "none";

        back_shop.style.display = "block";
        dallas_shop.style.display = "block";

        dmgUp.style.display = "block";
        hpUp.style.display = "block";

        count.style.display = "block";


}

back_shop.onclick = () => {
        document.body.style.background = "url(./res/img/safehouse.jpeg)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";

        dallas_house.style.display = "block";
        fight_button.style.display = "block";
        shop_button.style.display = "block";

        back_shop.style.display = "none";
        dallas_shop.style.display = "none";

        dmgUp.style.display = "none";
        hpUp.style.display = "none";

        count.style.display = "none";
}

fight_button.onclick = () => {
        document.body.style.background = "url(./res/img/bank.jpg)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";

        dallas_house.style.display = "none";
        fight_button.style.display = "none";
        shop_button.style.display = "none";

        back_fight.style.display = "block";
        player.style.display = "block";
        enemy.style.display = "block";
        attack.style.display = "block";

        playerHP.style.display = "block";
        enemyHP.style.display = "block";

        enemyAttackInterval = setInterval(dmgPlayer, 600);

        playerHP.innerHTML = playHP;

        dozerSFX.play();
        dozerSFX.volume = 0.2;
        dozerSFX.currentTime = 0;



}

back_fight.onclick = () => {
    document.body.style.background = "url(./res/img/safehouse.jpeg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    dallas_house.style.display = "block";
    fight_button.style.display = "block";
    shop_button.style.display = "block";

    back_fight.style.display = "none";
    player.style.display = "none";
    enemy.style.display = "none";
    attack.style.display = "none";
    playerHP.style.display = "none";
    enemyHP.style.display = "none";

    clearInterval(enemyAttackInterval);
    enemyHP.innerHTML = eneHP;
    enemyHP.innerHTML = eneHP*scaling;
    
    

}