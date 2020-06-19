"use strict";

$('.modal-btn').click(function() {
	var title = $(this).data("title");
	var url = $(this).data("img");

  $('#modal-title').html(title);
  $('#modal-photo').attr("src", url);
});