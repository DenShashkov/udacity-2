const items = Array.from(document.querySelectorAll('.content_item'));
const nav_bar = document.querySelector('.nav_bar');
items.forEach((items,i) => {
  const name = items.querySelector('.name_in_the_menu');
  const nav_item = document.createElement ('li');
  const nav_item_a = document.createElement ('a');
  const nav_item_a_href = `#${i+1}`;
  const nav_item_a_class = `nav_link`;
  nav_item_a.textContent = name.textContent;
  nav_item_a.setAttribute ('href', nav_item_a_href);
  nav_item_a.setAttribute ('class', nav_item_a_class);
  nav_item.appendChild (nav_item_a);
  nav_bar.appendChild (nav_item);
});

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
    event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
        nav_bar.setAttribute('class', "nav_bar hidden")
      });
    }
  });
});

document.addEventListener ('scroll', function () {
  nav_bar.setAttribute ('class', "nav_bar active");
    setTimeout(function(){
        nav_bar.setAttribute ('class', "nav_bar hidden");
    }, 1600);
});
