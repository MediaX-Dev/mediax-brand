$(document).ready(function () {
  // Call the checkViewportWidth function on window load and resize
  $(window).on('load resize', function () {
    checkViewportWidth();
  });

  function checkViewportWidth() {
    var viewportWidth = $(window).width();

    if (viewportWidth <= 1200) {
      // Code for extra large devices (1200px and down)
    } 
    if (viewportWidth <= 992) {
      // Code for large devices (992px and down)
    } 
    if (viewportWidth <= 768) {
      // Code for medium devices (768px and down)
    } 
    if (viewportWidth <= 576) {
    
    } 
  }
});
