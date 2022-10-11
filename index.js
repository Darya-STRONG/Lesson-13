const elemsOne = document.querySelectorAll(".nav>li");
// const elemsTwo = document.querySelectorAll('.nav.nav__item')
// Влад, почему не работает поиск по вложености классам?

for (let i = 0; i < elemsOne.length; i++) {
  if (i % 2 == 0) {
    elemsOne[i].classList.add("active");
  }
}

elemsOne.forEach((item) => {
  const innerText = item.innerText;
  if (innerText === "Link 5") {
    item.remove();
  }
});
