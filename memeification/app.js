var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

$('p').selectionSharer();

$('.hover-img').hover(function(){
  var img = $(this).attr('data-img');
  $('.static-img').show();
  $('.static-img').attr('src', img)
},function(){
$('.static-img').hide();

});