
let navigation = ["მთავარი", "სერვისები", "ჩვენი გუნდი", "კომპანიის შესახებ", "კონტაქტი"];

let links = ["index.html", "services.html", "Team.html", "About.html", "contact.html"];

let navlen = navigation.length;

let text = '<ul class=>';

for (let i = 0; i < navlen; i++) {
    text += '<li><a href=' + links[i] + ">" + navigation[i] + "</a></li>";
}
text += "</ul>";
console.log(text);
document.getElementById("nav").innerHTML = text;


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

