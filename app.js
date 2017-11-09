$(document).ready(function(){
        $("#container").fadeIn();
        var box=$("#right");
        var boxCenter=[box.offset().left+box.width()/2, box.offset().top+box.height()/2];

  $(document).mousemove(function(e){
	   var angle = Math.atan2(e.pageX- boxCenter[0],- (e.pageY- boxCenter[1]) )*(180/Math.PI);
     var angle = angle-180
     box.css({ "-webkit-transform": 'rotate(' + angle + 'deg)'});
     box.css({ '-moz-transform': 'rotate(' + angle + 'deg)'});
     box.css({ 'transform': 'rotate(' + angle + 'deg)'});
   });

   $(".switch").click(function() {
     $("#leftTop, #leftBottom").fadeOut("normal", function() {
       $(this).css("display", "none");
       $(".hiddenOnLoad").show();
     });
   });

   $(".return").click(function() {
     $("#leftTopHidden, #leftBottomHidden").fadeOut("normal", function() {
      $(this).css("display", "none");
      $("#leftTop, #leftBottom").css("display", "inline-block");
      });
    });

});
