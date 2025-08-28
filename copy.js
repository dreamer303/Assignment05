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
