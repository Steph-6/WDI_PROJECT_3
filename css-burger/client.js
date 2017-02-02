$(() => {
  $('.menu').click(function() {
    $(this).toggleClass('clicked');
    $('.sidebar').toggleClass('show-sidebar hide-sidebar');
  });
});
