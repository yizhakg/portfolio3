function navToDiv(id) {
 let div = document.getElementById(id);
 div.scrollIntoView(false)
 setTimeout(()=>{
  let btn = document.getElementById('menu-btn');
  btn.checked = false;
 },500)
}
window.onload = ()=>{
  let div = document.getElementById('header');
  div.scrollIntoView();  
}