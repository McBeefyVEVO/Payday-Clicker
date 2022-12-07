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
const moneyUp = document.getElementById("moneyUp");

const start = document.getElementById("start");

const dallas_house = document.getElementById("dallas_house");
const dallas_shop = document.getElementById("dallas_shop");

const fight_button = document.getElementById("fight_button");
const shop_button = document.getElementById("shop_button");
const back_shop = document.getElementById("back_shop");
const back_fight = document.getElementById("back_fight");

const dozerSFX = document.getElementById("dozerSFX");
const dallasSFX = document.getElementById("dallasSFX");

const tf2 = document.getElementById("tf2");
const mineblock = document.getElementById("mineblock");
const cat = document.getElementById("cat");
const fight = document.getElementById("fight")
const bangery = document.getElementById("bangery");
const sazka = document.getElementById("sazka");

const chains_house = document.getElementById("chains_house");
const chains_fight = document.getElementById("chains_fight");
const chains_ally = document.getElementById("chains_ally");

const killcount = document.getElementById("killcount");

const DMG_img = document.getElementById("DMG_img");
const HP_img = document.getElementById("HP_img");
const Cash_img = document.getElementById("Cash_img");

const DMG_stat = document.getElementById("DMG_stat");
const HP_stat = document.getElementById("HP_stat");
const Cash_stat = document.getElementById("Cash_stat");

//-------------------------------------------------------------------------------------

let coins = 0;

let playHP = 10;
let eneHP = 20;

let dmgUpgrade = 1;
let dmgUpgradePrice = 50;

let hpUpgradePrice = 50;

let scaling = 1;

let moneyUpgradePrice = 100;
let moneyUpgrade = 1;

let chainsupgrade = 0;

let kills = 0;

//-------------------------------------------------------------------------------------

attack.onmousedown = () => {
    

    if (enemyHP.innerHTML > 0 && playerHP.innerHTML > 0) {
    enemyHP.innerHTML -= dmgUpgrade;
    player.style.left = "55%";
    }

    if (enemyHP.innerHTML < 0.1) {
        coins += 25 * moneyUpgrade;
        count.innerHTML = "Cash: " + coins;

        playerHP.innerHTML = playHP;
        enemyHP.innerHTML = eneHP;

        enemyHP.innerHTML = eneHP*scaling;
        scaling += 0.50;

        kills++;

        killcount.innerHTML = "Kills: " + kills;

        



        

        
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
        clearInterval(chains);


        dallasSFX.play();
        dallasSFX.volume = 0.2;
        dallasSFX.currentTime = 0;
    }

//-------------------------------------------------------------------------------------    

}


//-------------------------------------------------------------------------------------

dmgUp.onclick = () => {
    if(coins >= dmgUpgradePrice){
        coins -= dmgUpgradePrice;
        
        count.innerHTML = "Cash: " + coins;
        dmgUpgrade++;
        dmgUpgradePrice += 50;
        dmgUp.innerHTML = "Better Gun (Increase DMG) = " + dmgUpgradePrice;

        DMG_stat.innerHTML = "DMG: " + dmgUpgrade;

    }
}

hpUp.onclick = () => {
    if(coins >= hpUpgradePrice){
        coins -= hpUpgradePrice;
        
        count.innerHTML = "Cash: " + coins;
        playHP += 5;
        hpUpgradePrice += 50;
        hpUp.innerHTML = "Medic Bag (Increase HP) = " + hpUpgradePrice;

        HP_stat.innerHTML = "HP: " + playHP;
    }
}

moneyUp.onclick = () => {
    if(coins >= moneyUpgradePrice){
        coins -= moneyUpgradePrice;
        
        count.innerHTML = "Cash: " + coins;
        moneyUpgrade++;
        moneyUpgradePrice += 100;
        moneyUp.innerHTML = "Duffle Bag (Double Cash) = " + moneyUpgradePrice;

        Cash_stat.innerHTML = "Cash Multiplier: " + moneyUpgrade;
    }
}


chains_ally.onclick = () => {
    if(coins >= 250){
        coins -= 250;

        count.innerHTML = "Cash: " + coins;
        chains_ally.style.display = "none";

        chainsupgrade = 1;

        
    }
}

//-------------------------------------------------------------------------------------
 
start.onclick = () => {
        document.body.style.background = "url(./res/img/safehouse_new.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";

        start.style.display = "none";

        dallas_house.style.display = "block";
        fight_button.style.display = "block";
        shop_button.style.display = "block";
        killcount.style.display = "block";

        DMG_img.style.display = "block";
        HP_img.style.display = "block";
        Cash_img.style.display = "block";

        DMG_stat.style.display = "block";
        HP_stat.style.display = "block";
        Cash_stat.style.display = "block";

        tf2.style.display = "none";
        mineblock.style.display = "none";
        fight.style.display = "none";
        cat.style.display = "none";
        sazka.style.display = "none";

        bangery.style.display = "none";

        
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
        killcount.style.display = "none";

        DMG_img.style.display = "none";
        HP_img.style.display = "none";
        Cash_img.style.display = "none";

        DMG_stat.style.display = "none";
        HP_stat.style.display = "none";
        Cash_stat.style.display = "none";

        back_shop.style.display = "block";
        dallas_shop.style.display = "block";

        dmgUp.style.display = "block";
        hpUp.style.display = "block";
        moneyUp.style.display = "block";
        chains_ally.style.display = "block";


        count.style.display = "block";

        if(chainsupgrade == 1){
            chains_house.style.display = "none";
        }

        if(chainsupgrade == 1){
            chains_ally.style.display = "none";
        }


}

back_shop.onclick = () => {
        document.body.style.background = "url(./res/img/safehouse_new.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";

        dallas_house.style.display = "block";
        fight_button.style.display = "block";
        shop_button.style.display = "block";
        killcount.style.display = "block";

        DMG_img.style.display = "block";
        HP_img.style.display = "block";
        Cash_img.style.display = "block";

        DMG_stat.style.display = "block";
        HP_stat.style.display = "block";
        Cash_stat.style.display = "block";

        back_shop.style.display = "none";
        dallas_shop.style.display = "none";

        dmgUp.style.display = "none";
        hpUp.style.display = "none";
        moneyUp.style.display = "none";
        chains_ally.style.display = "none";

        count.style.display = "none";

        if(chainsupgrade == 1){
            chains_house.style.display = "block";
        }
}

fight_button.onclick = () => {
        document.body.style.background = "url(./res/img/bank_new.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";

        dallas_house.style.display = "none";
        fight_button.style.display = "none";
        shop_button.style.display = "none";
        killcount.style.display = "none";

        DMG_img.style.display = "none";
        HP_img.style.display = "none";
        Cash_img.style.display = "none";

        DMG_stat.style.display = "none";
        HP_stat.style.display = "none";
        Cash_stat.style.display = "none";

        back_fight.style.display = "block";
        player.style.display = "block";
        enemy.style.display = "block";
        attack.style.display = "block";

        playerHP.style.display = "block";
        enemyHP.style.display = "block";

        enemyAttackInterval = setInterval(dmgPlayer, 600);

        if(chainsupgrade == 1){
            chains = setInterval(() => {
                enemyHP.innerHTML -= 5;
            }, 1000);
        }

        playerHP.innerHTML = playHP;

        dozerSFX.play();
        dozerSFX.volume = 0.2;
        dozerSFX.currentTime = 0;

        if(chainsupgrade == 1){
            chains_fight.style.display = "block";
            chains_house.style.display = "none";
        }



}

back_fight.onclick = () => {
    document.body.style.background = "url(./res/img/safehouse_new.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    dallas_house.style.display = "block";
    fight_button.style.display = "block";
    shop_button.style.display = "block";
    killcount.style.display = "block";

    DMG_img.style.display = "block";
    HP_img.style.display = "block";
    Cash_img.style.display = "block";

    DMG_stat.style.display = "block";
    HP_stat.style.display = "block";
    Cash_stat.style.display = "block";

    back_fight.style.display = "none";
    player.style.display = "none";
    enemy.style.display = "none";
    attack.style.display = "none";
    playerHP.style.display = "none";
    enemyHP.style.display = "none";

    clearInterval(enemyAttackInterval);
    enemyHP.innerHTML = eneHP;
    enemyHP.innerHTML = eneHP*scaling;

    if(chainsupgrade == 1){
        clearInterval(chains)
    }

    if(chainsupgrade == 1){
        chains_fight.style.display = "none";
        chains_house.style.display = "block";
    }
    
    

}

