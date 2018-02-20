$(document).ready(function() {
  $('.carousel').carousel({
  		interval: 3000
	});

	 $('#myModal').on('shown.bs.modal', () => {
    $('#myInput').trigger('focus');
  });
});