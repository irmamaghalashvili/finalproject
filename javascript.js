// burger bur
let navigations = document.getElementById('nav-bar');
let burgerbar = document.getElementById('burger');

burgerbar.addEventListener('click', function() {
    navigations.classList.toggle('activeNav')
    burgerbar.classList.toggle('activebar')
});
// sign in
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// sign up
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
