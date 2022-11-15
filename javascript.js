let form = document.querySelector('#form-box');
let input = document.querySelector('#input');
let ulItem = document.querySelector('#ul-list');
let addbutten = document.querySelector('#btn')
let liItem = document.createElement('li');
let clearAll = document.querySelector('.clear');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let inputVelue = input.value;
    if (inputVelue == ' ') {
        return;
    }
    
    let li = document.createElement('li');

    let newClear = document.createElement('i');
    newClear.classList.add('fa-solid');
    newClear.classList.add('fa-trash-can');
    
    newClear.addEventListener('click', function(){
        li.remove();
    });
    li.innerText = inputVelue;
    li.appendChild(newClear);
    ulItem.appendChild(li);
    input.value = ' ';
});
clearAll.addEventListener('click', function(){
    ulItem.innerHTML = ' ';
})

let navigations = document.getElementById('nav-bar');
let burgerbar = document.getElementById('burger');

burgerbar.addEventListener('click', function() {
    navigations.classList.toggle('activeNav')
    burgerbar.classList.toggle('activebar')
});
