"use strict";


let popUpCross = document.getElementById('popup').querySelector('.icon.cross');

popUpCross.addEventListener('click', function () {
    closePopup();
    setTimeout(function () {
        announcementSneakPeek(1);
    }, 1000);
});





function closePopup() {
    let popUp = document.getElementById('popup');
    popUp.style.display = "none";
}