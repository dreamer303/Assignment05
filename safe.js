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

// Creating New Div

const callHistory = []
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

    const storedData = {
        name: text,
        number: callNum,
        date: new Date().toLocaleTimeString()
    }
    callHistory.push(storedData)
    // console.log(callHistory)
    const getHistorySection = document.getElementById('history')
    // for (const data of storedData) {
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
    
// }
);



