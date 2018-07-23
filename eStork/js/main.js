window.onload = function () {
	q("body").onresize = resize;

    var tabTitles = qA(".tab-title");
	for (var i = 0; i < tabTitles.length; i++) {
		tabTitles[i].onclick = openTab;
	}

	var accTitles = qA(".acc-title");
	for (var i = 0; i < accTitles.length; i++) {

		var content = accTitles[i].nextElementSibling;	
		if (accTitles[i].classList.contains('active')) {
			content.style.maxHeight = content.scrollHeight + "px";
		}
		accTitles[i].onclick = openAccordion;
    }

    var opens = qA("[data-open]");
    for (var i = 0; i < opens.length; i++) {
		(opens[i]).onclick = showModal;
	}

    var closes = qA(".modal-close");
    for (var i = 0; i < closes.length; i++) {
        (closes[i]).onclick = hideModal;
    }
};

function openAccordion(e) {
  	e.preventDefault();
  	this.classList.toggle("active");

	var content = this.nextElementSibling;  	
	if (content.style.maxHeight){
		content.style.maxHeight = null;
	} else {
		content.style.maxHeight = content.scrollHeight + "px";
	}
}

function openTab(event) {

	event.preventDefault();
	var title = event.currentTarget;
    var panelId = title.href.substring(title.href.indexOf("#") + 1);
    var panels = qA("#"+panelId);

    for  (var i = 0; i < panels.length; i++) {
        var tabPanels = panels[i].closest(".tab-content").childNodes;
        for (var j = 0; j < tabPanels.length; j++) {
        	if (tabPanels[j].className) {
                if (tabPanels[j].className.indexOf("active") !== -1) {
                    tabPanels[j].className = tabPanels[j].className.replace(" active", "");
                }
            }
        }
        panels[i].className += " active";
    }

    var titles = qA(".tab-title");
    for (var i = 0; i < titles.length; i++) {
        var titleId = titles[i].href.substring(title.href.indexOf("#") + 1);
        if (titleId === panelId) {
            var tablinks = titles[i].closest(".tab").querySelectorAll(".tab-title");
            for (var j = 0; j < tablinks.length; j++) {
                tablinks[j].className = tablinks[j].className.replace(" active", "");
            }
            titles[i].className += " active";
        }
    }

    var content = title.closest(".acc-content");
    if (content) {
		content.style.maxHeight = "none";
		content.style.maxHeight = content.offsetHeight + "px";
	}
}

function resize() {
	 var accTitles = qA(".acc-title");
		for (var i = 0; i < accTitles.length; i++) {

		var content = accTitles[i].nextElementSibling;	
		if (accTitles[i].classList.contains('active')) {
			content.style.maxHeight = "none";
			content.style.maxHeight = content.offsetHeight + "px";
		}
    }
}

function showModal() {
	if (this.getAttribute("src")) {
        var src = this.getAttribute("src");
        q(".modal-img").setAttribute("src", src);
	}
    var modal = this.getAttribute("data-open");
	q("#"+ modal).classList.add("show");
	q("body").style.overflow = "hidden";
}

function hideModal() {
    var modals = qA(".modal");
    for (var i = 0; i < modals.length; i++) {
        if (modals[i].classList.contains('show')) {
            modals[i].classList.remove("show");
        }
    }
	q("body").style.overflow = "visible";
}

function q(tag) {
	return document.querySelector(tag);
}
function qA(tag) {
	return document.querySelectorAll(tag);
}