function labelRight() {
	if( $(window).width() >= 620) {
		$(".addRight").addClass("right");
	} else {
		$(".addRight").removeClass("right");
	}
}
function labelInline() {
    if( $(window).width() >= 620) {
        $(".removeInline").removeClass("inline");
    } else {
        $(".removeInline").addClass("inline");
    }
}
	
$(document).ready(function(){ 
	labelRight();
    labelInline();

	$(window).resize(function() {
		labelRight();
         labelInline();
	});

    $(".yes").click(function(){
        $(this).parent().siblings("textarea").slideDown("fast");
    });	
    $(".no").click(function(){
        $(this).parent().siblings("textarea").slideUp("fast");
    });	

    $(".transfer").click(function(){
        $(".sub-input").slideDown("fast");
    });	
    $(".no-transfer").click(function(){
        $(".sub-input").slideUp("fast");
    });	
});	