window.onload=function() {
  var E = document.getElementsByClassName("item");
  var m = E.length;
  var n = parseInt(Math.random()*m);
  for (var i=m-1;i>=0;i--) {
      var e = E[i];
      e.style.display='none';
  }
  E[n].style.display='';
}