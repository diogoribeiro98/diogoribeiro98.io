function fadeInPage() {
    if (!window.AnimationEvent) { return; }
    var fader = document.getElementById('fader');
    fader.classList.add('fade-out');    
}

function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("active"); // Add or remove 'active' class
}

window.addEventListener('pageshow', function (event) {
    if (!event.persisted) {
      return;
    }
    var fader = document.getElementById('fader');
    fader.classList.remove('fade-in');
  });
