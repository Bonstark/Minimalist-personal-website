$(document).ready(function(){
        $("#container").fadeIn();


$("#right").mouseenter(function(){
	$(this).addClass("rotate").delay(3000).queue(function(){
		$(this).removeClass("rotate").dequeue();
	});
  });
});
