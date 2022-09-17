function show_modal(id) {
    if (id === "12main") {
        drop_it(id);
    }
    document.getElementById(id).style.display = "block";
}

function hide_modal(id) {
    document.getElementById(id).style.display = "none";
}

function drop_it(e) {
    // document.getElementById('playa').play();
    // document.getElementById('playa').muted = false;
    // document.getElementById('playa').play();
    document.getElementById('playa').muted = false;
    document.getElementById('playa').play();
}

function shhh(e) {
    if (e.key === 's') {
        console.log('s pressed');
        document.getElementById('playa').pause();
    }
}