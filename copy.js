// function copyTextAlert(copyBtnID, numberID) {

//     document.getElementById(copyBtnID).addEventListener('click', function () {
//         // copy count
//         const defaultCopyValue = document.getElementById('copyNum')
//         const copyValue = parseInt(defaultCopyValue.innerText)
//         const newCopyValue = copyValue + 1;
//         defaultCopyValue.innerText = newCopyValue;

//         // copy the text
//         const copyButton = document.getElementById(copyBtnID)
//         const getNum = document.getElementById(numberID).textContent
//         navigator.clipboard.writeText(getNum)
//             .then(function () {
//                 alert('Copied');

//                 copyButton.textContent = 'Copied!';
//                 copyButton.classList.add('copied');
//                 setTimeout(function () {
//                     copyButton.textContent = 'Copy';
//                     copyButton.classList.remove('copied');
//                 }, 2000);
//             })
//     })
// }


// copyTextAlert('copy-btn-1', 'ne-num');


// document.getElementById('clear-btn')
//             .addEventListener('click', function(){
//                 document.getElementById('history').addEventListener('click', function(event){
//                     console.log(event.target);
//                 })

//                 // event.target.parentNode.removeChild(event.target);
//             })



// Clear button functionality


// Clear button functionality
document.getElementById('clear-btn').addEventListener('click', function() {
    // Get the history container
    const historyContainer = document.getElementById('history');
    
    // Get all the call history div elements
    const callHistoryDivs = historyContainer.querySelectorAll('#call-history-div');
    
    // Remove all call history divs using a for loop
    for (let i = 0; i < callHistoryDivs.length; i++) {
        callHistoryDivs[i].remove();
    }
    
    // Also clear the callHistory array
    callHistory.length = 0;
});