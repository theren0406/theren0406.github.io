        var count = 0; // how many times did user drop star
        function allowDrop(ev) {
            ev.preventDefault();
        }
        function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);

            // only frames without star are droppable 
            var frames = document.querySelectorAll(".frame > span");
            	for (var i = 0; i < frames.length; i++) {
            		if(frames[i].childNodes[0] == null){
            			frames[i].ondragover = allowDrop;
            		}        		
            	}
        }
        function drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            var star = document.getElementById(data);
            star.classList.remove("star");
            star.classList.add("star_in");  

            // add star in frame, then set target frame as undroppable     
            ev.target.appendChild(star);
            ev.target.ondragover = null;
            count++;

            if (count >= 6){
            	var frames = document.querySelectorAll(".frame > span");

            	//check if all frames are with star
            	for (var i = 0; i < frames.length; i++) {
            		if(frames[i].childNodes[0] == null){  
            			return;        			
            		}        		
            	}
            
            	//stars & frames light up
            	var stars = document.querySelectorAll(".star_in");       	
            	for (var i = 0; i < stars.length; i++) {
            	stars[i].classList.remove("star_in");
                }        	
            	var frames = document.querySelectorAll(".frame > span");
            	for (var i = 0; i < frames.length; i++) {
            		frames[i].style.opacity = 0.9;
            	}
            	var next = document.querySelector("#nextPage");            	 
            	next.style.animation = "arrowfadeIn 4s linear 1s forwards";
            }
        }
        function highlight(){
            var exp = document.querySelector("#explain");
            var opa = 0;
            var id = setInterval(frame, 100);
            function frame() {
                if (opa > 0.75) {
                    clearInterval(id);
                } else {
                    opa += 0.1;
                    exp.style.opacity = opa;
                }
            }
        }

        window.onload = function () {
            var stars = document.querySelectorAll(".star");
            for (var i = 0; i < stars.length; i++) {
            	stars[i].draggable = true;
            	stars[i].ondragstart = drag;
            }
            var frames = document.querySelectorAll(".frame > span");
            for (var i = 0; i < frames.length; i++) {
            	frames[i].ondrop = drop;
            	frames[i].ondragover = allowDrop;
            }
            document.querySelector("#name").onclick = highlight;
        }