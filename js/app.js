// Navigation bar construction

const items = Array.from(document.querySelectorAll('.content_item'));
const nav_bar = document.querySelector('.nav_bar');
items.forEach((items,i) => {
  const name = items.querySelector('.name_in_the_menu');
  const nav_item = document.createElement ('li');
  const nav_item_a = document.createElement ('a');
  const nav_item_a_href = `#section${i+1}`;
  const nav_item_a_class = `nav_link`;
  nav_item_a.textContent = name.textContent;
  nav_item_a.setAttribute ('href', nav_item_a_href);
  nav_item_a.setAttribute ('class', nav_item_a_class);
  nav_item.appendChild (nav_item_a);
  nav_bar.appendChild (nav_item);
});

// Hover menu over if document is scrolled, hide after 2600 msec

document.addEventListener ('scroll', function () {
  nav_bar.setAttribute ('class', "nav_bar active");
    setTimeout(function(){
        nav_bar.setAttribute ('class', "nav_bar hidden");
    }, 2600);
});

// Smooth scroll code

const anchor = Array.from(document.querySelectorAll('a[href^="#"]'));

anchor.forEach(anchor => {
    anchor.addEventListener('click', function (scroll) {
        scroll.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({behavior: "smooth"});
    });
});
