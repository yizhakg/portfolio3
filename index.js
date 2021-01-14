function navToDiv(id) {
  let div = document.getElementById(id);
  div.scrollIntoView(false)
  setTimeout(() => {
    let btn = document.getElementById('menu-btn');
    btn.checked = false;
  }, 500)
}
function addBackgroundText() {
  let backgroundDiv = document.querySelector('.background');
  for (i = 0; i < 120; i++) {
    backgroundDiv.innerHTML += "Lorem ipsum dolor sit amet consectetur adipisicing elit. At magnam expedita repellendus repellat iure, harum aliquid soluta est. Dicta ut ullam distinctio aperiam repudiandae consequuntur esse. Quae, eaque totam. Est."
  }
}
window.onload = () => {
  let div = document.getElementById('header');
  div.scrollIntoView();
  addBackgroundText();
}
