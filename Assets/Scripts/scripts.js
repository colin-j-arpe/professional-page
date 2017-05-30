var openSection = 1;

$(document).ready(function () {
	var grid = $("#grid-wrapper");
	var sections = $(".vertical-section");
	var titles = $(".section-title");


	titles.each(function(i)	{
		$(this).on("click", function()	{
console.log("clicked " + i);
			if (i > 0) {
				// $(".open").addClass("closed").removeClass("open");
				// $(".section-title-text").eq(i).addClass("open");
				moveGrid(i);
				showContent(i);
			}
		});
	});

	function moveGrid (i)	{
console.log(grid);
		var gridString = "1fr 1fr 1fr 1fr 1fr";
		gridString[i*4] = '4';
		grid.css({"grid-template-columns":gridString});

		sections[i].setAttribute("style","width:48%");
		sections[openSection].setAttribute("style","width:12%");
		titles[openSection].setAttribute("style","z-index:1");
		titles[i].setAttribute("style","z-index:-1");

		openSection = i;
	}

	function showContent(i)	{
		sectionContents = $(".content");
		for (var j = 0; j < sectionContents.length; j++) {
			$(".content").eq(j).css({"display":"none"});
		}
		if (i > 1) {
			$(".content").eq(i-2).css({"display":"block"});
		}
	}

});		//	end of document ready function
