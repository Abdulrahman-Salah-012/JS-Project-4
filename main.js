let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

let slideCount = sliderImages.length;
let currentSlide = 1;

// get Elements
let slideNumberElement = document.querySelector(".slide-number");
let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");

// Click on prev and Next
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

// Create UL
let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");
for (let i = 1; i <= slideCount; i++) {
  let paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i);
  paginationItem.innerHTML = i;

  paginationElement.appendChild(paginationItem);
}
document.querySelector(".indicators").appendChild(paginationElement);

// click Event on LIS
let createdUl = document.getElementById("pagination-ul");
var paginationsBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);


//Click on lis
paginationsBullets.forEach((li) => {
  li.addEventListener("click", () => {
    paginationsBullets.forEach((li) => li.classList.remove("active"));
    li.classList.add("active");
    currentSlide = li.dataset.index;
    theChecker();
  });
});

// Call checker Fun
theChecker();

//FUNS
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    // nextButton.style.pointerEvents = "none";
    return false
  } else {
    currentSlide++;
    theChecker();
  }
}
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    // prevButton.style.pointerEvents = "none";
    return false
  } else {
    currentSlide--;
    theChecker();
  }
}

function theChecker() {
  // set innerHTMl
  slideNumberElement.innerHTML = `Slide # ${currentSlide} of ${slideCount}`;

  // remove ACTIVE form ALL
  removeAllActive();

  //set active Class on IMg
  sliderImages[currentSlide - 1].classList.add("active");
  //set active Class on li
  createdUl.children[currentSlide - 1].classList.add("active");

  //check on current slide
  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  currentSlide == slideCount
    ? nextButton.classList.add("disabled")
    : nextButton.classList.remove("disabled");
}

function removeAllActive() {
  sliderImages.forEach((img) => img.classList.remove("active"));

  paginationsBullets.forEach((li) => li.classList.remove("active"));
}
