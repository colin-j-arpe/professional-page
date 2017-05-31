var openSection = 0;
var openSubsection = -1;

$(document).ready(function () {
	
	var sections = $(".vertical-section");
	var titles = $(".section-title");
	var sectionContents = $(".content");
	var headers = $(".content-header");
	var subsections = $(".content-subsection");


	titles.each(function(i)	{
		$(this).on("click", function()	{
console.log("clicked " + i);
			if (i > 0) {
				// $(".open").addClass("closed").removeClass("open");
				// $(".section-title-text").eq(i).addClass("open");
				hideContent(i);
				// setTimeout(function()	{
				// 	moveGrid(i);
				// }, 1000);
				// setTimeout(function()	{
					showContent(i);
				// }, 500);
				openSection = i;
			}
		});
	});

	function hideContent(i)	{
		for (var j = 0; j < sectionContents.length; j++) {
			$(".content").eq(openSection - 1).hide(500);
			// $(".content").eq(j).css({"display":"none"});
		}
	}

	function moveGrid (i)	{
		sections[i].setAttribute("style","width:48%");
		sections[openSection].setAttribute("style","width:12%");
		titles[openSection].setAttribute("style","z-index:1");
		titles[i].setAttribute("style","z-index:-1");
		openSection = i;
	}

	function showContent(i)	{
		// if (i > 1) {
			// $(".content").eq(i-2).css({"display":"block"});
			$(".content").eq(i - 1).show(1000);
		// }
	}

	headers.each(function(i)	{
		$(this).on("click", function()	{
console.log(i);
console.log($(".content-subsection").eq(i).attr("display"));
			if (i != openSubsection)	{
				hideSubsections();
				showSubsection(i);
				openSubsection = i;
			}
		});
	});

	function hideSubsections()	{
		subsections.each(function()	{
			$(this).hide(500);
		});
	}

	function showSubsection(i)	{
		$(".content-subsection").eq(i).show(1000);
	}

});		//	end of document ready function
