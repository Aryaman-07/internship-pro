const splash=document.querySelector('.splash');

document.addEventListener('DOMContentLoaded',(e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');

    },2000);
})
$(document).ready(function() {
    $('.carousel').carousel({
      interval: 3000
    })
  });