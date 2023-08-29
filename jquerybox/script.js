$(document).ready(function() {
  $('#colorInput').on('input', function() {
    var colorValue = $(this).val();
    $('#colorBox').css('background-color', colorValue);
    $('#colorBox').text(colorValue);
  });
});
