
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


const callHistory =[]

function callAlertButton(callID,nameID, numID){
    document.getElementById(callID).addEventListener('click', function () {

    const Coin = document.getElementById('coin-count')
    const oldCoin = parseInt(Coin.innerText)
    const text = document.getElementById(nameID).innerText
    const callNum = document.getElementById(numID).innerText
    const newCoin = oldCoin - 20;
    Coin.innerText = newCoin;
    if (newCoin <= 0) {
        alert("You don't have sufficient balance")

    }
    else {
        alert("📞 calling " + text + " " + callNum + "...");
    }

    // div part
     const storedData = {
        name: text,
        number: callNum,
        date: new Date().toLocaleTimeString()
    }
    callHistory.push(storedData)

    const getHistorySection = document.getElementById('history')
        const div = document.createElement('div')
        div.innerHTML = `
        <div  class="flex justify-between items-center my-1.5 bg-[#f5fff6] lg:p-4">
                <div >
                    <p class="lg:text-2xl font-bold">${storedData.name}</p>
                    <p class="lg:text-lg text-gray-600">${storedData.number}</p>
                </div>
                <p  class="lg:text-lg text-gray-600">${storedData.date}</p>

            </div>
        `
        getHistorySection.appendChild(div)
    }
);
}

callAlertButton('call-btn-1','ne','ne-num');
callAlertButton('call-btn-2','ph','ph-num');
callAlertButton('call-btn-3','fs','fs-num');
callAlertButton('call-btn-4','as','as-num');
callAlertButton('call-btn-5','wc','wc-num');
callAlertButton('call-btn-6','ac','ac-num');
callAlertButton('call-btn-7','eh','eh-num');
callAlertButton('call-btn-8','bh','bh-num');
callAlertButton('call-btn-9','rs','rs-num');



