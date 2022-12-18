"use strict";
// burger bur
let navigations = document.getElementById('nav-bar');
let burgerbar = document.getElementById('burger');

burgerbar.addEventListener('click', function() {
    navigations.classList.toggle('activeNav')
    burgerbar.classList.toggle('activebar')
});

// coock slider
let data = [
  {
    id: 1,
    imageUrl: "images/coock-slider/1.jpg",
    title: "cake with nuts",
  },
  {
    id: 2,
    imageUrl: "images/coock-slider/2.jpg",
    title: "Biscuits with minced meat",
  },
  {
    id: 3,
    imageUrl: "images/coock-slider/3.jpg",
    title: "Easter cake",
  },
  {
    id: 4,
    imageUrl: "images/coock-slider/4.jpg",
    title: "A chocolate cake",
  },
  {
    id: 5,
    imageUrl: "images/coock-slider/5.jpg",
    title: "japanese chocolate cake",
  },
];

let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");
let sliderContent = document.getElementById("sider-content");
let sliderIndex = 0;

function createDivTag() {
  let divTag = document.createElement("div");
  divTag.classList.add("slide");

  return divTag;
}

function createImgTag(item) {
  let tagImage = document.createElement("img");
  tagImage.setAttribute("src", item.imageUrl);
  tagImage.setAttribute("alt", item.title);

  return tagImage;
}

function createTiTleTag(item) {
  let tagTitle = document.createElement("h3");
  tagTitle.innerText = item.title;

  return tagTitle;
}
function createDots() {
  let dotsParent = document.createElement("div");
  dotsParent.classList.add("dotParent");

  data.forEach((element) => {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    let dotId = element.id;
    if (dotId == sliderIndex + 1) {
      dot.classList.add('active');
    } else {
      dot.classList.remove ('active');
    }
    dotsParent.appendChild(dot);
    function dotsList() {
      sliderIndex = dotId - 1;
      slider();
    }
    dot.addEventListener('click', dotsList);
  });
  return dotsParent;
}
function slider() {
  sliderContent.innerHTML = "";
  let slideItem = createDivTag(data[sliderIndex]);
  let imgTag = createImgTag(data[sliderIndex]);
  let titleTag = createTiTleTag(data[sliderIndex]);
  let dotsElemen = createDots();
  slideItem.appendChild(imgTag);
  slideItem.appendChild(titleTag);
  sliderContent.appendChild(slideItem);
  sliderContent.appendChild(dotsElemen);
}

function arrowLeftClick() {
  if (sliderIndex == 0) {
    sliderIndex = data.length - 1;
    slider();
    return;
  }
  sliderIndex--;
  slider();
}
function arrowRightClick() {
  if (sliderIndex == data.length - 1) {
    sliderIndex = 0;
    slider();
    return;
  }
  sliderIndex++;
  slider();
}

arrowLeft.addEventListener("click", arrowLeftClick);

arrowRight.addEventListener("click", arrowRightClick);

setInterval(() => {
  arrowRightClick();
}, 5000);

slider();