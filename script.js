//04. Clicking on the heart icon of any card will increase the count in the Navbar

function heartCount(id) {
    document.getElementById(id).addEventListener('click', function () {
        const heartCountElement = document.getElementById('h-count');
        const currentCount = parseInt(heartCountElement.innerText);
        const newHeartCount = currentCount + 1;
        heartCountElement.innerText = newHeartCount;
    })
}

heartCount('favourite-btn-1');
heartCount('favourite-btn-2');
heartCount('favourite-btn-3');
heartCount('favourite-btn-4');
heartCount('favourite-btn-5');
heartCount('favourite-btn-6');
heartCount('favourite-btn-7');
heartCount('favourite-btn-8');
heartCount('favourite-btn-9');



// Call Buttons

// id1 - text, id2 - number , id3 = coin id

/* function alertMsg(id1, id2) {
    const Coin = document.getElementById('coin-count')
    const oldCoin = parseInt(Coin.innerText)
    const text = document.getElementById(id1).innerText
    const callNum = document.getElementById(id2).innerText
    const newCoin = oldCoin - 20 ;
    Coin.innerText = newCoin;
    if(newCoin>0){
    alert("📞 calling " + text + " " + callNum + "...");
    }
    else{
        alert("You don't have sufficient balance")
    }

} */

// national emergency

document.getElementById('call-btn-1').addEventListener('click', function () {

    const Coin = document.getElementById('coin-count')
    const oldCoin = parseInt(Coin.innerText)
    const text = document.getElementById('ne').innerText
    const callNum = document.getElementById('ne-num').innerText
    const newCoin = oldCoin - 20;
    Coin.innerText = newCoin;
    if (newCoin <= 0) {
        alert("You don't have sufficient balance")

    }
    else {
        alert("📞 calling " + text + " " + callNum + "...");
    }
}
);

// police helpline
document.getElementById('call-btn-2').addEventListener('click', function () {

    const Coin = document.getElementById('coin-count')
    const oldCoin = parseInt(Coin.innerText)
    const text = document.getElementById('ph').innerText
    const callNum = document.getElementById('ph-num').innerText
    const newCoin = oldCoin - 20;
    Coin.innerText = newCoin;
    if (newCoin <= 0) {
        alert("You don't have sufficient balance")

    }
    else {
        alert("📞 calling " + text + " " + callNum + "...");
    }
}
);

// fire service

document.getElementById('call-btn-3').addEventListener('click', function () {

    const Coin = document.getElementById('coin-count')
    const oldCoin = parseInt(Coin.innerText)
    const text = document.getElementById('fs').innerText
    const callNum = document.getElementById('fs-num').innerText
    const newCoin = oldCoin - 20;
    Coin.innerText = newCoin;
    if (newCoin <= 0) {
        alert("You don't have sufficient balance")

    }
    else {
        alert("📞 calling " + text + " " + callNum + "...");
    }
}
);
// Ambulance Service

document.getElementById('call-btn-4').addEventListener('click', function () {

    const Coin = document.getElementById('coin-count')
    const oldCoin = parseInt(Coin.innerText)
    const text = document.getElementById('as').innerText
    const callNum = document.getElementById('as-num').innerText
    const newCoin = oldCoin - 20;
    Coin.innerText = newCoin;
    if (newCoin <= 0) {
        alert("You don't have sufficient balance")

    }
    else {
        alert("📞 calling " + text + " " + callNum + "...");
    }
}
);

// women and child
document.getElementById('call-btn-5').addEventListener('click', function () {

    const Coin = document.getElementById('coin-count')
    const oldCoin = parseInt(Coin.innerText)
    const text = document.getElementById('wc').innerText
    const callNum = document.getElementById('wc-num').innerText
    const newCoin = oldCoin - 20;
    Coin.innerText = newCoin;
    if (newCoin <= 0) {
        alert("You don't have sufficient balance")

    }
    else {
        alert("📞 calling " + text + " " + callNum + "...");
    }
}
);
// Anti Corruption

document.getElementById('call-btn-6').addEventListener('click', function () {

    const Coin = document.getElementById('coin-count')
    const oldCoin = parseInt(Coin.innerText)
    const text = document.getElementById('ac').innerText
    const callNum = document.getElementById('ac-num').innerText
    const newCoin = oldCoin - 20;
    Coin.innerText = newCoin;
    if (newCoin <= 0) {
        alert("You don't have sufficient balance")

    }
    else {
        alert("📞 calling " + text + " " + callNum + "...");
    }
}
);
// Electricity Helpline
document.getElementById('call-btn-7').addEventListener('click', function () {

    const Coin = document.getElementById('coin-count')
    const oldCoin = parseInt(Coin.innerText)
    const text = document.getElementById('eh').innerText
    const callNum = document.getElementById('eh-num').innerText
    const newCoin = oldCoin - 20;
    Coin.innerText = newCoin;
    if (newCoin <= 0) {
        alert("You don't have sufficient balance")

    }
    else {
        alert("📞 calling " + text + " " + callNum + "...");
    }
}
);
// Brac Helpline

document.getElementById('call-btn-8').addEventListener('click', function () {

    const Coin = document.getElementById('coin-count')
    const oldCoin = parseInt(Coin.innerText)
    const text = document.getElementById('bh').innerText
    const callNum = document.getElementById('bh-num').innerText
    const newCoin = oldCoin - 20;
    Coin.innerText = newCoin;
    if (newCoin <= 0) {
        alert("You don't have sufficient balance")

    }
    else {
        alert("📞 calling " + text + " " + callNum + "...");
    }
}
);
// railway Service 

document.getElementById('call-btn-9').addEventListener('click', function () {

    const Coin = document.getElementById('coin-count')
    const oldCoin = parseInt(Coin.innerText)
    const text = document.getElementById('rs').innerText
    const callNum = document.getElementById('rs-num').innerText
    const newCoin = oldCoin - 20;
    Coin.innerText = newCoin;
    if (newCoin <= 0) {
        alert("You don't have sufficient balance")

    }
    else {
        alert("📞 calling " + text + " " + callNum + "...");
    }
}
);





// const alertMsg1 =alertMsg('ne', 'ne-num');

