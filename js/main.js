// Loading Common Element Using External File
$("#header").load("header.html");
$("#footer").load("footer.html");


// AOS Js (Reveal Animation)
AOS.init({
  once: true // Animation will happen only once when the element comes into view
});


// Check if form submission was successful
if (window.location.search.includes('success=true')) {
  alert('Form submitted successfully!');
  // Redirect to home page after alert
  window.location.href = 'index.html';
}

// header scroll 
$(window).scroll(function () {
  let st = $(window).scrollTop();
  if (st > 10) {
    $("header").addClass("active");
  } else {
    $("header").removeClass("active");
  }
})

$(document).ready(function () {
  $(window).on('load', checkViewportWidth);

  function checkViewportWidth() {
    var viewportWidth = $(window).width();
    $('.tes-box').off('click'); // Remove previous click event listeners

    if (viewportWidth <= 576) {
      $('.test-content').slideUp();
      $('.tes-box.open .test-content').slideDown();

      $('.tes-box').on('click', function () {
        $('.tes-box').removeClass('open').addClass('close').find('.test-content').slideUp(500);
        $(this).addClass('open').removeClass('close').find('.test-content').slideDown(500);
      });
    } else {
      $('.tes-box').on('click', function () {
        $('.tes-box').removeClass('open').addClass('close');
        $(this).addClass('open').removeClass('close');
      });
    }
  }

  // checkViewportWidth();
});