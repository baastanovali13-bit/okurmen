 const links = document.querySelectorAll(".item > a")
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function(){
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({ behavior: "smooth" })
    }
}    javascriptr



let slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 60000);  