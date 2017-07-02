// parallax
let jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    let scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});


/* restauhasard

$(document).ready(function() {
  let E = document.getElementsByClassName("item");
  let m = E.length;
  let n = parseInt(Math.random()*m);
  for (let i=m-1;i>=0;i--) {
      let e = E[i];
      e.style.display='none';
  }
  E[n].style.display='';
})
*/