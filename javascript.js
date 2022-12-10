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


// book slide
let data2 = [
  {
    id: 11,
    imageUrl: "images/books/MartinEden.jpg",
    title: "Martin Eden",
    title2: "Living in Oakland at the beginning of the 20th century, Martin Eden struggles to rise above his destitute, proletarian circumstances through an intense and passionate pursuit of self-education, hoping to achieve a place among the literary elite. His principal motivation is his love for Ruth Morse."
  },
  {
    id: 22,
    imageUrl: "images/books/buddenbrooks.jpg",
    title: "Buddenbrooks",
    title2: "Buddenbrooks is a 1901 novel by Thomas Mann, chronicling the decline of a wealthy north German merchant family over the course of four generations, incidentally portraying the manner of life and mores of the Hanseatic bourgeoisie in the years from 1835 to 1877."
  },
  {
    id: 33,
    imageUrl: "images/books/Vanity-Fair",
    title: "Vanity Fair",
    title2: "Vanity Fair is an English novel by William Makepeace Thackeray, which follows the lives of Becky Sharp and Amelia Sedley amid their friends and families during and after the Napoleonic Wars."
  },
  {
    id: 44,
    imageUrl: "images/books/book*thief.jpg",
    title: "The Book Thief",
    title2: "The Book Thief is a historical fiction novel by the Australian author Markus Zusak, and is his most popular book. Published in 2005, The Book Thief became an international bestseller and was translated into 63 languages and sold 16 million copies. It was adapted into the 2013 feature film, The Book Thief.",
  },
  {
    id: 55,
    imageUrl: "images/books/the-night-in-lisabon.jpg",
    title: "The Night in Lisbon",
    title2: "The Night in Lisbon is a novel by Erich Maria Remarque published in 1962. It revolves around the plight of two German refugees in the opening months of World War II. One of the refugees relates their story during the course of a single night in Lisbon in 1942.",
  }
]
