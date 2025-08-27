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