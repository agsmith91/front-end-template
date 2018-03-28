$(function() {});
function trackIt(){
  var html = '<tr>';
    html += '<td>' + $('#exercise-name').val() + '</td>';
    html += '<td>' + $('#reps').val() + '</td>';
    html += '<td>' + $('#weight').val() + '</td>';
  html += '</tr>';
  $('tbody').append(html);
  $('#exercise-name').val('');
  $('#reps').val('');
  $('#weight').val('');
}
