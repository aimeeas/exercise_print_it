const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

function updateSlide (index) {
    const slide = slides[index];
    document.getElementById("slideImage").src = "./assets/images/slideshow/" + slide.image;
    document.getElementById("slideTitle").innerHTML = slide.tagLine ;

    allDots.forEach(function (dot) {
        dot.classList.remove("dot_selected");
    });
    
    allDots[index].classList.add("dot_selected");
}



let imageBanner = document.querySelector ("#banner .banner-img");

let i = 0;

let flecheGauche = document.querySelector("#banner .arrow_left");
    flecheGauche.addEventListener("click", function () {
        i = i - 1;
        if (i < 0) {
            i = slides.length - 1;
        }
        updateSlide(i);
    });

let flecheDroite = document.querySelector("#banner .arrow_right");
    flecheDroite.addEventListener("click", function () {
        i = i + 1;
        if (i > slides.length - 1) {
            i = 0;
        }
        updateSlide(i);
    });



const dotsContainer = document.querySelector("#banner .dots");
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    if (i === 0) {
        dot.classList.add("dot_selected");
    }

    dotsContainer.appendChild(dot);
}

const allDots = document.querySelectorAll("#banner .dot");