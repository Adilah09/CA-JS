let doorIsOpen = true

function toggledoor() {
    const door = document.getElementById('door');

    if (doorIsOpen) {
        door.src= 'img/close.jpg.jpg';
        doorIsOpen = false;
    } else {
        door.src= 'img/open.jpg.png';
        doorIsOpen = true;
    }


}