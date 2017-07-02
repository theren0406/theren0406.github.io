var paused = false;

        $(document).ready(function(){
            $(".menu").mouseenter(function(){
                $(this).children("ul").slideDown("fast");
                $(this).children("b").css("display","block");
            });
            $(".menu").mouseleave(function(){
                $(this).children("ul").slideUp("fast");
                $(this).children("b").css("display","none");
            });
            $(".menu a").click(function(e){
                e.preventDefault();
                $('html, body').stop().animate({ scrollTop: $($(this).attr('href')).offset().top}, 300, 'linear');
            });

            $(".goods").mouseenter(function(e){
                e = e.target.getBoundingClientRect();
                var l = e.right - 35;  //-7-28 (element's width
                var t = $(this).offset().top + 10;
                $(".like").css({'left':l,'top':t,'display':'block'});
            });
            $(".goods").mouseleave(function(e){
                if(e.relatedTarget !== $(".like")[0]){
                    $(".like").css('display','none');
                }
            });
            $(".goods").click(function(){
                $(".active").removeClass("active");
                var index = $(this).children().attr("alt");
                $(".photolist img[alt="+index+"]").addClass("active");
                $(".photolist").css("left", index.substring(5) * -190 -190);
                $(".photopop").fadeIn();
                $("body").css("overflow","hidden");
            });

            $("nav a").click(function(e){
                $("nav").toggleClass("gradient");
                e.preventDefault();
            });

            $(".login, .like").click(function(){
                $(".loginpop").fadeIn();
                $("body").css("overflow","hidden");
            });
            function modalClose(){
                $(".modal").fadeOut();
                $("body").css("overflow","visible");
            }
            $(".modal-close").click(function(){
                modalClose();
            });
            $(window).click(function(e){
                if (e.target == $(".modal")[0]|| e.target == $(".modal")[1]) {
                    modalClose();
                } 
            });
            $(".modal-login input").focus(function() {
                $(".modal-login i").css( "color", "rgb(226,226,226)");
                $(this).siblings("i").css( "color", "rgb(243,134,171)");
            });
         
            $(".prev").click(function(){
                
                if($(".photolist").css("left") == "-190px"){                   
                    $(".photolist img:eq(10)").addClass("stop active");               
                    $(".active").first().addClass("stop").removeClass("active");
                    $(".photolist").css("left", "-1710px"); 
                }
                $(".photolist").animate({left: "+=190"}, "500" );
                $(".active").prev().addClass("active");
                $(".active").last().removeClass("stop active");  
            }); 

            $(".next").click(function(){ 

                if($(".photolist").css("left") == "-1520px"){
                    $(".photolist").css("left", "0px");                 
                    $(".photolist img:eq(1)").addClass(" active");
                    $(".active").last().removeClass("active");       
                }           
                $(".photolist").animate({left: "-=190"}, "500" );
                $(".active").next().addClass("active");
                $(".active").first().removeClass(" active");                            
            });

            $(".appbox > a > img").mouseenter(function(){
                paused = true;
            });
             $(".appbox > a > img").mouseleave(function(){
                paused = false;
            });
            setInterval(function(){ 
                if(!paused) {
                appTimer(); discountTimer(); }
            }, 5000);

        });
        
        function appTimer(){      
            $(".appbox > a").children().each(function() {
                if ($(this).css('display') ==  "none") {
                    $( this ).fadeIn("slow");
                } else {
                   $( this ).fadeOut("slow");
                }
            });    
        }

        function discountTimer(){
            var on = $(".discount > a").children().filter(function() {
                return $(this).css('display') == 'inline';
            });
            on.fadeOut("slow");

            if (on.parent().is( ":last-child" )){
                $(".discount > a:first").children().fadeIn("slow");
            } else {
                on.parent().next().children().fadeIn("slow");
            }
        }