$(document).ready(function(){   
$.ajax({
  url:'http://feeds.pinboard.in/json/u:francisco',
  jsonp:"cb",
  dataType:'jsonp',
  success: function(data) {
    console.log(data); //dumps the data to the console to check if the callback is made successfully
    $.each(data, function(index, item){
      $('#pinboard').append('<div><a href="' + item.u + '">' + item.d + '</a></div>');
      }); //each
    } //success
  }); //ajax

});//ready

// ONLY DISPLAY 5 LINKS
// $.ajax({
//   url:'http://feeds.pinboard.in/json/u:francisco',
//   jsonp:"cb",
//   dataType:'jsonp',
//   success: function(data) {
//     $.each(data, function(index, item){
//         $('#pinboard').append('<div><a href="' + item.u + '">' + item.d
// + '</a></div>');
//         if (index == 4) return false; //only display 5 items
//       }); //each
//     } //success
//   }); //ajax 

// ONLY DISPLAY CERTAIN TAGS
// $.ajax({
//   url:'http://feeds.pinboard.in/json/u:francisco',
//   jsonp:"cb",
//   dataType:'jsonp',
//   success: function(data) {
//     $.each(data, function(index, item){
//         if ($.inArray("fiu", item.t)!==-1) // if the tag is 'fiu'
//             $('#pinboard').append('<div><a href="' + item.u + '">' + item.d
// + '</a></div>');
//     }); //each
//     } //success
//   }); //ajax
