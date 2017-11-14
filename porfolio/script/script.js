function main() {
  $('.fa-list').on('click', function() {
    $('.bar').slideToggle(700);
    $('.bar').toggleClass('active');
   });
}
$(document).ready(main);