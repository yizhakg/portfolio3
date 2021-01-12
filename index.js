function navToDiv(id) {
 let div = document.getElementById(id);
 div.scrollIntoView(false)
}
window.onload = ()=>{
  let div = document.getElementById('header');
  div.scrollIntoView(false);  
}