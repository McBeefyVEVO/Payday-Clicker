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

const SwatSFX = document.getElementById("SwatSFX");
const dallasSFX = document.getElementById("dallasSFX");

const tf2 = document.getElementById("tf2");
const mineblock = document.getElementById("mineblock");
const cat = document.getElementById("cat");
const fight = document.getElementById("fight")
const bangery = document.getElementById("bangery");
const bangery_back = document.getElementById("bangery_back");
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

const funny = document.getElementById("funny");
const funny_buy = document.getElementById("funny_buy");

const dallas_boss = document.getElementById("dallas_boss");
const boss_select = document.getElementById("boss_select");
const boss_select_back = document.getElementById("boss_select_back");

const back_boss_fight = document.getElementById("back_boss_fight");

const Taser_fight = document.getElementById("Taser_fight");
const taser = document.getElementById("taser");
const taserHPbox = document.getElementById("taserHP");
const attack_taser = document.getElementById("attack_taser");
const taserSFX = document.getElementById("taserSFX");

const Cloaker_fight = document.getElementById("Cloaker_fight");
const cloaker = document.getElementById("cloaker");
const cloakerHPbox = document.getElementById("cloakerHP");
const attack_cloaker = document.getElementById("attack_cloaker");
const cloakerSFX = document.getElementById("cloakerSFX");

const Dozer_fight = document.getElementById("Dozer_fight");
const dozer = document.getElementById("dozer");
const dozerHPbox = document.getElementById("dozerHP");
const attack_dozer = document.getElementById("attack_dozer");
const dozerSFX = document.getElementById("dozerSFX");

const sokol_house = document.getElementById("sokol_house");
const sokol_fight = document.getElementById("sokol_fight");
const sokol_ally = document.getElementById("sokol_ally");



//-------------------------------------------------------------------------------------

let cash = 0;

let playHP = 10;
let swatHP = 20;

let taserHP = 500;
let cloakerHP = 1000;
let dozerHP = 2000;

let dmgUpgrade = 1;
let dmgUpgradePrice = 50;

let hpUpgradePrice = 50;

let scaling = 1;

let moneyUpgradePrice = 100;
let moneyUpgrade = 1;

let chainsupgrade = 0;
let sokolupgrade = 0;

let kills = 0;

let funnyupgrade = 0;

//-------------------------------------------------------------------------------------

attack.onmousedown = () => {
    

    if (enemyHP.innerHTML > 0 && playerHP.innerHTML > 0) {
    enemyHP.innerHTML -= dmgUpgrade;
    player.style.left = "55%";
    }

    if (enemyHP.innerHTML < 0.1) {
        cash += 25 * moneyUpgrade;
        count.innerHTML = "Cash: " + cash;

        playerHP.innerHTML = playHP;
        enemyHP.innerHTML = swatHP;

        enemyHP.innerHTML = swatHP*scaling;
        scaling += 0.25;

        kills++;

        killcount.innerHTML = "Kills: " + kills;

        
    }

}

attack_taser.onmousedown = () => {
    

    if (taserHPbox.innerHTML > 0 && playerHP.innerHTML > 0) {
    taserHPbox.innerHTML -= dmgUpgrade;
    player.style.left = "55%";
    }

    if (taserHPbox.innerHTML < 0.1) {
        cash += 50 * moneyUpgrade;
        count.innerHTML = "Cash: " + cash;

        playerHP.innerHTML = playHP;
        taserHPbox.innerHTML = taserHP;

        kills++;

        killcount.innerHTML = "Kills: " + kills;

        
    }

}

attack_cloaker.onmousedown = () => {
    

    if (cloakerHPbox.innerHTML > 0 && playerHP.innerHTML > 0) {
    cloakerHPbox.innerHTML -= dmgUpgrade;
    player.style.left = "55%";
    }

    if (cloakerHPbox.innerHTML < 0.1) {
        cash += 100 * moneyUpgrade;
        count.innerHTML = "Cash: " + cash;

        playerHP.innerHTML = playHP;
        cloakerHPbox.innerHTML = cloakerHP;

        kills++;

        killcount.innerHTML = "Kills: " + kills;



        
    }

}

attack_dozer.onmousedown = () => {
    

    if (dozerHPbox.innerHTML > 0 && playerHP.innerHTML > 0) {
    dozerHPbox.innerHTML -= dmgUpgrade;
    player.style.left = "55%";
    }

    if (dozerHPbox.innerHTML < 0.1) {
        cash += 250 * moneyUpgrade;
        count.innerHTML = "Cash: " + cash;

        playerHP.innerHTML = playHP;
        dozerHPbox.innerHTML = dozerHP;

        kills++;

        killcount.innerHTML = "Kills: " + kills;



        
    }

}

//-------------------------------------------------------------------------------------

attack.onmouseup = () => {
    player.style.left = "30%";
    
}

attack_taser.onmouseup = () => {
    player.style.left = "30%";
    
}

attack_cloaker.onmouseup = () => {
    player.style.left = "30%";
    
}

attack_dozer.onmouseup = () => {
    player.style.left = "30%";
    
}

const dmgPlayer = () => {
    playerHP.innerHTML--;
    
    if (playerHP.innerHTML <= 0) {
        clearInterval(enemyAttackInterval);

        dallasSFX.play();
        dallasSFX.volume = 0.2;
        dallasSFX.currentTime = 0;

        clearInterval(sokolInterval);
        clearInterval(chainsInterval);
    }

}

const dmgPlayerDozer = () => {
    playerHP.innerHTML -= 3;
    
    if (playerHP.innerHTML <= 0) {
        clearInterval(enemyAttackInterval);

        dallasSFX.play();
        dallasSFX.volume = 0.2;
        dallasSFX.currentTime = 0;

        clearInterval(sokolInterval);
        clearInterval(chainsInterval);
    }

}

//-------------------------------------------------------------------------------------    




//-------------------------------------------------------------------------------------

dmgUp.onclick = () => {
    if(cash >= dmgUpgradePrice){
        cash -= dmgUpgradePrice;
        
        count.innerHTML = "Cash: " + cash;
        dmgUpgrade++;
        dmgUpgradePrice += 50;
        dmgUp.innerHTML = "Better Gun (Increase DMG) = " + dmgUpgradePrice;

        DMG_stat.innerHTML = "DMG: " + dmgUpgrade;

    }
}

hpUp.onclick = () => {
    if(cash >= hpUpgradePrice){
        cash -= hpUpgradePrice;
        
        count.innerHTML = "Cash: " + cash;
        playHP += 5;
        hpUpgradePrice += 50;
        hpUp.innerHTML = "Medic Bag (Increase HP) = " + hpUpgradePrice;

        HP_stat.innerHTML = "HP: " + playHP;
    }
}

moneyUp.onclick = () => {
    if(cash >= moneyUpgradePrice){
        cash -= moneyUpgradePrice;
        
        count.innerHTML = "Cash: " + cash;
        moneyUpgrade++;
        moneyUpgradePrice += 100;
        moneyUp.innerHTML = "Duffle Bag (Double Cash) = " + moneyUpgradePrice;

        Cash_stat.innerHTML = "Cash Multiplier: " + moneyUpgrade;
    }
}


chains_ally.onclick = () => {
    if(cash >= 250){
        cash -= 250;

        count.innerHTML = "Cash: " + cash;
        chains_ally.style.display = "none";

        chainsupgrade = 1;

        
    }
}

sokol_ally.onclick = () => {
    if(cash >= 350){
        cash -= 350;

        count.innerHTML = "Cash: " + cash;
        sokol_ally.style.display = "none";

        sokolupgrade = 1;

        
    }
}



funny_buy.onclick = () => {
    if(cash >= 1000){
        cash -= 1000;

        count.innerHTML = "Cash: " + cash;
        funny_buy.style.display = "none";

        funnyupgrade = 1;

        DMG_stat.innerHTML = "DMG: " + 15;
        dmgUpgrade += 15;
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
        boss_select.style.display = "block";

        funny.style.display = "none";
        funny_buy.style.display = "none";



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

bangery.onclick = () => {
    start.style.display = "none";

    tf2.style.display = "block";
    mineblock.style.display = "block";
    fight.style.display = "block";
    cat.style.display = "block";
    sazka.style.display = "block";

    bangery_back.style.display = "block";
    bangery.style.display = "none";

}

bangery_back.onclick = () => {
    start.style.display = "block";

    tf2.style.display = "none";
    mineblock.style.display = "none";
    fight.style.display = "none";
    cat.style.display = "none";
    sazka.style.display = "none";

    bangery_back.style.display = "none";
    bangery.style.display = "block";
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
        boss_select.style.display = "none";

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
        sokol_ally.style.display = "block";

        funny.style.display = "none";
        funny_buy.style.display = "block";


        count.style.display = "block";

        if(chainsupgrade == 1){
            chains_house.style.display = "none";
            chains_ally.style.display = "none";
        }

        if(sokolupgrade == 1){
            sokol_house.style.display = "none";
            sokol_ally.style.display = "none";
        }

        if(funnyupgrade == 1){
            funny_buy.style.display = "none";
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
        boss_select.style.display = "block";

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
        sokol_ally.style.display = "none";

        count.style.display = "none";

        funny_buy.style.display = "none";

        if(funnyupgrade == 1){
            funny.style.display = "block";
        }

        if(chainsupgrade == 1){
            chains_house.style.display = "block";
        }

        if(sokolupgrade == 1){
            sokol_house.style.display = "block";
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
        boss_select.style.display = "none";

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

        funny.style.display = "none";
        funny_buy.style.display = "none";

        

        enemyAttackInterval = setInterval(dmgPlayer, 800);

        if(chainsupgrade == 1){

           chainsInterval = setInterval(() => {enemyHP.innerHTML -= 5}, 1000);
            
           chains_fight.style.display = "block";
           chains_house.style.display = "none";
        }

        if(sokolupgrade == 1){
            sokol_house.style.display = "none";
            sokol_fight.style.display = "block";

            sokolInterval = setInterval (() => {enemyHP.innerHTML -= 5}, 600);
        }

        playerHP.innerHTML = playHP;

        SwatSFX.play();
        SwatSFX.volume = 0.2;
        SwatSFX.currentTime = 0;


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
    boss_select.style.display = "block";

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
    enemyHP.innerHTML = swatHP;
    enemyHP.innerHTML = swatHP*scaling;


    if(chainsupgrade == 1){
        chains_fight.style.display = "none";
        chains_house.style.display = "block";
        clearInterval(chainsInterval);
    }

    if(sokolupgrade == 1){
        sokol_fight.style.display = "none";
        sokol_house.style.display = "block";
        clearInterval(sokolInterval);
    }
    
    if(funnyupgrade == 1){
        funny.style.display = "block"
    }

}











boss_select.onclick = () => {
    document.body.style.background = "url(./res/img/boss_select_room.jpeg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    dallas_house.style.display = "none";
    fight_button.style.display = "none";
    shop_button.style.display = "none";
    killcount.style.display = "none";

    boss_select.style.display = "none";
    boss_select_back.style.display = "block";

    DMG_img.style.display = "none";
    HP_img.style.display = "none";
    Cash_img.style.display = "none";

    if(funnyupgrade == 1){
        funny.style.display = "none";
    }

    if(chainsupgrade == 1){
        chains_house.style.display = "none";
    }

    if(sokolupgrade == 1){
        sokol_house.style.display = "none";
    }
    

    DMG_stat.style.display = "none";
    HP_stat.style.display = "none";
    Cash_stat.style.display = "none";

    Taser_fight.style.display = "block";
    Cloaker_fight.style.display = "block";
    Dozer_fight.style.display = "block";

    dallas_boss.style.display = "block";
}

boss_select_back.onclick = () => {
    document.body.style.background = "url(./res/img/safehouse_new.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    dallas_house.style.display = "block";
    fight_button.style.display = "block";
    shop_button.style.display = "block";
    killcount.style.display = "block";

    boss_select.style.display = "block";
    boss_select_back.style.display = "none";

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

    dallas_boss.style.display = "none";

    Taser_fight.style.display = "none";
    Cloaker_fight.style.display = "none";
    Dozer_fight.style.display = "none";

    if(funnyupgrade == 1){
        funny.style.display = "block";
    }

    if(chainsupgrade == 1){
        chains_house.style.display = "block";
    }

    if(sokolupgrade == 1){
        sokol_house.style.display = "block";
    }
}

Taser_fight.onclick = () => {

    if(kills >= 30){
        document.body.style.background = "url(./res/img/boss_fight_room.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";


        player.style.display = "block";
        taser.style.display = "block";
        attack_taser.style.display = "block";

        playerHP.style.display = "block";
        taserHPbox.style.display = "block";

        Taser_fight.style.display = "none";
        Cloaker_fight.style.display = "none";
        Dozer_fight.style.display = "none";

        dallas_boss.style.display = "none";

        back_boss_fight.style.display = "block";
        boss_select_back.style.display = "none";

        enemyAttackInterval = setInterval(dmgPlayer, 600);

        if(chainsupgrade == 1){

            chainsInterval = setInterval(() => {taserHPbox.innerHTML -= 5}, 1000);
             
            chains_fight.style.display = "block";
         }
 
         if(sokolupgrade == 1){
             sokol_fight.style.display = "block";
 
             sokolInterval = setInterval (() => {taserHPbox.innerHTML -= 5}, 600);
         }

        playerHP.innerHTML = playHP;

        taserSFX.play();
        taserSFX.volume = 0.2;
        taserSFX.currentTime = 0;
        }

        
}

Cloaker_fight.onclick = () => {
    if(kills >= 50){
        document.body.style.background = "url(./res/img/boss_fight_room.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";


        player.style.display = "block";
        cloaker.style.display = "block";
        attack_cloaker.style.display = "block";

        playerHP.style.display = "block";
        cloakerHPbox.style.display = "block";

        Taser_fight.style.display = "none";
        Cloaker_fight.style.display = "none";
        Dozer_fight.style.display = "none";

        dallas_boss.style.display = "none";

        back_boss_fight.style.display = "block";
        boss_select_back.style.display = "none";

        enemyAttackInterval = setInterval(dmgPlayer, 400);

        if(chainsupgrade == 1){

           chainsInterval = setInterval(() => {cloakerHPbox.innerHTML -= 5}, 1000);
            
           chains_fight.style.display = "block";
        }

        if(sokolupgrade == 1){
            sokol_fight.style.display = "block";

            sokolInterval = setInterval (() => {cloakerHPbox.innerHTML -= 5}, 600);
        }

        playerHP.innerHTML = playHP;

        cloakerSFX.play();
        cloakerSFX.volume = 0.2;
        cloakerSFX.currentTime = 0;
        }
}

Dozer_fight.onclick = () => {
    if(kills >= 100){
        document.body.style.background = "url(./res/img/boss_fight_room.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";


        player.style.display = "block";
        dozer.style.display = "block";
        attack_dozer.style.display = "block";

        playerHP.style.display = "block";
        dozerHPbox.style.display = "block";

        Taser_fight.style.display = "none";
        Cloaker_fight.style.display = "none";
        Dozer_fight.style.display = "none";

        dallas_boss.style.display = "none";

        back_boss_fight.style.display = "block";
        boss_select_back.style.display = "none";

        enemyAttackInterval = setInterval(dmgPlayerDozer, 1000);

        if(chainsupgrade == 1){

           chainsInterval = setInterval(() => {dozerHPbox.innerHTML -= 5}, 1000);
            
           chains_fight.style.display = "block";
        }

        if(sokolupgrade == 1){
            sokol_fight.style.display = "block";

            sokolInterval = setInterval (() => {dozerHPbox.innerHTML -= 5}, 600);
        }

        playerHP.innerHTML = playHP;

        dozerSFX.play();
        dozerSFX.volume = 0.2;
        dozerSFX.currentTime = 0;
        }
}





back_boss_fight.onclick = () => {
    document.body.style.background = "url(./res/img/boss_select_room.jpeg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    taser.style.display = "none";
    cloaker.style.display = "none";
    dozer.style.display = "none";
    player.style.display = "none";

    attack_taser.style.display = "none";
    attack_cloaker.style.display = "none";
    attack_dozer.style.display = "none";

    playerHP.style.display = "none";
    taserHPbox.style.display = "none";
    cloakerHPbox.style.display = "none";
    dozerHPbox.style.display = "none";

    back_boss_fight.style.display = "none";
    boss_select_back.style.display = "block";



    if(chainsupgrade == 1){
        chains_fight.style.display = "none";
        clearInterval(chainsInterval);
    }

    if(sokolupgrade == 1){
        sokol_fight.style.display = "none";
        clearInterval(sokolInterval);
    }
    

    DMG_stat.style.display = "none";
    HP_stat.style.display = "none";
    Cash_stat.style.display = "none";

    Taser_fight.style.display = "block";
    Cloaker_fight.style.display = "block";
    Dozer_fight.style.display = "block";

    dallas_boss.style.display = "block";


    clearInterval(enemyAttackInterval);
    taserHPbox.innerHTML = taserHP;
    cloakerHPbox.innerHTML = cloakerHP;
    dozerHPbox.innerHTML = dozerHP;
    


}





