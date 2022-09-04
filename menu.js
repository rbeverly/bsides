function printmenu() {
    fetch('menu.html')
    .then(response=> response.text())
    .then(text=> document.getElementsByTagName('topmenu')[0].innerHTML = text);
}

printmenu();